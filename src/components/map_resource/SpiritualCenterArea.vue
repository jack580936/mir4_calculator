<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="道觀地區(Spiritual Area)"
      :images="[
          {title: '赤月山', url: `${getImageUrl('map_resource/SpiritualArea/resource/redmoon-mountain-resource.png')}`},
          {title: '赤月山(寶箱)', url: `${getImageUrl('map_resource/SpiritualArea/resource/redmoon-mountain-chest.png')}`},
          {title: '赤月谷3層', url: `${getImageUrl('map_resource/SpiritualArea/resource/redmoon-gorge-3f-resource.png')}`},
          {title: '赤月谷2層', url: `${getImageUrl('map_resource/SpiritualArea/resource/redmoon-gorge-2f-resource.png')}`},
          {title: '赤月谷1層', url: `${getImageUrl('map_resource/SpiritualArea/resource/redmoon-gorge-1f-resource.png')}`},
          {title: '幻木林', url: `${getImageUrl('map_resource/SpiritualArea/resource/phantom-woods-resource.png')}`},
          {title: '天道峰高層', url: `${getImageUrl('map_resource/SpiritualArea/resource/heavens-way-peak-upper-level-resource.png')}`},
          {title: '天道峰中層', url: `${getImageUrl('map_resource/SpiritualArea/resource/heavens-way-peak-mid-leve-resource.png')}`},
          {title: '天道峰低層', url: `${getImageUrl('map_resource/SpiritualArea/resource/heavens-way-peak-lower-level-resource.png')}`},
      ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SpiritualCenterArea",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>