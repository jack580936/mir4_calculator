<script setup>
import SideBar from "@/components/util/SideBar.vue";

</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs" :currentTab="currentRequestTab" />
  <router-view v-slot="{ Component, route}">
      <component :is="Component"/>
  </router-view>
</template>
<script>

export default {
  name: "OtherCalculate",

  data() {
    return {
      sideBarTitle: "功能",
      currentRequestTab: null,
      tabs: [
            {
                path: '/other-calculate/speed-boost',
                name: '採集挖礦速度計算',
            },
            {
                path: '/other-calculate/lvl',
                name: '各等級資訊',
            },
          ],
    }
  },

  methods:{
  }
}
</script>

<style scoped>

.active {
  background-color: #ffcc00; /* your desired highlight color */
  color: #ffffff; /* your desired text color */
}


</style>