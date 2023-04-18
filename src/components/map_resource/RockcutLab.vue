<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="石刻迷宮(Rockcut Labyrinth)"
      :images="[{title: '石刻迷宮3F(寶箱)', url: `${getImageUrl('map_resource/RockcutLab3F.png')}`},
                {title: '石刻迷宮4F(寶箱)', url: `${getImageUrl('map_resource/RockcutLab4F.png')}`}]"
  />
</template>

<script>
import {getImageUrl} from "../../utils";
export default {
  name: "RockcutLab",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>