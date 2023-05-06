<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="秘谷資源(Valley Resource)"
      :images="[
          {title: '秘谷1層', url: `${getImageUrl('map_resource/valley/resource/valley-1f.png')}`},
          {title: '秘谷2層', url: `${getImageUrl('map_resource/valley/resource/valley-2f.png')}`},
          {title: '秘谷3層', url: `${getImageUrl('map_resource/valley/resource/valley-3f.png')}`},
          {title: '秘谷4層', url: `${getImageUrl('map_resource/valley/resource/valley-4f.png')}`},
      ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "ValleyResource",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>