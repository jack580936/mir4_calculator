<template>
  <div class="container-fluid constitution col-6">
    <div class="constitutionStatus">
      <img v-if="!showGif" :src="getImageUrl('bg/constitutionBg.png')" alt="constitution" @click="handleClick" />
      <template v-for="item in constitutionItem" :key="item">
        <input v-if="!showGif" v-model.number="item.value" :placeholder="`${item.name}`" :class="`input-box ${item.id}`" />
      </template>
      <select v-if="!showGif" class="input-box constitution-select" v-model="currentConstitution">
        <option :value="null" disabled>選擇體質</option>
        <template v-for="number in numbers" :key="number">
          <option :value="number" >{{number}}階</option>
        </template>
      </select>

    </div>
    <div v-if="showGif" class="eggs">
      <div class="eggs-picture-group">
        <img :src="currentCat" alt="be happy :D" />
        <button @click="changeCat" class="button-30">Change</button>
      </div>
        <hr>
      <p>恭喜你發現了一個彩蛋ε(*´･∀･｀)зﾞ</p>
      <p>但是( ´•̥̥̥ω•̥̥̥` ) 我確診laaaaaaaaa 我不想想惹</p>
      <p>所以這個功能還沒有做好</p>
      <p>我快好了</p>
      <p>我今天比較淺了</p>
      <p>我快可以出關了</p>
      <p>恭喜我吧我沒有線拉哈哈哈哈哈(๑¯◡¯๑)</p>
    </div>
  </div>
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "Constitution",
  data() {
    return {
      clickCount: 0,
      showGif: false,
      currentConstitution: null,
      constitutionStart: 8,
      constitutionEnd: 19,
      constitutionItem: {
          phyDEF: { name: "物理防禦", id: "phyDEF", value: null },
          spellDEF: { name: "法術防禦", id: "spellDEF", value: null },
          hp: { name: "生命值", id: "hp", value: null },
          mp: { name: "魔力", id: "mp", value: null },
          EVA: { name: "閃避", id: "EVA", value: null },
          accuracy: { name: "命中", id: "accuracy", value: null },
          ATK: { name: "攻擊", id: "ATK", value: null },
      },
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
      currentCat: "",
    };
  },
  mounted() {
    this.changeCat();
  },
  computed: {
    numbers() {
      return Array.from({ length: this.constitutionEnd - this.constitutionStart + 1 }, (_, i) => i + this.constitutionStart);
    }
  },
  methods: {
    getImageUrl,
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
  },
};
</script>

<style scoped lang="scss">
.constitution {
    display: flex;
    justify-content: flex-start;
    align-items:  center;
    background-color: #0c1e35;
    width: 100%;
    height: calc(100% - 42px);
    overflow: auto;
}

p{
    color: azure;
    text-align: center ;
}

.constitutionStatus {
    position: relative;
    & > .input-box{
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

    & > .phyDEF{
        top: 28%;
        left: 23%;
        transform: translate(-50%, -50%);
    }

    & > .spellDEF{
        top: 28%;
        left: 77%;
        transform: translate(-50%, -50%);
    }

    & > .hp{
        top: 55%;
        left: 11.5%;
        transform: translate(-50%, -50%);
    }

    & > .mp{
        top: 55%;
        left: 88.5%;
        transform: translate(-50%, -50%);
    }

    & > .EVA{
        top: 83%;
        left: 22%;
        transform: translate(-50%, -50%);
    }

    & > .accuracy{
        top: 83%;
        left: 77%;
        transform: translate(-50%, -50%);
    }

    & > .ATK{
        top: 95%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    & > .constitution-select{
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

.eggs-picture-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem;
    padding-top: 1rem;;
}


</style>
