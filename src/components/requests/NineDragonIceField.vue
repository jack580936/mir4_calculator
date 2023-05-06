<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer
            PageTitle="九龍冰原(Nine Dragon Ice Field)"
            :images="[
                {title: '需要移住資金', url: `${getImageUrl('Requests/NineDragonIceField/需要移居资金.png')}`},
                {title: '山野族的藥草1', description: '' , url: `${getImageUrl('Requests/NineDragonIceField/山野族的藥草1.png')}`},
                {title: '救命般的寶物', description: '' , url: `${getImageUrl('Requests/NineDragonIceField/如性命一般珍贵的宝物.png')}`},
                {title: '藥草商的必需品', description: '' , url: `${getImageUrl('Requests/NineDragonIceField/药草商的必需品.png')}`},
                {title: '出眾的警衛兵2', description: '' , url: `${getImageUrl('Requests/NineDragonIceField/出众的警卫兵2.png')}`},
            ]"
    />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "NineDragonIceField",
    methods: {
        getImageUrl,
    }
}
</script>

<style scoped>

</style>