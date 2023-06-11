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
      currentRequestTab: '沙巴克城',
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
  created() {
    this.$router.beforeEach((to, from, next) => {
      if (to.name === '委託') {
        // 當點選前往委託頁面時，預設顯示沙巴克城的委託(預設為沙巴克城是因為router中設定預設首頁為沙巴克城)
        this.currentRequestTab = '沙巴克城';
        next();
      }
      this.currentRequestTab = to.name;
      next();
    });
  },
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>


</style>