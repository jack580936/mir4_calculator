<script setup>

import SideBar from "@/components/util/SideBar.vue";
</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs" :currentTab="currentMapTab" />
  <router-view v-slot="{ Component, route}">
      <component :is="Component" :PageTitle= "mapData[route.name].PageTitle" :images="mapData[route.name].images"/>
  </router-view>
</template>

<script>
import {ref, shallowRef} from 'vue'
import {getImageUrl} from "@/utils";
import {mapData} from "@/utils/mapData.js";
export default {
  name: "Resource",
  data() {
    return {
      currentTab: '地圖資源',
      sideBarTitle: "地圖資源",
      currentMapTab: "秘庭峰",
      tabs: [
            {
                path: '/resource/secret-peak',
                name: '秘庭峰',
            },
            {
                path: '/resource/magic-square',
                name: '魔方陣',
            },
            {
                path: '/resource/snow-field-area-resource',
                name: '雪原地區(採集)',
            },
            {
                path: '/resource/sabuk-area-resource',
                name: '沙巴克地區(採集)',
            },
            {
                path: '/resource/sabuk-area-chest',
                name: '沙巴克地區(寶箱)',
            },
            {
                path: '/resource/phantasia-area-resource',
                name: '夢村地區(採集)',
            },
            {
                path: '/resource/phantasia-area-chest',
                name: '夢村地區(寶箱)',
            },
            {
                path: '/resource/spiritual-area',
                name: '道觀地區',
            },
            {
                path: '/resource/valley',
                name: '秘谷',
            },

      ],
      mapData: mapData,
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.name === '地圖資源') {
        // 當點選前往委託頁面時，預設顯示秘庭峰的地圖資源(預設為秘庭峰是因為router中設定預設首頁為秘庭峰)
        this.currentMapTab = '秘庭峰';
        next();
      }
      this.currentMapTab = to.name;
      next();
    });
  },
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

ul {
  padding: 0;
}



</style>