<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="秘庭峰"
      :images="[
                {title: '7-9層鐵礦', url: `${getImageUrl('map_resource/SecertPeak/sp789-ores.png')}`},
                {title: '7-9層黑鐵', url: `${getImageUrl('map_resource/SecertPeak/sp789-darksteel.png')}`},
                {title: '7-9層草', url: `${getImageUrl('map_resource/SecertPeak/sp789-plants.png')}`},
                {title: '7-9層真氣', url: `${getImageUrl('map_resource/SecertPeak/sp789-energy.png')}`},
                {title: '7-9層寶箱', url: `${getImageUrl('map_resource/SecertPeak/sp789-chest.png')}`},
                {title: '1-6層鐵礦', url: `${getImageUrl('map_resource/SecertPeak/sp1-6-ores.png')}`},
                {title: '1-6層黑鐵', url: `${getImageUrl('map_resource/SecertPeak/sp1-6-darksteel.png')}`},
                {title: '1-6層草', url: `${getImageUrl('map_resource/SecertPeak/sp1-6-plants.png')}`},
                {title: '1-6層真氣', url: `${getImageUrl('map_resource/SecertPeak/sp1-6-energy.png')}`},
                {title: '1-6層寶箱', url: `${getImageUrl('map_resource/SecertPeak/sp1-6-chest.png')}`},
                {title: '小惡魔警衛', url: `${getImageUrl('map_resource/SecertPeak/sp-goblin-guard.png')}`},
                {title: '小惡魔獵人', url: `${getImageUrl('map_resource/SecertPeak/sp-goblin-hunter.png')}`},
                {title: 'BOSS出現時間', url: `${getImageUrl('map_resource/BossTime.png')}`}]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SecretPeak",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>