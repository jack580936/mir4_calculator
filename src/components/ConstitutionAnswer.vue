<template>
    <div v-if="currentTier!==null" class="constitutionAnswer container-fluid">
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
                    <template v-for="upgradeItem in getAttrUpgradeData(currentTier, constitutionData[item.id],item.value)">
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
                        <div v-if="upgradeItem.upgradeAmount3" class="list-group list-group-flush">
                            <img :src="getImageUrl(`Constitution/${upgradeItem.upgradeItem3}.png`)"
                                 :class="`input-group img-thumbnail Epic`"
                                 alt>
                            <label class="list-group-item">{{ upgradeItem.upgradeItem3 }}</label>
                            <label class="list-group-item">{{ upgradeItem.upgradeAmount3 }}</label>
                        </div>
                    </template>
                </div>
            </template>
        </div>
        <h4 class="col-12"> 總共需要以下材料： </h4>
        <div class="totalRequirement col-12 col-xl-12">
            <div v-for="(items, lvl) in getTotalUpgradeMaterial()" class="list-group list-group-flush">
                <h4 v-if="ClassName === lvl" class="list-group-item">{{LevelShowName[ClassName]}}</h4>
                <h4 v-else class="list-group-item">{{ LevelShowName[lvl] }} ➙ {{LevelShowName[ClassName]}}</h4>
                <template v-for="(value, materialName) in items">
                    <div class="list-group list-group-sm answer-img">
                        <img v-if="['英雄萬年雪參'].includes(materialName) && (lvl === 'Legendary' || lvl === 'Epic')"
                             :src="getImageUrl(`Constitution/${materialName}.png`)"
                             :class="`list-group-item img-thumbnail Epic`" alt="...">
                        <img v-else-if="value>0 && !['真氣', '生命精華', '銅幣'].includes(materialName)"
                             :src="getImageUrl(`Constitution/${materialName}.png`)"
                             :class="`list-group-item img-thumbnail ${lvl}`"
                             alt="...">
                        <img v-else-if="value>0 && ['真氣', '生命精華', '銅幣'].includes(materialName)"
                             :src="getImageUrl(`Constitution/${materialName}.png`)"
                             :class="`list-group-item img-thumbnail Uncommon`" alt="...">
                        <img v-else-if="['雪參'].includes(materialName) && lvl === 'Rare'"
                             :src="getImageUrl(`Constitution/${materialName}.png`)"
                             :class="`list-group-item img-thumbnail Rare`" alt="...">
                        <img v-else-if="['雪參'].includes(materialName) && lvl === 'Uncommon'"
                             :src="getImageUrl(`Constitution/${materialName}.png`)"
                             :class="`list-group-item img-thumbnail Uncommon`" alt="...">
                        <label v-if="value>0 || ( ['雪參'].includes(materialName) && (lvl !== 'Legendary' && lvl !== 'Epic') )" class="material list-group-item col-12">{{
                            materialName
                            }} : {{ value.toLocaleString() }}</label>
                    </div>
                </template>
            </div>
        </div>
    </div>

