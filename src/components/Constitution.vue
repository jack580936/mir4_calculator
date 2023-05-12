<template>
    <div class="container-fluid constitution col-6">
        <div class="constitutionStatus">
            <img v-if="!showGif" :src="getImageUrl('bg/constitutionBg.png')" alt="constitution" @click="handleClick"/>
            <template v-for="item in constitutionItem" :key="item">
                <input v-if="!showGif" v-model.number="item.value" :placeholder="`${item.name}`"
                       :class="`input-box ${item.id}`"/>
            </template>
            <select v-if="!showGif" class="input-box constitution-select" v-model="currentTier">
                <option :value="null" disabled>選擇體質</option>
                <template v-for="number in numbers" :key="number">
                    <option :value="number">{{ number }}階</option>
                </template>
            </select>

        </div>
        <div class="constitutionInventory">
            <template v-for="material_category in init_inventory">
                <div class="inventory mb-3 col-12 col-sm-6 col-xl-6 col-xxl-4">
                    <template v-for="(material,index) in material_category" :key="index">
                        <div class="input-group input-group-sm">
                            <img :src="getImageUrl(`Constitution/${material.class}.png`)"
                                 :class="`input-group img-thumbnail ${material.level}`"
                                 alt>
                            <label class="input-group-text">{{ material.show_name }}</label>
                            <button class="btn add-btn" type="button" @mousedown="startCount(material,0 ,$event)"
                                    @mouseup="stopInterval" @mouseleave="stopInterval">+
                            </button>
                            <input v-model.number="material.value" :min="minimum"
                                   oninput="validity.valid||(value='');"
                                   class="form-control" type="number">
                            <button class="btn minus-btn" type="button" @mousedown="startDecrement(material,0 ,$event)"
                                    @mouseup="stopInterval" @mouseleave="stopInterval">-
                            </button>
                        </div>
                    </template>
                </div>
            </template>
        </div>
        <div v-if="showGif" class="eggs">
            <div class="eggs-picture-group">
                <img :src="currentCat" alt="be happy :D"/>
                <button @click="changeCat" class="button-30">Change</button>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
import {getImageUrl} from "@/utils";
import {counter} from "../utils/intervalCountNum.js"
import {attack, eva, mp, hp, spellDefense, physicalDefense, accuracy} from "../utils/constitutionData";

