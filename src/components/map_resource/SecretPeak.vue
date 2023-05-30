<script setup>

import MapViewer from "@/components/util/MapViewer.vue";
</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SecretPeak",
    data() {
        return {
            pageTitle: "秘庭峰(Secret Peak)",
            imageData: [
                {
                    title: "7-9層資源分布",
                    images: [
                        {
                            title: "7-9層鐵礦",
                            url: this.getImageUrl('map_resource/SecertPeak/sp789-ores.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "7-9層黑鐵",
                            url: this.getImageUrl('map_resource/SecertPeak/sp789-darksteel.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "7-9層草",
                            url: this.getImageUrl('map_resource/SecertPeak/sp789-plants.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "7-9層真氣",
                            url: this.getImageUrl('map_resource/SecertPeak/sp789-energy.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "7-9層寶箱",
                            url: this.getImageUrl('map_resource/SecertPeak/sp789-chest.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "1-6層資源分布",
                    images: [
                        {
                            title: "1-6層鐵礦",
                            url: this.getImageUrl('map_resource/SecertPeak/sp1-6-ores.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "1-6層黑鐵",
                            url: this.getImageUrl('map_resource/SecertPeak/sp1-6-darksteel.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "1-6層草",
                            url: this.getImageUrl('map_resource/SecertPeak/sp1-6-plants.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "1-6層真氣",
                            url: this.getImageUrl('map_resource/SecertPeak/sp1-6-energy.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "1-6層寶箱",
                            url: this.getImageUrl('map_resource/SecertPeak/sp1-6-chest.png'),
                            description: "",
                            author: "",
                        },
                    ],
                },
                {
                    title: "Boss、小惡魔",
                    images: [
                        {
                            title: "小惡魔警衛",
                            url: this.getImageUrl('map_resource/SecertPeak/sp-goblin-guard.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "小惡魔獵人",
                            url: this.getImageUrl('map_resource/SecertPeak/sp-goblin-hunter.png'),
                            description: "",
                            author: "",
                        },
                        {
                            title: "BOSS出現時間",
                            url: this.getImageUrl('map_resource/BossTime.png'),
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