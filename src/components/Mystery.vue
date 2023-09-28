<script setup>
import SideBar from "@/components/util/SideBar.vue";
import {useTabStore} from "@/store/tab.js";
import {onMounted, ref} from "vue";

const defaultMysteryTab = '伯牙絕弦';

const tabStore = useTabStore();
const currentSideBarTab = ref(defaultMysteryTab);

onMounted(() => {
  tabStore.currentSideBarTab = currentSideBarTab.value;
});

</script>

<template>
  <SideBar :side-bar-title="sideBarTitle" :tabs="tabs" />
  <router-view v-slot="{ Component, route}">
      <component :is="Component"  :pdfUrl="mysteryData[route.name]" :pdfTitle="mysteryData[route.name]"/>
  </router-view>
</template>

<script>

export default {
  name: "Mystery",

  data() {
    return {
      sideBarTitle: "奇緣",
      tabs: [
            {
                path: '/mystery/grieving-the-death-of-a-friend',
                name: '伯牙絕弦',
            },
            {
                path: '/mystery/reckless-courage',
                name: '浩然之氣',
            },
          ],
      mysteryData: {
        "伯牙絕弦": "伯牙絕弦.pdf",
        "浩然之氣": "浩然之氣.pdf",
      }
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