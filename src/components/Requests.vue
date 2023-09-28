<script setup>
import SideBar from "@/components/util/SideBar.vue";
import {useTabStore} from "@/store/tab.js";
import {onMounted, ref} from "vue";

const defaultRequestTab = ref('蜃氣船甲板');

const tabStore = useTabStore();

onMounted(() => {
  tabStore.currentSideBarTab = defaultRequestTab.value;
});

</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs"/>
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
      tabs: [
        {
          name: '蜃氣船內部船艙',
          path: '/requests/Mirage-Ship-Inner-Cabins',
        },
        {
          name: '蜃氣船甲板',
          path: '/requests/Mirage-Ship-Deck',
        },
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
        },
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