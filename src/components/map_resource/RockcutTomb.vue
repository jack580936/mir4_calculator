<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="石刻墓(Rockcut Tomb)"
      :images="[{title: '石刻墓3F(寶箱)(紅色部分)', url: `${getImageUrl('map_resource/RockcutTomb3F.png')}`},
                {title: '菁英石刻墓3F(寶箱)(黃色部分)', url: `${getImageUrl('map_resource/RockcutTomb3F.png')}`}]"
  />
</template>

<script>
export default {
  name: "RockcutTomb",
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
  }
}
</script>

<style scoped>

</style>