</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "ConstitutionAnswer",
    props:{
        ClassName: {
            type: String,
            default: ''
        },
        currentTier: {
            type: Number,
            default: null
        },
        constitutionData: {
            type: Object,
            default: null
        },
        constitutionItem: {
            type: Object,
            default: null
        },
        inventoryNum:  {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            LevelShowName:{
                'Legendary': '傳說',
                'Epic': '英雄',
                'Rare': '稀有',
                'Uncommon': '普通',
            }
        };
    },
    computed: {

    },
    methods: {
        getImageUrl,
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
            const upgradeItemName3 = targetTier.levels[0]?.upgradeItem3;
            let totalUpgradeAmount1 = 0;
            let totalUpgradeAmount2 = 0;
            let totalUpgradeAmount3 = 0;
            Object.assign(totalUpgradeData, {'upgradeItem1': upgradeItemName1,
                                                    'upgradeAmount1': totalUpgradeAmount1,
                                                    'upgradeItem2': upgradeItemName2,
                                                    'upgradeAmount2': totalUpgradeAmount2,
                                                    'upgradeItem3': upgradeItemName3,
                                                    'upgradeAmount3': totalUpgradeAmount3,
                                                    'classification': classification,});
            if(lastLevel+1 === currentLevel){
                return [totalUpgradeData];
            }
            for (let i = startLevel; i < targetTier.levels.length; i++) {
                const level = targetTier.levels[i];
                totalUpgradeAmount1 += level.upgradeAmount1;
                totalUpgradeAmount2 += level.upgradeAmount2;
                totalUpgradeAmount3 += level.upgradeAmount3;
                Object.assign(totalUpgradeData, {
                    'upgradeAmount1': totalUpgradeAmount1,
                    'upgradeAmount2': totalUpgradeAmount2,
                    'upgradeAmount3': totalUpgradeAmount3,
                });
            }
            return [totalUpgradeData];
        },
        calculateUpgradeMaterial(){
            let totalUpgradeData = {};
            const constitutionAttribute = JSON.parse(JSON.stringify(this.constitutionData));
            let constitutionItem = JSON.parse(JSON.stringify(this.constitutionItem));
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
                    if(totalUpgradeData[item.upgradeItem3] === undefined){
                        totalUpgradeData[item.upgradeItem3] = 0;
                    }
                    totalUpgradeData[item.upgradeItem1] += item.upgradeAmount1;
                    totalUpgradeData[item.upgradeItem2] += item.upgradeAmount2;
                    totalUpgradeData[item.upgradeItem3] += item.upgradeAmount3;
                })
            }
            return totalUpgradeData;
        },
        getTotalUpgradeMaterial() {
            if (this.currentTier === null) {
                return;
            }

            let totalUpgradeMaterial = JSON.parse(JSON.stringify(this.calculateUpgradeMaterial()));
            let inventoryNum = JSON.parse(JSON.stringify(this.inventoryNum));


            const totalCost  = this.subtractInventory(this.getConstitutionMaterialNeeded(totalUpgradeMaterial, this.ClassName), inventoryNum)
          console.log(totalCost)
            return  this.calculateAllConstitutionCurrenciesCost(totalCost, inventoryNum);
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
                    if(key==='英雄萬年雪參') continue;
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
                    if (['英雄萬年雪參'].includes(key) && ['Legendary', 'Epic'].includes(lvl)) {
                        totalMaterial[lvl][key] = value ;
                    }else if ((['花幽飲', '毒角片', '百年果'].includes(key))) {
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
            const inventorySnowGinseng = totalInventory.flat().find(obj => obj.name === `snowPanax`).value;
            if (this.ClassName === 'Epic') {
                // 把Legendary拿掉 因為最高只到Epic
                lvlList.pop()
            }
            for (let lvl of lvlList) {
                const [energy, lifeEssence, money] = this.calculateConstitutionCurrenciesCost(lvl, totalCost, this.ClassName);

                Object.assign(totalCost[lvl], {
                    '真氣': inventoryEnergy < energy ? (energy - inventoryEnergy) : 0,
                    '生命精華': inventoryLifeEssence < lifeEssence ? (lifeEssence - inventoryLifeEssence) : 0,
                    '銅幣': inventoryMoney < money ? (money - inventoryMoney) : 0,
                    '雪參' : '∞'

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
                    if(key === '英雄萬年雪參' && ['Legendary', 'Epic'].includes(lvl)) {
                        result[lvl] ??= {};
                        const snowPanax = total_inventory.flat().find(obj => obj.name === `snowPanax`).value || 0;
                        result[lvl][key] = needed['Epic'][key] - snowPanax || 0;
                        continue;
                    }else if (key === '英雄萬年雪參' && ['Rare','Uncommon'].includes(lvl)){
                      continue;
                    }
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
    .input-group > input{
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
