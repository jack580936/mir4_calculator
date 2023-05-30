<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "PhantasiaAreaResource",
    data() {
        return {
            pageTitle: "夢村地區資源(Phantasia Area Resource)",
            imageData: [
                {
                    title: "劍池",
                    images: [
                        {
                            title: "劍池1層",
                            url: this.getImageUrl('map_resource/phantasiaArea/resource/bladehaven-1f-resource.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "劍池2層",
                            url: this.getImageUrl('map_resource/phantasiaArea/resource/bladehaven-2f-resource.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "蟻穴",
                    images: [
                        {
                            title: "蟻穴1層",
                            url: this.getImageUrl('map_resource/phantasiaArea/resource/ant-hole-1f-resource.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "蟻穴2層",
                            url: this.getImageUrl('map_resource/phantasiaArea/resource/ant-hole-2f-resource.png'),
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
                            url: this.getImageUrl('map_resource/phantasiaArea/resource/phantasia-desert-resource.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "沙漠路",
                    images: [
                        {
                            title: "",
                            url: this.getImageUrl('map_resource/phantasiaArea/resource/desert-road-resource.png'),
                            description: "",
                            author: "",
                        }
                    ]
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