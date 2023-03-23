<script setup>
import { ref, shallowRef } from 'vue'

import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";

const currentTab = shallowRef(EpicEquipment)
const tabs = shallowRef({'傳奇裝備':LegendaryEquipment,'英雄裝備':EpicEquipment})

</script>

<template>
  <main>
    <div class="demo">
      <ul class="nav nav-tabs  sticky-top  navbar-light  bg-light">
        <li v-for="(component,name,index) in tabs" :key="index" class="nav-item">
          <span @click="currentTab = component" :class="['nav-link' , { active: currentTab === component }]">{{ name }}</span>
        </li>
      </ul>
      <keep-alive>
      <component :is="currentTab" class="tab_page_bg"></component>
      </keep-alive>
    </div>
  </main>
</template>
