<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer
            PageTitle="夢村沙漠(Phantasia Desert)"
            :images="[
                {title: '猛烈的風沙', url: `${getImageUrl('Requests/PhantasiaDesert/猛烈的风沙.png')}`},
                {title: '尋找沙漠寶物1', description: '' , url: `${getImageUrl('Requests/PhantasiaDesert/寻找沙漠宝物1.png')}`},
                {title: '尋找沙漠寶物2', description: '接委托然後在劍池1 2層、石刻墓1 2層開寶箱獲得製作萬能鑰匙的材料\n圖紙1 銀錠50 金剛木50，然後去找沙巴克城的李手藝製作萬能鑰匙。\n最後去劍池1層指定地點開箱子' , url: `${getImageUrl('Requests/PhantasiaDesert/寻找沙漠宝物2.png')}`},
                {title: '不錯的歷史研究', description: '' , url: `${getImageUrl('Requests/PhantasiaDesert/不错的历史研究.png')}`},
            ]"
    />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "PhatasiaDesert",
    methods: {
        getImageUrl,
    }
}
</script>

<style scoped>

</style>