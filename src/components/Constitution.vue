
<template>
<div class="not-yet container-fluid">
  <p>還在想怎麼寫</p>
  <p>我想到再做囉:D</p>
  <img :src="getImageUrl(`so_many_things.gif`)" alt="...">
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
.not-yet {
  text-align: center;
  font-size: 2rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>