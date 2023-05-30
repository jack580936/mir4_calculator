<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "MagicSqure",
    data() {
    return {
      pageTitle: "魔方陣(Magic Squre)",
      imageData: [
            {
              title: "BOSS出現時間",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/BossTime.png'),
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