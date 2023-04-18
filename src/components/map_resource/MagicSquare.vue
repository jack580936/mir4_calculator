<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="魔方陣"
      :images="[{title: 'BOSS出現時間', url: `${getImageUrl('map_resource/BossTime.png')}`} ]"
  />
</template>

<script>
import {getImageUrl} from "../../utils";
export default {
  name: "MagicSqure",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>