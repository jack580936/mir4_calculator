<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="雪原地區資源(SnowField Area Resource)"
      :images="[
          {title: '九龍冰原', url: `${getImageUrl('map_resource/snowFieldArea/resource/nine-dragon-ice-field.png')}`},
      ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SnowFieldAreaResource",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>