<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
<MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "NineDragonIceField",
    data() {
    return {
      pageTitle: "九龍冰原(Nine Dragon Ice Field)",
      imageData: [
            {
              title: "需要移住資金",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/NineDragonIceField/需要移居资金.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "山野族的藥草",
              images: [
                {
                  title: "山野族的藥草1",
                  url: this.getImageUrl('Requests/NineDragonIceField/山野族的藥草1.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "救命般的寶物",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/NineDragonIceField/如性命一般珍贵的宝物.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "藥草商的必需品",
              images: [
                {
                  title: "",
                  url:  this.getImageUrl('Requests/NineDragonIceField/药草商的必需品.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "出眾的警衛兵",
              images: [
                {
                  title: "出眾的警衛兵2",
                  url: this.getImageUrl('Requests/NineDragonIceField/出众的警卫兵2.png'),
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