<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SnowFieldAreaResource",
    data() {
    return {
      pageTitle: "雪原地區資源(SnowField Area Resource)",
      imageData: [
            {
              title: "九龍冰原",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/snowFieldArea/resource/nine-dragon-ice-field.png'),
                  description: "",
                  author: "",
                },
              ],
            },
          ],
        };
    },
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

</style>