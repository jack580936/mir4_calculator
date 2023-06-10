<script setup>

import SideBar from "@/components/util/SideBar.vue";
</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs" :currentTab="currentRequestTab" />
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
      sideBarTitle: "地圖資源",
      currentRequestTab: null,
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
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

.menu-header {
  font-weight: 600;
  padding: 10px 15px;
  font-size: 0.8em;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  color: rgb(91, 102, 135);
  list-style-type: none;
}


.menu-item {
  padding: 10px 35px;
  font-size: 1rem;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  color: rgb(123, 130, 156);
  list-style-type: none;
}

ul {
  padding: 0;
}

.active {
  background-color: #ffcc00; /* your desired highlight color */
  color: #ffffff; /* your desired text color */
}

</style>