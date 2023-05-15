<template>
  <main>
    <div class="demo">
      <div class="nav nav-tabs sticky-top">
        <ul class="leftTab-container nav">
          <li v-for="route in $router.options.routes" :key="route.name" class="nav-item">
            <router-link v-if="!excludeRoutes.includes(route.name)" :to="route.path" class="nav-link" :class="{ active: $route.path === route.path }">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
        <ul class="rightTab-container nav">
          <li v-for="route in $router.options.routes" :key="route.name" class="nav-item">
            <router-link v-if="rightTabRoutes.includes(route.name)" :to="route.path" class="nav-link" :class="{ active: $route.path === route.path }">
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
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </main>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      excludeRoutes: ['更新日誌', '首頁'],
      rightTabRoutes: ['更新日誌'],
    };
  },
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
  }
}
</script>
