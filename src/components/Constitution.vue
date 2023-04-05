<script setup>
</script>

<template>
  <div class="container-fluid constitution">
    <img :src="getImageUrl('bg/constitution_bg.png')" alt="constitution" />
  </div>
</template>

<script>

export default {
  name: "Constitution",
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    }
  }
}
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

.constitution img {
   opacity: 0.8;
}
</style>

