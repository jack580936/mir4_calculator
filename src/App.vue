<script setup>
import {useTabStore} from "@/store/tab.js";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import Sponsor from "@/components/Sponsor.vue";
import ShutdownNotice from "@/components/ShutdownNotice.vue";

const tabStore = useTabStore();
const {currentTab, currentSideBarTab, screenWidth} = storeToRefs(tabStore);
const showSmNavBarTab = ref(false);
const isSponsorModalVisible = ref(false);
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};


onMounted(() => {
  updateScreenWidth();
  window.addEventListener('resize', updateScreenWidth);
});

</script>

<template>
  <main>
    <ShutdownNotice />
    <div class="welcome-container" v-if="!currentTab">
      <div class="page-options" >
        <router-link
          v-for="route in RouteTabs"
          :key="route.name"
          :to="route.path"
          :class="['page-option', route.path.replace(/^\//, '')]"
          @click="currentTab = route.path; showSmNavBarTab = false"
        >
        {{ route.name }}
        </router-link>
      </div>
    </div>
    <div class="demo" v-if="currentTab">
      <div class="nav nav-tabs" v-if="screenWidth > 849 ">
        <ul class="leftTab-container">
          <li v-for="route in leftRouteTabs" :key="route.name" class="nav-item" @click="currentTab = route.path">
            <router-link :to="route.path" :class="{'nav-link': true, 'active': isActiveRoute(route.path)}">
              {{ route.name }}
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
        <div class="current-page" @click="showSmNavBarTab = !showSmNavBarTab" v-if="RouteTabs.find(route => route.path === currentTab) !== undefined">
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
    <Sponsor :visible="isSponsorModalVisible" @close="isSponsorModalVisible = false" />
  </main>
</template>

<script>

import {useTabStore} from "@/store/tab.js";

export default {
  name: "App",
  data() {
    return {
      RouteTabs: [
        {name: '龍神器', path: '/dragon-artifact'},
        {name: '傳說裝備', path: '/legendary-equipment'},
        {name: '英雄裝備', path: '/epic-equipment'},
        {name: '體質', path: '/constitution'},
        {name: '奇緣', path: '/mystery'},
        {name: '地圖資源', path: '/resource'},
        {name: '委託', path: '/requests'},
        {name: '一些小功能', path: '/other-calculate'},
        {name: '更新日誌', path: '/change-log'},
      ],
      leftRouteTabs: [
        {name: '龍神器', path: '/dragon-artifact'},
        {name: '傳說裝備', path: '/legendary-equipment'},
        {name: '英雄裝備', path: '/epic-equipment'},
        {name: '體質', path: '/constitution'},
        {name: '奇緣', path: '/mystery'},
        {name: '地圖資源', path: '/resource'},
        {name: '委託', path: '/requests'},
        {name: '一些小功能', path: '/other-calculate'}
      ],
      rightRouteTabs: [
        {name: '更新日誌', path: '/change-log'},
      ],
      keepAliveComponentList: ['DragonArtifact', 'EpicEquipment', 'LegendaryEquipment']
    };
  },
  computed: {},
  created() {
    const tabStore = useTabStore();
    this.$router.beforeEach((to, from, next) => {
      if (to.path === '/') {
        return;
      }
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