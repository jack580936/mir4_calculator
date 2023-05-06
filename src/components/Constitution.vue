<template>
  <div class="container-fluid constitution">
    <img v-if="!showGif" :src="getImageUrl('bg/constitution_bg.png')" alt="constitution" @click="handleClick" />
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
      console.log(randomIndex);
      this.currentCat = this.getImageUrl(this.catList[randomIndex]);
    },
  },
};
</script>

<style scoped>
.constitution {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c1e35;
  width: 100%;
  height: calc(100% - 42px);
  overflow: auto;
}

p{
  color: azure;
  text-align: center ;
}
.constitution img {
  opacity: 0.8;
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
