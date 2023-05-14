<template>
    <div class="container-fluid constitution">
        <div v-if="showGif" class="eggs">
            <div class="eggs-picture-group">
                <img :src="currentCat" alt="be happy :D" @click="changeCat"/>
                <div class="eggs-button">
                    <button @click="changeCat" class="button-30">Change</button>
                    <button @click="catReset" class="button-30">Back</button>
                </div>
            </div>
            <hr>
        </div>
        <div class="constitutionStatus">
            <img v-if="!showGif" :src="getImageUrl('bg/constitutionBg.png')" alt="constitution" @click="handleClick"/>
            <template v-for="item in constitutionItem" :key="item">
                <div v-if="!showGif && this.currentTier!==null" :class="`attrInput ${item.id}`">
                    <button class="btn add-btn" type="button" @mousedown="startCount(item,item.maxLevel+1 ,$event)"
                            @mouseup="stopInterval" @mouseleave="stopInterval">+
                    </button>
                    <input  v-model.number="item.value" :placeholder="`${item.name}`"  :max="item.maxLevel" :min="item.minLevel"/>
                    <button class="btn minus-btn" type="button" @mousedown="startDecrement(item, item.minLevel ,$event)"
                            @mouseup="stopInterval" @mouseleave="stopInterval">-
                    </button>
                </div>
            </template>
            <select v-if="!showGif" class="input-box constitution-select bg-dark" v-model="currentTier" @change="setConstitutionLevel" >
                <option :value="null" disabled>選擇體質</option>
                <template v-for="number in numbers" :key="number">
                    <option :value="number">{{ number }}階</option>
                </template>
            </select>
        </div>
            <div v-if="this.currentTier!==null" class="constitutionAnswer container-fluid">
                <h4>還需要以下材料:</h4>
                <div class="answer-list">
                    <template v-for="item in constitutionItem" :key="item">
                        <div class="answer mb-3 ">
                            <div class="input-group input-group-sm">
                                <img :src="getImageUrl(`Constitution/${item.id}.png`)"
                                     :class="`input-group img-thumbnail`"
                                     alt>
                                <label class="input-group-text">{{ item.name }}</label>
                            </div>
                            <template v-for="upgradeItem in getAttrUpgradeData(this.currentTier,this.constitutionData[item.id],item.value)">
                                <div class="list-group list-group-flush">
                                    <img :src="getImageUrl(`Constitution/${upgradeItem.upgradeItem1}.png`)"
                                         :class="`input-group img-thumbnail ${upgradeItem.classification}`"
                                         alt>
                                    <label class="list-group-item">{{ upgradeItem.upgradeItem1 }}</label>
                                    <label class="list-group-item">{{ upgradeItem.upgradeAmount1 }}</label>
                                </div>
                                <div class="list-group list-group-flush">
                                    <img :src="getImageUrl(`Constitution/${upgradeItem.upgradeItem2}.png`)"
                                         :class="`input-group img-thumbnail ${upgradeItem.classification}`"
                                         alt>
                                    <label class="list-group-item">{{ upgradeItem.upgradeItem2 }}</label>
                                    <label class="list-group-item">{{ upgradeItem.upgradeAmount2 }}</label>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
                <h4 class="col-12"> 總共需要以下材料： </h4>
                <div class="totalRequirement col-12 col-xl-12">
                    <div v-for="(items, lvl) in getTotalUpgradeMaterial()" class="list-group list-group-flush">
                        <h4 v-if="ClassName === lvl" class="list-group-item">{{this.ClassName}}</h4>
                        <h4 v-else class="list-group-item">{{ lvl }} ➙ {{this.ClassName}}</h4>
                        <template v-for="(value, materialName) in items">
                            <div class="list-group list-group-sm answer-img">
                                <img v-if="value>0 && !['真氣', '生命精華', '銅幣'].includes(materialName)"
                                     :src="getImageUrl(`Constitution/${materialName}.png`)"
                                     :class="`list-group-item img-thumbnail ${lvl}`"
                                     alt="...">
                                <img v-else-if="value>0 && ['真氣', '生命精華', '銅幣'].includes(materialName)"
                                     :src="getImageUrl(`Constitution/${materialName}.png`)"
                                     :class="`list-group-item img-thumbnail Uncommon`" alt="...">
                                <label v-if="value>0" class="material list-group-item col-12">{{
                                    materialName
                                    }} : {{ value.toLocaleString() }}</label>
                                <label v-else-if="value<0" class="material list-group-item col-12">{{
                                    value
                                    }} : enough</label>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
            <div v-if="this.currentTier!==null" class="constitutionInventory container-fluid">
              <h4>庫存</h4>
              <div class="inventory-list" >
                <template v-for="material_category in init_inventory">
                    <div class="inventory mb-3 col-12 col-sm-6 col-xl-4 col-xxl-4">
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
            </div>
        </div>
