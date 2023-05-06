<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer
            PageTitle="峽谷懸崖路(Gorge Cliff Path)"
            :images="[
                {title: '門派的存活', description: '在NPC面前進行：動作 問候' , url: `${getImageUrl('Requests/GorgeCliffPath/門派的存活.png')}`},
                {title: '龍的傳承1', url: `${getImageUrl('Requests/GorgeCliffPath/龙的传承1.png')}`},
                {title: '龍的傳承2', url: `${getImageUrl('Requests/GorgeCliffPath/龙的传承2.1.png')}`},
                {title: '龍的傳承4', url: `${getImageUrl('Requests/GorgeCliffPath/龙的传承4.1.png')}`},
                {title: '龍的傳承5', url: `${getImageUrl('Requests/GorgeCliffPath/龙的传承5.png')}`},
                {title: '在冰中盛開的花', description: '' , url: `${getImageUrl('Requests/GorgeCliffPath/在冰中盛开的花.png')}`},
                {title: '那日的幽靈', description: '' , url: `${getImageUrl('Requests/GorgeCliffPath/那日的幽灵1.png')}`},
                {title: '被追蹤的人1', description: '' , url: `${getImageUrl('Requests/GorgeCliffPath/被追踪的人1.png')}`},
            ]"
    />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "GorgeCliffPath",
    methods: {
        getImageUrl,
    }
}
</script>

<style scoped>

</style>