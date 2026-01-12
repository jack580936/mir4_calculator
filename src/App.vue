<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useTabStore } from "@/store/tab.js";
import Sponsor from "@/components/Sponsor.vue";
import dragonArtifact_image from "@/assets/dragonArtifact/傳說神笏.png";
import HomePage from "@/components/HomePage.vue";

const router = useRouter();
const tabStore = useTabStore();
const { currentTab, currentSideBarTab, screenWidth, showSmNavBarTab } = storeToRefs(tabStore);

const isSponsorModalVisible = ref(false);

const getImageUrl = (url) => {
  return new URL(`/src/assets/${url}`, import.meta.url).href;
};


const RouteTabs = [
  { name: '龍神器', path: '/dragon-artifact' },
  { name: '傳說裝備', path: '/legendary-equipment' },
  { name: '英雄裝備', path: '/epic-equipment' },
  { name: '體質', path: '/constitution' },
  { name: '奇緣', path: '/mystery' },
  { name: '地圖資源', path: '/resource' },
  { name: '委託', path: '/requests' },
  { name: '一些小功能', path: '/other-calculate' },
  { name: '更新日誌', path: '/change-log' },
];

const leftRouteTabs = [
  { name: '龍神器', path: '/dragon-artifact' },
  { name: '傳說裝備', path: '/legendary-equipment' },
  { name: '英雄裝備', path: '/epic-equipment' },
  { name: '體質', path: '/constitution' },
  { name: '奇緣', path: '/mystery' },
  { name: '地圖資源', path: '/resource' },
  { name: '委託', path: '/requests' },
  { name: '一些小功能', path: '/other-calculate' }
];

const rightRouteTabs = [
  { name: '更新日誌', path: '/change-log' },
];

const keepAliveComponentList = ['DragonArtifact', 'EpicEquipment', 'LegendaryEquipment'];

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};




const isActiveRoute = (routePath) => {
  return currentTab.value === routePath;
};

onMounted(() => {
  updateScreenWidth();
  window.addEventListener('resize', updateScreenWidth);

  // Router beforeEach guard
  router.beforeEach((to, from, next) => {
    if (to.path === '/') {
      return;
    }
    currentTab.value = to.path.match(/^\/[^\/]+/)[0];
    next();
  });
});
</script>


<template>
  <main>
    <HomePage/>
    <div class="demo" v-if="currentTab">
      <div class="nav nav-tabs" v-if="screenWidth > 849 ">
        <ul class="leftTab-container">
          <li v-for="targetRoute in leftRouteTabs" :key="targetRoute.name" class="nav-item" @click="currentTab = targetRoute.path">
            <router-link :to="targetRoute.path" :class="{'nav-link': true, 'active': isActiveRoute(targetRoute.path)}">
              {{ targetRoute.name }}
            </router-link>
          </li>
        </ul>
        <ul class="rightTab-container">
          <li v-for="route in rightRouteTabs" :key="route.name" class="nav-item" @click="currentTab = route.path">
            <router-link :to="route.path" :class="{'nav-link': true, 'active': isActiveRoute(route.path)}">
              {{ route.name }}
            </router-link>
          </li>
          <li class="nav-item">
            <div class="sponsor-logo" @click="isSponsorModalVisible = true" title="Sponsor">
              <img :src="getImageUrl('icon/heart.svg')" alt="Sponsor"/>
            </div>
          </li>
          <li class="nav-item">
            <div class="github-logo">
              <a href="https://github.com/jack580936/mir4_calculator" target="_blank">
                <img :src="getImageUrl('icon/github-mark-white.png')" alt="Github logo"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="sm-nav-bar" v-else>
        <div class="current-page" @click="showSmNavBarTab = !showSmNavBarTab"
             v-if="RouteTabs.find(route => route.path === currentTab) !== undefined">
          {{ RouteTabs.find(route => route.path === currentTab).name }}
        </div>
        <div class="sm-nav-bar-tab" v-if="showSmNavBarTab">
          <router-link
              v-for="route in RouteTabs"
              :key="route.name"
              :to="route.path"
              class="sm-nav-bar-tab-item nav-link"
              :class="{'active': isActiveRoute(route.path)}"
              @click="currentTab = route.path; showSmNavBarTab = false"
          >
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="component-view">
      <router-view v-slot="{ Component, route }">
        <keep-alive :include="keepAliveComponentList">
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
    <Sponsor :visible="isSponsorModalVisible" @close="isSponsorModalVisible = false"/>
  </main>
</template>

<style scoped lang="scss">
.sponsor-logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
}
</style>