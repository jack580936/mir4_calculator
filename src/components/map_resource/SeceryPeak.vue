<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="秘庭峰"
      :images="[{title: '鐵礦', url: `${getImageUrl('map_resource/secretPeakMining.png')}`},
                {title: '草', url: `${getImageUrl('map_resource/secretPeakHerb.png')}`},
                {title: '真氣', url: `${getImageUrl('map_resource/secretPeakEnergy.png')}`},
                {title: 'BOSS出現時間', url: `${getImageUrl('map_resource/BossTime.png')}`}]"
  />
</template>

<script>
export default {
  name: "SeceryPeak",
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
  }
}
</script>

<style scoped>

</style>