<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="夢村地區資源(Phantasia Area Resource)"
      :images="[
          {title: '蟻穴1層', url: `${getImageUrl('map_resource/phantasiaArea/resource/ant-hole-1f-resource.png')}`},
          {title: '蟻穴2層', url: `${getImageUrl('map_resource/phantasiaArea/resource/ant-hole-2f-resource.png')}`},
          {title: '劍池1層', url: `${getImageUrl('map_resource/phantasiaArea/resource/bladehaven-1f-resource.png')}`},
          {title: '劍池2層', url: `${getImageUrl('map_resource/phantasiaArea/resource/bladehaven-2f-resource.png')}`},
          {title: '沙漠路', url: `${getImageUrl('map_resource/phantasiaArea/resource/desert-road-resource.png')}`},
          {title: '夢村沙漠', url: `${getImageUrl('map_resource/phantasiaArea/resource/phantasia-desert-resource.png')}`},
      ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "PhantasiaAreaResource",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>