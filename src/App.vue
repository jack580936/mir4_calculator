<script setup>
import {useTabStore} from "@/store/tab.js";

const tabStore = useTabStore();
</script>

<template>
  <main>
    <div class="demo">
      <div class="nav nav-tabs">
        <ul class="leftTab-container">
          <li v-for="route in leftRouteTabs" :key="route.name" class="nav-item" @click="tabStore.currentTab = route.path">
            <router-link :to="route.path" :class="{'nav-link': true, 'active': isActiveRoute(route.path)}" >
              {{ route.name }}
            </router-link>
          </li>
        </ul>
        <ul class="rightTab-container">
          <li v-for="route in rightRouteTabs" :key="route.name" class="nav-item"  @click="tabStore.currentTab = route.path">
            <router-link :to="route.path" :class="{'nav-link': true, 'active': isActiveRoute(route.path)}" >
              {{ route.name }}
            </router-link>
          </li>
          <li>
            <div class="github-logo">
              <a href="https://github.com/jack580936/mir4_calculator" target="_blank">
                <img :src="getImageUrl('icon/github-mark-white.png')" alt="Github logo"/>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="component-view">
      <router-view v-slot="{ Component, route }">
        <keep-alive :include="this.keepAliveComponent">
            <component :is="Component"/>
        </keep-alive>
      </router-view>
     </div>
  </main>
</template>

<script>

import {useTabStore} from "@/store/tab.js";

export default {
  name: "App",
  data() {
    return {
      leftRouteTabs: [
        {name: '龍神器', path: '/dragon-artifact'},
        {name: '傳說裝備', path: '/legendary-equipment'},
        {name: '史詩裝備', path: '/epic-equipment'},
        {name: '體質', path: '/constitution'},
        {name: '奇緣', path: '/mystery'},
        {name: '地圖資源', path: '/resource'},
        {name: '委託', path: '/requests'},
        {name: '一些小功能', path: '/other-calculate'}
      ],
      rightRouteTabs: [
        {name: '更新日誌', path: '/change-log'},
      ],
      keepAliveComponent: ['DragonArtifact','EpicEquipment','LegendaryEquipment']
    };
  },
  computed: {

  },
  created() {
    const tabStore = useTabStore();
    this.$router.beforeEach((to, from, next) => {

      tabStore.currentTab = to.path.match(/^\/[^\/]+/)[0];
      next();
    });
  },
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
    isActiveRoute(routePath) {
      const tabStore = useTabStore();
      return tabStore.currentTab === routePath;
    },
  },
};
</script>
