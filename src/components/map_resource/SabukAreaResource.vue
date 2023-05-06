<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="沙巴克地區資源(Sabuk Area Resource)"
      :images="[
          {title: '沙巴克縣', url: `${getImageUrl('map_resource/sabukArea/resource/sabuk-province-resource.png')}`},
      ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SabukAreaResource",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>