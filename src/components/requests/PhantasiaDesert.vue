<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
<MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "PhatasiaDesert",
    data() {
    return {
      pageTitle: "夢村沙漠(Phantasia Desert)",
      imageData: [
            {
              title: "猛烈的風沙",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/PhantasiaDesert/猛烈的风沙.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "尋找沙漠寶物",
              images: [
                {
                  title: "尋找沙漠寶物1",
                  url: this.getImageUrl('Requests/PhantasiaDesert/寻找沙漠宝物1.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "尋找沙漠寶物2",
                  url: this.getImageUrl('Requests/PhantasiaDesert/寻找沙漠宝物2.png'),
                  description: "接委托然後在劍池1 2層、石刻墓1 2層開寶箱獲得製作萬能鑰匙的材料\n圖紙1 銀錠50 金剛木50，然後去找沙巴克城的李手藝製作萬能鑰匙。\n最後去劍池1層指定地點開箱子",
                  author: "",
                },
              ],
            },
            {
              title: "不錯的歷史研究",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/PhantasiaDesert/不错的历史研究.png'),
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