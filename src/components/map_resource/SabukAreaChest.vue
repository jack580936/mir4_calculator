<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="沙巴克地區寶箱(Sabuk Area Chest)"
      :images="[
          {title: '沙巴克縣', url: `${getImageUrl('map_resource/sabukArea/chest/sabuk-province-chest.png')}`},
          {title: '地牢', url: `${getImageUrl('map_resource/sabukArea/chest/sabuk-castle-underground-jail-chest.png')}`},
          {title: '菁英地牢', url: `${getImageUrl('map_resource/sabukArea/chest/elite-sabuk-castle-underground-jail.png')}`},
      ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SabukAreaChest",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>