<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SpiritualCenterArea",
    data() {
    return {
      pageTitle: "道觀地區(Spiritual Area)",
      imageData: [
            {
              title: "赤月山",
              images: [
                {
                  title: "赤月山",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/redmoon-mountain-resource.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "赤月山(寶箱)",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/redmoon-mountain-chest.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "赤月谷",
              images: [
                {
                  title: "赤月谷3層",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/redmoon-gorge-3f-resource.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "赤月谷2層",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/redmoon-gorge-2f-resource.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "赤月谷1層",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/redmoon-gorge-1f-resource.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "幻木林",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/phantom-woods-resource.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "天道峰",
              images: [
                {
                  title: "天道峰高層",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/heavens-way-peak-upper-level-resource.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "天道峰中層",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/heavens-way-peak-mid-leve-resource.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "天道峰低層",
                  url: this.getImageUrl('map_resource/SpiritualArea/resource/heavens-way-peak-lower-level-resource.png'),
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