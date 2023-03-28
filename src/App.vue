<script setup>
import {ref, shallowRef} from 'vue'

import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";
import InternalStrength from "@/components/InternalStrength.vue";
import Ad from "@/components/Ad.vue";
import ChangeLog from "@/components/ChangeLog.vue";

const currentTab = shallowRef(EpicEquipment)
const tabs = shallowRef({'傳奇裝備': LegendaryEquipment, '英雄裝備': EpicEquipment, '內功': InternalStrength})
const rightTab = shallowRef({'廣告': Ad, '更新日誌': ChangeLog})
</script>

<template>
  <main>
    <div class="demo">
      <ul class="nav nav-tabs sticky-top navbar-light bg-light">
        <div class="leftTab-container">
          <ul class="nav">
            <li v-for="(component,name,index) in tabs" :key="index" class="nav-item">
              <span @click="currentTab = component" :class="['nav-link' , { active: currentTab === component }]">{{ name }}</span>
            </li>
          </ul>
        </div>
        <div class="rightTab-container">
          <ul class="nav">
            <li v-for="(component,name,index) in rightTab" :key="index" class="nav-item">
              <span @click="currentTab = component" :class="['nav-link' , { active: currentTab === component }]">{{ name }}</span>
            </li>
          </ul>
        </div>
      </ul>
      <keep-alive>
        <component :is="currentTab" class="tab_page_bg"></component>
      </keep-alive>
    </div>
  </main>
</template>

<style>

</style>