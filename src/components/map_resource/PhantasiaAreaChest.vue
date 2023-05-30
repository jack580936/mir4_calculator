<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "PhantasiaAreaChest",
    data() {
        return {
            pageTitle: "夢村地區寶箱(Phantasia Area Chest)",
            imageData: [
                {
                    title: "沙漠路",
                    images: [
                        {
                            title: "",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/desert-road-chests.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "夢村沙漠",
                    images: [
                        {
                            title: "",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/phantasia-desert-chests.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "菁英夢村沙漠",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/elite-phantasia-desert.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "菁英蟻穴",
                    images: [
                        {
                            title: "菁英蟻穴1層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/elite-ant-hole-1f.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "菁英蟻穴2層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/elite-ant-hole-2f.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "夢村迷宮",
                    images: [
                        {
                            title: "夢村迷宮1層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-1f.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "夢村迷宮2層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-2f.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "夢村迷宮3層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-3f.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "夢村迷宮4層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/phantasia-lab-4f.png'),
                            description: "",
                            author: "",
                        },

                    ],
                },
                {
                    title: "劍池",
                    images: [
                        {
                            title: "劍池1層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/bladehaven-1f.png'),
                            description: "",
                            author: "",
                        }
                    ]
                },
                {
                    title: "石刻墓",
                    images: [
                        {
                            title: "石刻墓2層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/rockcut-tomb-2f.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "石刻墓3層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/rockcut-tomb-3f.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "菁英石刻墓3層(黃色部分)",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/RockcutTomb3F.png'),
                            description: "",
                            author: "",
                        },
                    ]
                },
                {
                    title: "石刻迷宮",
                    images: [
                        {
                            title: "石刻迷宮3層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/RockcutLab3F.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "石刻迷宮4層",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/RockcutLab4F.png'),
                            description: "",
                            author: "",
                        },
                    ]
                },
                {
                    title: "夢村秘谷3層",
                    images: [
                        {
                            title: "",
                            url: this.getImageUrl('map_resource/phantasiaArea/chest/PhantasiaValley3F.png'),
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