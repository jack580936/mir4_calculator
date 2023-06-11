<script setup>

</script>

<template>
    <div class="container-fluid dragonArtifact">
        <div class="dragonArtifactSelect">
          <div class="dragonArtifactLevelSelect">
            <div v-for="option in LevelOptions" :key="option" @click="selectTopOption(option)" :class="{ active: selectedLevelOption === option }">
              {{option}}
            </div>
          </div>
          <div class="dragonArtifactItemSelect" v-if="selectedLevelOption">
            <div v-for="option in dragonArtifactOptions" :key="option" @click="selectBottomOption(option)" :class="{ active: selectedDragonArtifactOption === option }">
              <div>
                <img :src="getImageUrl(`dragonArtifact/${selectedLevelOption}${option}.png`)" alt="Icon" />
                {{option}}
              </div>
            </div>
          </div>
        </div>
        <div class="dragonArtifactNeed"  v-if="selectedLevelOption && selectedDragonArtifactOption">
          <div class="dragonArtifactNeedTitle">
              <h4>總需求</h4>
          </div>
          <div class="dragonArtifactNeedList">
            <div class="dragonArtifactNeedItem" v-for="(value, material) in getDragonArtifactMaterial(selectedLevelOption,selectedDragonArtifactOption)" :key="material">
              <img :class="`img-thumbnail ${getLevelFromKeyword(material)}`" :src="getImageUrl(`dragonArtifact/${removeLevelKeyword(material)}.png`)" alt="Icon" />
              <div class="dragonArtifactNeedItemName">{{ material }}</div>
              <div class="dragonArtifactNeedItemNum">{{ value }}</div>
            </div>
          </div>
        <div class="dragonArtifactSpecialNeed" v-if="selectedLevelOption && selectedDragonArtifactOption">
          <div class="dragonArtifactNeedTitle">
              <h4>龍神器材料需求</h4>
          </div>
          <div class="dragonArtifactSpecialTotalNeed">
            <template v-for="dragonMaterial in getDragonMaterialFromPool(selectedLevelOption,selectedDragonArtifactOption)">
              <div class="dragonArtifactSpecialNeedList">
                <div class="dragonArtifactSpecialNeedItem" v-for="(value, material) in dragonMaterial" :key="material">
                  <img :class="`input-group img-thumbnail ${getLevelFromKeyword(material)}`" :src="getImageUrl(`dragonArtifact/${removeLevelKeyword(material)}.png`)" alt="Icon" />
                  <div class="input-group dragonArtifactNeedItemName">{{ material }}</div>
                  <div class="input-group dragonArtifactNeedItemNum">{{ value }}</div>
                </div>
              </div>
            </template>
          </div>
        </div>
        </div>
        <div class="dragonArtifactInventory" v-show="selectedDragonArtifactOption">
            <h4>庫存</h4>
            <div class="inventory-list">
                <template v-for="material_category in initInventoryNum">
                    <div class="inventory mb-3 col-12 col-sm-6 col-xl-4 col-xxl-4" >
                        <template v-for="(material,index) in material_category" :key="index">
                            <div class="input-group input-group-sm"  >
                                <img :src="getImageUrl(`dragonArtifact/${material.class}.png`)"
                                     :class="`input-group img-thumbnail ${material.level}`"
                                     alt>
                                <label class="input-group-text">{{ material.show_name }}</label>
                                <button class="btn add-btn" type="button" @mousedown="startCount(material,0 ,$event)"
                                        @mouseup="stopInterval" @mouseleave="stopInterval">+
                                </button>
                                <input v-model.number="material.value" :min="minimum"
                                       oninput="validity.valid||(value='');"
                                       class="form-control" type="number">
                                <button class="btn minus-btn" type="button"
                                        @mousedown="startDecrement(material,0 ,$event)"
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
import {
  getInventoriesInit,
  getDragonArtifactMaterial,
  getEachLevelMaterialFromPool,
} from "@/utils/dragonArtifact"
export default {
    name: "DragonArtifact",
    data() {
        return {
            minimum: 0,
            showGif: false,
            currentTier: null,
            ClassName: 'Epic',
            LevelOptions: ["傳說", "英雄", "稀有"],
            dragonArtifactOptions: ["神笏", "翼裝", "寶冠", "印", "天書"],
            selectedLevelOption: null,
            selectedDragonArtifactOption: null,
            inventoriesBase: [{}]
        };
    },
    created() {

    },
    mounted() {
    },
    computed: {
        initInventoryNum() {
            this.inventoriesBase = this.getInventoriesInit(this.selectedLevelOption,this.selectedDragonArtifactOption);
            return this.inventoriesBase;
        },

    },
    methods: {
        getImageUrl,
        ...counter,
        getInventoriesInit,
        getDragonArtifactMaterial,
        getEachLevelMaterialFromPool,
        selectTopOption(option) {
          this.selectedLevelOption = option;
          this.selectedDragonArtifactOption = null;
          this.inventoriesBase= [{}]
        },
        selectBottomOption(option) {
          this.selectedDragonArtifactOption = option;
        },
        removeLevelKeyword(str) {
            return str.replace(/傳說|英雄|稀有|高級/g, "");
        },
        getLevelFromKeyword(str) {
            if([str].includes(["傳說", "英雄", "稀有", "高級"])) {
              return "Uncommon";
            }
            let level = str.substring(0, 2);
            if (level === "傳說") {
                return "Legendary";
            } else if (level === "英雄") {
                return "Epic";
            } else if (level === "稀有") {
                return "Rare";
            } else if (level === "高級") {
                return "Uncommon";
            }
            return "Uncommon";
        },
        getDragonMaterialFromPool(level, dragonArtifact) {
          const materialPool = this.getDragonArtifactMaterial(level, dragonArtifact);
          for(const item in materialPool){
              const itemValue = materialPool[item];
              if(["神笏", "印"].includes(dragonArtifact) && item.includes("萬年鋼鐵")){
                  return this.getEachLevelMaterialFromPool(level, item, itemValue, this.inventoriesBase);
              }
              else if(["寶冠", "天書"].includes(dragonArtifact)&& item.includes("萬年寒玉")){
                  return this.getEachLevelMaterialFromPool(level, item, itemValue, this.inventoriesBase);
              }
              else if(["翼裝"].includes(dragonArtifact)&& item.includes("萬年寒鐵")){
                  return this.getEachLevelMaterialFromPool(level, item, itemValue, this.inventoriesBase);
              }
          }
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

.dragonArtifact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #15202B;
  color: #eeeef4;
  width: 100%;
  overflow: auto;
  background-image: url("../assets/bg/dragonBG.png");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;

    * li, label {
      background-color: #15202B;
      color: #eeeef4;
    }
    * h4{
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

.dragonArtifactSelect{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  .dragonArtifactLevelSelect{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & > div{
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover{
        background-color: #22303C;
      }
      &.active{
        background-color: #22303C;
      }
    }
  }
  .dragonArtifactItemSelect{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    & > div{
      margin: 0.5rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      &:hover{
        background-color: #22303C;
      }
      &.active{
        background-color: #22303C;
      }
      & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & > img{
          width: 50px;
          height: 100px;
          object-fit: contain;
        }
      }
    }
  }
}

.dragonArtifactNeedList{
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .dragonArtifactNeedItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    & > img{
      width: 4rem;
      height: 4rem;
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: none;
      object-fit: contain;
    }
    & > div{
      padding: 0.2rem;
    }
  }
  & > div{
    margin: 0.5rem;
    padding: 0.5rem;
    & > div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & > img{
        width: 50px;
        height: 100px;
        object-fit: contain;
      }
    }
  }
}

.dragonArtifactSpecialNeed{
  display: flex;
  flex-direction: column;
  .dragonArtifactSpecialTotalNeed{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

  }
  .dragonArtifactSpecialNeedList{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    .dragonArtifactSpecialNeedItem{
      display: flex;
      flex-direction: row;
      align-items: center;
      & > img{
        width: 2.5rem;
        height: 2.5rem;
        padding: 0.2rem;
        margin: 0.1rem;
        border-radius: 0.2rem;
        border: none;
        object-fit: contain;
      }
      & > div{
        padding: 0.2rem;
      }
    }
  }
}

.dragonArtifactInventory{
    display: flex;
    flex-direction: column;
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

</style>