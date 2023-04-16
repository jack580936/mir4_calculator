<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="石刻迷宮(Rockcut Labyrinth)"
      :images="[{title: '石刻迷宮3F', url: `${getImageUrl('map_resource/RockcutLab3F.png')}`},
                {title: '石刻迷宮4F', url: `${getImageUrl('map_resource/RockcutLab4F.png')}`}]"
  />
</template>

<script>
export default {
  name: "RockcutLab",
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
  }
}
</script>

<style scoped>

</style>