<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer
            PageTitle="沙巴克城(Sabuk Castle)"
            :images="[{title: '加強維修壁壘2', url: `${getImageUrl('Requests/SabukCastle/SabukCastle-AdditionalWallMaintenance2.png')}`}]"
    />
</template>

<script>
import {getImageUrl} from "../../utils";

export default {
    name: "SabukCastle",
    methods: {
        getImageUrl,
    }
}
</script>

<style scoped>

</style>