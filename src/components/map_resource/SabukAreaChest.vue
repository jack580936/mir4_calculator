<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "SabukAreaChest",
    data() {
        return {
            pageTitle: "沙巴克地區寶箱(Sabuk Area Chest)",
            imageData: [
                {
                    title: "沙巴克縣",
                    images: [
                        {
                            title: "",
                            url: this.getImageUrl('map_resource/sabukArea/chest/sabuk-province-chest.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "地牢",
                    images: [
                        {
                            title: "地牢",
                            url: this.getImageUrl('map_resource/sabukArea/chest/sabuk-castle-underground-jail-chest.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "菁英地牢",
                            url: this.getImageUrl('map_resource/sabukArea/chest/elite-sabuk-castle-underground-jail.png'),
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