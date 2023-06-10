<script setup>
import SideBar from "@/components/util/SideBar.vue";
</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs" :currentTab="currentRequestTab" />
  <router-view v-slot="{ Component, route}">
      <component :is="Component" :PageTitle= "requestData[route.name].PageTitle" :images="requestData[route.name].images"/>
  </router-view>
</template>

<script>
import {ref, shallowRef} from 'vue'
import {getImageUrl} from "@/utils";
import {requestData} from "@/utils/requestData.js";


export default {
  name: "Requests",
  data() {
    return {
      sideBarTitle: "委託",
      currentRequestTab: null,
      tabs: [
        {
          name: '九龍冰原',
          path: '/requests/nine-dragon-ice-field',
        },
        {
          name: '沙巴克城',
          path: '/requests/sabuk-castle',
        },
        {
          name: '夢村沙漠',
          path: '/requests/phantasia-desert',
        },
        {
          name: '峽谷懸崖路',
          path: '/requests/gorge-cliff-path',
        }

      ],
      requestData: requestData,
    }
  },
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>


</style>