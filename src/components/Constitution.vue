<template>
  <div class="container-fluid constitution">
    <img v-if="!showGif" :src="getImageUrl('bg/constitution_bg.png')" alt="constitution" @click="handleClick" />
    <div v-if="showGif">
      <img :src="getImageUrl('so_many_things.gif')" alt="gif" />
      <p>別催( ´•̥̥̥ω•̥̥̥` ) 確診laaaaaaaaa 我不想想惹</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Constitution",
  data() {
    return {
      clickCount: 0,
      showGif: false,
    };
  },
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
    handleClick() {
      this.clickCount++;
      if (this.clickCount >= 10) {
        this.showGif = true;
      }
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
}
p{
  color: azure;
  text-align: center ;
}
.constitution img {
  opacity: 0.8;
}
</style>
