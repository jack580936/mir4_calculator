<script setup>
import {ref, shallowRef} from 'vue'

import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";
import Constitution from "@/components/Constitution.vue";
import OtherCalculate from "@/components/OtherCalculate.vue";
import mystery  from "@/components/Mystery.vue";
import Ad from "@/components/Ad.vue";
import ChangeLog from "@/components/ChangeLog.vue";

const currentTab = shallowRef(LegendaryEquipment)
const tabs = shallowRef({
  '傳奇裝備': LegendaryEquipment,
  '英雄裝備': EpicEquipment,
  '體質內功': Constitution,
  '奇緣': mystery,
  '一些小功能': OtherCalculate
})
const rightTab = shallowRef({'廣告': Ad, '更新日誌': ChangeLog})
</script>

<template>
  <main>
    <div class="demo">
      <ul class="nav nav-tabs sticky-top navbar-light bg-light">
        <div class="leftTab-container">
          <ul class="nav">
            <template v-for="(component,name) in tabs">
              <li  class="nav-item">
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
          </ul>
        </div>
      </ul>
      <keep-alive>
        <component :is="currentTab"></component>
      </keep-alive>
    </div>
  </main>
</template>

<style>

</style>