<script setup>

import SideBar from "@/components/util/SideBar.vue";
import {useTabStore} from "@/store/tab.js";
import {onMounted, ref} from "vue";

const defaultMapTab = '蜃氣船';

const tabStore = useTabStore();
const currentSideBarTab = ref(defaultMapTab);

onMounted(() => {
  tabStore.currentSideBarTab = currentSideBarTab.value;
});
</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs"/>
  <router-view v-slot="{ Component, route}">
      <component :is="Component" :PageTitle= "mapData[route.name].PageTitle" :images="mapData[route.name].images"/>
  </router-view>
</template>

<script>
import {ref, shallowRef} from 'vue'
import {getImageUrl} from "@/utils";
import {mapData} from "@/utils/mapData.js";
import {useTabStore} from "@/store/tab.js";
export default {
  name: "Resource",
  data() {
    return {
      currentTab: '地圖資源',
      sideBarTitle: "地圖資源",
      tabs: [
            {
                path: '/resource/Mirage-Ship',
                name: '蜃氣船',
            },
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
                path: '/resource/Valley',
                name: '秘谷',
            },

      ],
      mapData: mapData,
    }
  },
  watch: {
    currentMapTab: function (val) {
      useTabStore().currentMapTab = val;
    }
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