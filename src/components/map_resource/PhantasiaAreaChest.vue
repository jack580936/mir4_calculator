<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
  <MapViewer
      PageTitle="夢村地區寶箱(Phantasia Area Chest)"
      :images="[{title: '沙漠路', url: `${getImageUrl('map_resource/phantasiaArea/chest/desert-road-chests.png')}`},
                {title: '夢村沙漠', url: `${getImageUrl('map_resource/phantasiaArea/chest/phantasia-desert-chests.png')}`},
                {title: '菁英夢村沙漠', url: `${getImageUrl('map_resource/phantasiaArea/chest/elite-phantasia-desert.png')}`},
                {title: '菁英蟻穴1層', url: `${getImageUrl('map_resource/phantasiaArea/chest/elite-ant-hole-1f.png')}`},
                {title: '菁英蟻穴2層', url: `${getImageUrl('map_resource/phantasiaArea/chest/elite-ant-hole-2f.png')}`},
                {title: '劍池1層', url: `${getImageUrl('map_resource/phantasiaArea/chest/bladehaven-1f.png')}`},
                {title: '夢村迷宮1層', url: `${getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-1f.png')}`},
                {title: '夢村迷宮2層', url: `${getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-2f.png')}`},
                {title: '夢村迷宮3層', url: `${getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-3f.png')}`},
                {title: '夢村迷宮4層', url: `${getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-4f.png')}`},
                {title: '石刻墓2層', url: `${getImageUrl('map_resource/phantasiaArea/chest/rockcut-tomb-2f.png')}`},
                {title: '石刻墓3層', url: `${getImageUrl('map_resource/phantasiaArea/chest/rockcut-tomb-3f.png')}`},
                {title: '菁英石刻墓3層(黃色部分)', url: `${getImageUrl('map_resource/phantasiaArea/chest/RockcutTomb3F.png')}`},
                {title: '石刻迷宮3層', url: `${getImageUrl('map_resource/phantasiaArea/chest/RockcutLab3F.png')}`},
                {title: '石刻迷宮4層', url: `${getImageUrl('map_resource/phantasiaArea/chest/RockcutLab4F.png')}`},
                {title: '夢村秘谷3層', url: `${getImageUrl('map_resource/phantasiaArea/chest/PhantasiaValley3F.png')}`},
                ]"
  />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
  name: "PhantasiaAreaChest",
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>