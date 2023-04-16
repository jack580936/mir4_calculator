<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="夢村秘谷(Phantasia Valley)"
      :images="[{title: '夢村秘谷3F(寶箱)', url: `${getImageUrl('map_resource/PhantasiaValley3F.png')}`}]"
  />
</template>

<script>
export default {
  name: "PhantasiaValley",
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
  }
}
</script>

<style scoped>

</style>