<script setup>
import {ref, shallowRef} from 'vue'

import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";
import Constitution from "@/components/Constitution.vue";
import OtherCalculate from "@/components/OtherCalculate.vue";
import mystery from "@/components/Mystery.vue";
import Resource from "@/components/Resource.vue";
import Requests from "@/components/Requests.vue";
import ChangeLog from "@/components/ChangeLog.vue";

const currentTab = shallowRef(Constitution)
const tabs = shallowRef({
  '傳奇裝備': LegendaryEquipment,
  '英雄裝備': EpicEquipment,
  '體質': Constitution,
  '奇緣': mystery,
  '資源點': Resource,
  '委託': Requests,
  '一些小功能': OtherCalculate,
})
const rightTab = shallowRef({'更新日誌': ChangeLog})
</script>

<template>
  <main>
    <div class="demo">
      <div class="nav nav-tabs sticky-top">
        <ul class="leftTab-container nav">
            <template v-for="(component,name) in tabs">
              <li class="nav-item">
                <span @click="currentTab = component"
                      :class="['nav-link' , { active: currentTab === component }]">{{ name }}</span>
              </li>
            </template>
        </ul>
        <ul class="rightTab-container nav">
            <li v-for="(component,name,index) in rightTab" :key="index" class="nav-item">
              <span @click="currentTab = component" :class="['nav-link' , { active: currentTab === component }]">{{
                  name
                }}</span>
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
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </main>
</template>


<script>
export default {
  name: "App",
  methods: {
    getImageUrl(url) {
      return new URL(`/src/assets/${url}`, import.meta.url).href;
    },
  }
}
</script>
<style>

</style>