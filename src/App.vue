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
import legendaryEquipment from "@/components/LegendaryEquipment.vue";

const currentTab = shallowRef(LegendaryEquipment)
const tabs = shallowRef({
  '傳奇裝備': LegendaryEquipment,
  '英雄裝備': EpicEquipment,
  '體質內功': Constitution,
  '奇緣': mystery,
  '資源點': Resource,
  '委託': Requests,
  '一些小功能': OtherCalculate
})
const rightTab = shallowRef({'更新日誌': ChangeLog})
</script>

<template>
  <main>
    <div class="demo">
      <ul class="nav nav-tabs sticky-top">
        <div class="leftTab-container">
          <ul class="nav">
            <template v-for="(component,name) in tabs">
              <li class="nav-item">
                <span @click="currentTab = component"
                      :class="['nav-link' , { active: currentTab === component }]">{{ name }}</span>
              </li>
            </template>
          </ul>
        </div>
        <div class="rightTab-container">
          <ul class="nav">
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
      </ul>
      <keep-alive :include="epicEquipment && legendaryEquipment">
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