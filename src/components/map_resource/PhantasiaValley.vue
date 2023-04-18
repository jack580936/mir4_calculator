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
import {getImageUrl} from "../../utils";
export default {
  name: "PhantasiaValley",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>