export default {
    name: "Constitution",
    data() {
        return {
            minimum: 0,
            clickCount: 0,
            showGif: false,
            currentTier: null,
            constitutionStart: 8,
            constitutionEnd: 19,
            constitutionItem: {
                phyDEF: {name: "物理防禦", id: "phyDEF", value: null},
                spellDEF: {name: "法術防禦", id: "spellDEF", value: null},
                hp: {name: "生命值", id: "hp", value: null},
                mp: {name: "魔力", id: "mp", value: null},
                EVA: {name: "閃避", id: "EVA", value: null},
                accuracy: {name: "命中", id: "accuracy", value: null},
                ATK: {name: "攻擊", id: "ATK", value: null},
            },
            name_mapping: [
                {name: '藥草葉', show_name: '藥草葉'},
                {name: '藥草根', show_name: '藥草根'},
                {name: '靈芝', show_name: '靈芝'},
                {name: '毒角片', show_name: '毒角片'},
                {name: '百年果', show_name: '百年果'},
                {name: '花幽飲', show_name: '花幽飲'},
                {name: 'dark_steel', show_name: '生命精華'},
                {name: 'powder', show_name: '閃粉'},
                {name: 'money', show_name: '銅幣'},
            ],
            catList: [
                "cat/cat1.jpg",
                "cat/cat2.jpg",
                "cat/cat3.jpg",
                "cat/cat4.jpg",
                "cat/cat5.jpg",
                "cat/cat6.jpg",
                "cat/cat7.jpg",
                "cat/cat8.jpg",
            ],
            currentCat: "cat/cat3.jpg",
            inventoryNum: [],
        };
    },
    mounted() {
        this.changeCat();
    },
    computed: {
        numbers() {
            return Array.from({length: this.constitutionEnd - this.constitutionStart + 1}, (_, i) => i + this.constitutionStart);
        },
        init_inventory() {
            return this.inventories();
        }


    },
    methods: {
        getImageUrl,
        ...counter,
        handleClick() {
            this.clickCount++;
            if (this.clickCount >= 10) {
                this.showGif = true;
            }
        },
        changeCat() {
            const randomIndex = Math.floor(Math.random() * (this.catList.length));
            this.currentCat = this.getImageUrl(this.catList[randomIndex]);
        },
        getTotalUpgradeData(constitutionAttribute, currentLevel) {
            if (this.currentTier === null) {
                return;
            }
            let totalUpgradeData = {};
            const targetTier = constitutionAttribute[this.currentTier - 8]
            let startLevel = targetTier.levels.findIndex((item) => item.level === currentLevel) !== -1 ? targetTier.levels.findIndex((item) => item.level === currentLevel) : 0;
            const upgradeItemName1 = targetTier.levels[0].upgradeItem1;
            const upgradeItemName2 = targetTier.levels[0].upgradeItem2;
            Object.assign(totalUpgradeData, {'upgradeItem1': upgradeItemName1, 'upgradeItem2': upgradeItemName2})
            let totalUpgradeAmount1 = 0;
            let totalUpgradeAmount2 = 0;
            for (let i = startLevel; i < targetTier.levels.length; i++) {
                const level = targetTier.levels[i];
                totalUpgradeAmount1 += level.upgradeAmount1;
                totalUpgradeAmount2 += level.upgradeAmount2;
                Object.assign(totalUpgradeData, {
                    'upgradeAmount1': totalUpgradeAmount1,
                    'upgradeAmount2': totalUpgradeAmount2
                });
            }
            return totalUpgradeData;
        },
        inventories() {
            let inventory_num = [];
            const level_mapping = [
                {name: 'Legendary', show_name: '傳說'},
                {name: 'Epic', show_name: '英雄'},
                {name: 'Rare', show_name: '稀有'},
                {name: 'Uncommon', show_name: '高級'}
            ];

            this.name_mapping.forEach(item => {
                let temp = [];
                level_mapping.forEach(level => {
                    if (!['dark_steel', 'powder', 'money'].includes(item.name)) {
                        temp.push({
                            show_name: `${level.show_name}${item.show_name}`,
                            name: `${level.name}_${item.name}`,
                            level: level.name,
                            class: item.name,
                            value: null
                        })
                    }
                })
                if (temp.length > 0) {
                    this.inventoryNum.push(temp)
                }
            })
            return this.inventoryNum
        },
    },
};
</script>

<style scoped lang="scss">
.constitution {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #0c1e35;
  width: 100%;
  height: calc(100% - 42px);
  overflow: auto;
}

p {
  color: azure;
  text-align: center;
}

.constitutionStatus {
  position: relative;
  min-width: fit-content;
  & > .input-box {
    position: absolute;
    transform: translate(-50%, -50%);
    max-height: 2rem;
    min-height: 2rem;
    max-width: 6rem;
    min-width: 6rem;
    width: 10vw;
    height: 5vh;
    border-radius: 10px;
    border: 1px solid #000;
    text-align: center;
    font-size: 1rem;
    color: #000;
    background-color: #fff;
  }

  & > .phyDEF {
    top: 28%;
    left: 23%;
    transform: translate(-50%, -50%);
  }

  & > .spellDEF {
    top: 28%;
    left: 77%;
    transform: translate(-50%, -50%);
  }

  & > .hp {
    top: 55%;
    left: 11.5%;
    transform: translate(-50%, -50%);
  }

  & > .mp {
    top: 55%;
    left: 88.5%;
    transform: translate(-50%, -50%);
  }

  & > .EVA {
    top: 83%;
    left: 22%;
    transform: translate(-50%, -50%);
  }

  & > .accuracy {
    top: 83%;
    left: 77%;
    transform: translate(-50%, -50%);
  }

  & > .ATK {
    top: 95%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > .constitution-select {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12vw;
  }

  & > img {
    opacity: 0.8;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

}

.constitutionInventory{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.eggs-picture-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  padding-top: 1rem;;
}


</style>