</template>

<script>
import {getImageUrl} from "@/utils";
import {counter} from "@/utils/intervalCountNum"
import {attack, eva, mp, hp, spellDefense, physicalDefense, accuracy} from "@/utils/constitutionData";

export default {
    name: "Constitution",
    data() {
        return {
            minimum: 0,
            clickCount: 0,
            showGif: false,
            currentTier: null,
            ClassName: 'Epic',
            constitutionStart: 8,
            constitutionEnd: 19,
            constitutionItem: {
                physicalDefense: {name: "物理防禦", id: "physicalDefense", value: null, maxLevel: 0, minLevel: 0},
                spellDefense: {name: "法術防禦", id: "spellDefense", value: null, maxLevel: 0, minLevel: 0},
                hp: {name: "生命值", id: "hp", value: null, maxLevel: 0, minLevel: 0},
                mp: {name: "魔力", id: "mp", value: null, maxLevel: 0, minLevel: 0},
                eva: {name: "閃避", id: "eva", value: null, maxLevel: 0, minLevel: 0},
                accuracy: {name: "命中", id: "accuracy", value: null, maxLevel: 0, minLevel: 0},
                attack: {name: "攻擊", id: "attack", value: null, maxLevel: 0, minLevel: 0},
            },
            name_mapping: [
                {name: '藥草葉', show_name: '藥草葉'},
                {name: '藥草根', show_name: '藥草根'},
                {name: '靈芝', show_name: '靈芝'},
                {name: '毒角片', show_name: '毒角片'},
                {name: '百年果', show_name: '百年果'},
                {name: '花幽飲', show_name: '花幽飲'},
                {name: 'lifeEssence', show_name: '生命精華'},
                {name: 'energy', show_name: '真氣'},
                {name: 'money', show_name: '銅幣'},
            ],
            constitutionData:{'physicalDefense': physicalDefense, 'spellDefense': spellDefense, 'hp': hp, 'mp': mp, 'eva': eva, 'accuracy': accuracy, 'attack': attack},
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
            totalUpgradeMaterial: {}
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

        },

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
        catReset(){
            this.clickCount = 0;
            this.showGif = false;
        },
        getAttrUpgradeData(currentTier, constitutionAttribute, currentLevel) {
            if ((this.currentTier === null) || (currentLevel === null)) {
                return;
            }
            let totalUpgradeData = {};
            const targetTier = constitutionAttribute[currentTier - 8]
            let startLevel = targetTier.levels.findIndex((item) => item.level === currentLevel) !== -1 ? targetTier.levels.findIndex((item) => item.level === currentLevel) : 0;
            let lastLevel = targetTier.levels[4].level;
            const classification = targetTier.classification;
            const upgradeItemName1 = targetTier.levels[0].upgradeItem1;
            const upgradeItemName2 = targetTier.levels[0].upgradeItem2;
            let totalUpgradeAmount1 = 0;
            let totalUpgradeAmount2 = 0;
            Object.assign(totalUpgradeData, {'upgradeItem1': upgradeItemName1,
                                                    'upgradeAmount1': totalUpgradeAmount1,
                                                    'upgradeItem2': upgradeItemName2,
                                                    'upgradeAmount2': totalUpgradeAmount2,
                                                    'classification': classification,});
            if(lastLevel+1 === currentLevel){
                return [totalUpgradeData];
            }
            for (let i = startLevel; i < targetTier.levels.length; i++) {
                const level = targetTier.levels[i];
                totalUpgradeAmount1 += level.upgradeAmount1;
                totalUpgradeAmount2 += level.upgradeAmount2;
                Object.assign(totalUpgradeData, {
                    'upgradeAmount1': totalUpgradeAmount1,
                    'upgradeAmount2': totalUpgradeAmount2
                });
            }
            return [totalUpgradeData];
        },
        calculateUpgradeMaterial(){
            let totalUpgradeData = {};
            const constitutionAttribute = this.constitutionData;
            let constitutionItem = this.constitutionItem;
            for(let attr in constitutionAttribute){
                let currentLevel = constitutionItem[attr].value;
                let currentTier = this.currentTier;
                let upgradeData = this.getAttrUpgradeData(currentTier, constitutionAttribute[attr], currentLevel);
                if(upgradeData === undefined){
                    continue;
                }
                upgradeData.forEach((item) => {
                    // if(totalUpgradeData[item.classification] === undefined){
                    //     totalUpgradeData[item.classification] = {};
                    // }
                    if(totalUpgradeData[item.upgradeItem1] === undefined){
                        totalUpgradeData[item.upgradeItem1] = 0;
                    }
                    if(totalUpgradeData[item.upgradeItem2] === undefined){
                        totalUpgradeData[item.upgradeItem2] = 0;
                    }
                    totalUpgradeData[item.upgradeItem1] += item.upgradeAmount1;
                    totalUpgradeData[item.upgradeItem2] += item.upgradeAmount2;
                })
            }
            this.totalUpgradeMaterial = totalUpgradeData;
        },
        getTotalUpgradeMaterial() {
            if (this.currentTier === null) {
                return;
            }
            let totalUpgradeMaterial = JSON.parse(JSON.stringify(this.totalUpgradeMaterial));
            this.calculateUpgradeMaterial();
            if(this.currentTier >=14){
                this.ClassName = 'Legendary';
            }
            const totalCost  = this.subtractInventory(this.getConstitutionMaterialNeeded(this.totalUpgradeMaterial, this.ClassName), this.inventoryNum)
            const result = this.calculateAllConstitutionCurrenciesCost(totalCost, this.inventoryNum)

            return  result;
        },
        calculateConstitutionCurrenciesCost(startLevel, totalCost, targetLevel = '') {
            /* 總共需要幾個targetLevel的材料，從哪個階級開始升級，會一路計算到targetLevel

            targetLevel, startLevel => Legendary, Epic, Rare, Uncommon

            totalCost 範例
             totalCost = {
              Legendary: { '花幽飲': 1, '毒角片': null, '藥草根': 1, '藥草葉': null, ... },
              Epic: { '花幽飲': 20, '毒角片': null, '藥草根': 10, '藥草葉': null, ... },
              Rare: { '花幽飲': 400, '毒角片': null, '藥草根': 100, '藥草葉': null, ... },
              Uncommon: { '花幽飲': 8000, '毒角片': null, '藥草根': 1000, '藥草葉': null, ... }
            }

            return [energy, lifeEssence, money] => [integer, integer, integer]
            */

            const upgrade_rules = {
                'Legendary': {},
                'Epic': {
                    'Legendary': {'energy': 12500, 'lifeEssence': 50, 'money': 50000}
                },
                'Rare': {
                    'Epic': {'energy': 2500, 'lifeEssence': 10, 'money': 10000}
                },
                'Uncommon': {
                    'Rare': {'energy': 500, 'lifeEssence': 2, 'money': 1000},
                }
            };
            let energy = 0, lifeEssence = 0, money = 0;
            let upgrade_cost = {};

            if (targetLevel === '') {
                upgrade_cost = upgrade_rules[startLevel];
            } else {
                let current_level = startLevel;
                while (current_level !== targetLevel) {
                    upgrade_cost = {...upgrade_rules[current_level], ...upgrade_cost};
                    current_level = Object.keys(upgrade_rules[current_level])[0];
                }
            }

            for (const [upgradeLvl, multiplier] of Object.entries(upgrade_cost)) {

                for (const [key, v] of Object.entries(totalCost[upgradeLvl])) {
                    if (['百年果', '毒角片', '花幽飲'].includes(key)) {
                        energy += v * multiplier.energy;
                        money += v * multiplier.money;
                    } else {
                        energy += v * multiplier.energy;
                        money += v * multiplier.money;
                        lifeEssence += v * multiplier.lifeEssence;
                    }
                }
            }
            return [energy, lifeEssence, money];
        },

        getConstitutionMaterialNeeded(needed, targetLevel = '') {
            // 由最高階級需求數量，計算出其他階級需求數量
            let totalMaterial = {};
            if (targetLevel === null) {
                return totalMaterial
            }
            const normalMapper = {
                Uncommon: {Uncommon: 1},
                Rare: {Rare: 1, Uncommon: 10},
                Epic: {Epic: 1, Rare: 10, Uncommon: 100},
                Legendary: {Legendary: 1, Epic: 10, Rare: 100, Uncommon: 1000}
            };
            const constitutionMapper = {
                Uncommon: {Uncommon: 1},
                Rare: {Rare: 1, Uncommon: 20},
                Epic: {Epic: 1, Rare: 20, Uncommon: 400},
                Legendary: {Legendary: 1, Epic: 20, Rare: 400, Uncommon: 8000}
            };
            const constitutionWeight = constitutionMapper[targetLevel];
            const weight = normalMapper[targetLevel];
            for (const [key, value] of Object.entries(needed)) {
                for (const [lvl, _] of Object.entries(weight)) {
                    totalMaterial[lvl] ??= {};
                    if ((['花幽飲', '毒角片', '百年果'].includes(key))) {
                        totalMaterial[lvl][key] = value * constitutionWeight[lvl];
                    } else if (!(['energy', 'lifeEssence', 'money'].includes(key))) {
                        totalMaterial[lvl][key] = value * weight[lvl];
                    }
                }

            }
            return totalMaterial;
        },
        calculateAllConstitutionCurrenciesCost(totalCost, totalInventory) {
            if(Object.entries(totalCost).length === 0) return
            let lvlList = ['Uncommon', 'Rare', 'Epic', 'Legendary'];
            const inventoryEnergy = totalInventory.flat().find(obj => obj.name === `energy`).value;
            const inventoryLifeEssence = totalInventory.flat().find(obj => obj.name === `lifeEssence`).value;
            const inventoryMoney = totalInventory.flat().find(obj => obj.name === `money`).value;
            if (this.ClassName === 'Epic') {
                // 把Legendary拿掉 因為最高只到Epic
                lvlList.pop()
            }
            for (let lvl of lvlList) {
                const [energy, lifeEssence, money] = this.calculateConstitutionCurrenciesCost(lvl, totalCost, this.ClassName);

                Object.assign(totalCost[lvl], {
                    '真氣': inventoryEnergy < energy ? (energy - inventoryEnergy) : 0,
                    '生命精華': inventoryLifeEssence < lifeEssence ? (lifeEssence - inventoryLifeEssence) : 0,
                    '銅幣': inventoryMoney < money ? (money - inventoryMoney) : 0

                });
            }
            return totalCost;
        },

        subtractInventory(needed, total_inventory) {
            const result = {};
            let mapper, weight;
            mapper = {
                Legendary: [1, 0, 0, 0],
                Epic: [10, 1, 0, 0],
                Rare: [100, 10, 1, 0],
                Uncommon: [1000, 100, 10, 1]
            };

            for (let lvl of Object.keys(needed)) {
                for (const key in needed[lvl]) {
                    const LegendaryValue = total_inventory.flat().find(obj => obj.name === `Legendary_${key}`).value || 0;
                    const EpicValue = total_inventory.flat().find(obj => obj.name === `Epic_${key}`).value || 0;
                    const RareValue = total_inventory.flat().find(obj => obj.name === `Rare_${key}`).value || 0;
                    const UncommonValue = total_inventory.flat().find(obj => obj.name === `Uncommon_${key}`).value || 0;
                    weight = mapper[lvl];
                    let value;
                    result[lvl] ??= {};
                    result[lvl][key] = (value = (needed[lvl][key] - LegendaryValue * weight[0] - EpicValue * weight[1] - RareValue * weight[2] - UncommonValue * weight[3])) > 0 ? value : null;
                }
            }
            return result;
        },

        setConstitutionLevel(){
            const constitutionAttribute = this.constitutionData;
            let constitutionItem = this.constitutionItem;
            Object.keys(constitutionItem).forEach((item) => {
                this.constitutionItem[item].maxLevel = constitutionAttribute[item][this.currentTier-8].levels[4].level;
                this.constitutionItem[item].minLevel = constitutionAttribute[item][this.currentTier-8].levels[0].level;
                this.constitutionItem[item].value = constitutionAttribute[item][this.currentTier-8].levels[0].level;
            })
        },
        inventories() {
            const level_mapping = [
                {name: 'Legendary', show_name: '傳說'},
                {name: 'Epic', show_name: '英雄'},
                {name: 'Rare', show_name: '稀有'},
                {name: 'Uncommon', show_name: '高級'}
            ];

            this.name_mapping.forEach(item => {
                let temp = [];
                level_mapping.forEach(level => {
                    if (!['energy', 'lifeEssence', 'money'].includes(item.name)) {
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
            this.inventoryNum.push([
                {show_name: '真氣', name: 'energy', level: 'Uncommon', class: 'energy', value: null},
                {show_name: '生命精華', name: 'lifeEssence', level: 'Uncommon', class: 'lifeEssence', value: null},
                {show_name: '銅幣', name: 'money', level: 'Uncommon', class: 'money', value: null},
            ])

            return this.inventoryNum
        },

    },
};
</script>

<style scoped lang="scss">

@mixin defaultColor{
    color: #eeeef4;
    background-color: #15202B;
    border-color: #22303C;
}

.constitution {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #15202B;
  color: #eeeef4;
  width: 100%;
  height: calc(100% - 42px);
  overflow: auto;

    * li, label, h4 {
      background-color: #15202B;
      color: #eeeef4;
    }
    .input-group > input,{
      color: #eeeef4;
      background-color: #15202B;
      border-color: #22303C;
    }
     .input-group > label {
       color: #eeeef4;
       border-color: #22303C;
     }
    .input-group > img {
      background-color: #192734 ;
      border-color: #22303C;

    }

}

p {
  color: azure;
  text-align: center;
}

@mixin inputBox{
    position: absolute;
    transform: translate(-50%, -50%);
    max-height: 2rem;
    min-height: 2rem;
    max-width: 6rem;
    min-width: 6rem;
    width: 10vw;
    height: 5vh;
    text-align: center;
    font-size: 1rem;
}

.constitutionStatus {
  position: relative;
  min-width: fit-content;

    & > .attrInput{
    display: flex;
    @include inputBox;
    }

  & > .input-box {
    @include inputBox;
  }

  & > .attrInput > input {
    color: #eeeef4;
    background-color: rgba(123, 135, 164, 0.3);
    border-radius: 5px;
    max-height: 2rem;
    min-height: 2rem;
    max-width: 6rem;
    min-width: 6rem;
    text-align: center;
    font-size: 1rem;

  }

  .physicalDefense {

    top: 28%;
    left: 16.5%;
    transform: translate(-50%, -50%);
  }

  & > .spellDefense {
    top: 28%;
    left: 70.5%;
    transform: translate(-50%, -50%);
  }

  & > .hp {
    top: 55%;
    left: 5.5%;
    transform: translate(-50%, -50%);
  }

  & > .mp {
    top: 55%;
    left: 82.5%;
    transform: translate(-50%, -50%);
  }

  & > .eva {
    top: 83%;
    left: 16%;
    transform: translate(-50%, -50%);
  }

  & > .accuracy {
    top: 83%;
    left: 71%;
    transform: translate(-50%, -50%);
  }

  & > .attack {
    top: 95%;
    left: 44.5%;
    transform: translate(-50%, -50%);
  }

  & > .constitution-select {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12vw;
    color: rgb(223, 232, 234);
    background-color: rgba(21, 32, 43, 0.75);
    border-color: #8899A6;
    border-radius: 5px;
    outline:none;

  }

  & > img {
    opacity: 0.8;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

 .attrInput > button{
        color: #eeeef4;
        background-color: rgba(21, 32, 43, 0.75);
        border-color: #22303C;
        border-radius: 5px;
        font-size: small;

        &:hover{
            color: #eeeef4;
            background-color: rgba(123, 135, 164, 0.7);
            border-color: #22303C;
        }

        &:active{
            color: #000;
        }
    }

}

.constitutionAnswer{
    height: auto;

    .answer-list{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly
    }

}

.answer{
    flex-direction: column;

    .list-group{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & > img{
            border: none;
            width: 40px;
            object-fit: contain;
        }
    }

    .input-group{

        label {
            width: 8rem;
        }
    }
}
.totalRequirement{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    height: auto;
    padding-bottom: 5rem;
    justify-content: space-evenly;


    & > .list-group > .answer-img > img{
        width: 40px;
        object-fit: contain;
    }
}

.constitutionInventory{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    height: auto;
    padding-bottom: 5rem;

  & > .inventory-list{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

      & > .inventory > .input-group > img{
        width: 40px;
        object-fit: contain;
      }
  }

}


.eggs{
    height: auto;
}

.eggs-picture-group {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;
  padding-bottom: 5rem;;
}

label.custom-select {
    position: relative;
    display: inline-block;

}

.custom-select select {
    display: inline-block;
    padding: 4px 3px 3px 5px;
    margin: 0;
    font: inherit;
    outline:none; /* remove focus ring from Webkit */
    line-height: 1.2;
    background: #000;
    color:white;
    border:0;
}

/* Select arrow styling */
.custom-select:after {
    content: "▼";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 60%;
    line-height: 30px;
    padding: 0 7px;
    background: #000;
    color: white;
    pointer-events: none;
}

.no-pointer-events .custom-select:after {
    content: none;
}

</style>
