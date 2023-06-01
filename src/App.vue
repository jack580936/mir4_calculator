<template>
  <main>
    <div class="demo">
      <div class="nav nav-tabs sticky-top">
        <ul class="leftTab-container nav">
          <li v-for="route in routes" :key="route.name" class="nav-item">
            <router-link v-if="!isExcludedRoute(route.name)" :to="route.path" :class="{'nav-link': true, 'active': isActiveRoute(route.path)}">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
        <ul class="rightTab-container nav">
          <li v-for="route in routes" :key="route.name" class="nav-item">
            <router-link v-if="isRightTabRoute(route.name)" :to="route.path" :class="{'nav-link': true, 'active': isActiveRoute(route.path)}">
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
      <router-view v-slot="{ Component }">
        <keep-alive :include="this.keepAliveComponent">
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      excludedRoutes: ['更新日誌', '首頁'],
      rightTabRoutes: ['更新日誌'],
      keepAliveComponent: ['DragonArtifact','EpicEquipment','LegendaryEquipment','Mystery','Resource','Requests']
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
    isExcludedRoute(routeName) {
      return this.excludedRoutes.includes(routeName);
    },
    isRightTabRoute(routeName) {
      return this.rightTabRoutes.includes(routeName);
    },
    isActiveRoute(routePath) {
      return this.$route.path === routePath;
    },
  },
};
</script>
