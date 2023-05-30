<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SabukAreaResource",
    data() {
    return {
      pageTitle: "沙巴克地區資源(Sabuk Area Resource)",
      imageData: [
            {
              title: "沙巴克縣",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/sabukArea/resource/sabuk-province-resource.png'),
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