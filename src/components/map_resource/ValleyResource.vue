<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "ValleyResource",
    data() {
    return {
      pageTitle: "秘谷資源(Valley Resource)",
      imageData: [
            {
              title: "秘谷1層",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/valley/resource/valley-1f.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "秘谷2層",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/valley/resource/valley-2f.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "秘谷3層",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/valley/resource/valley-3f.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "秘谷4層",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/valley/resource/valley-4f.png'),
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