import { createRouter, createWebHistory } from 'vue-router';
import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";
import Constitution from "@/components/Constitution.vue";
import OtherCalculate from "@/components/OtherCalculate.vue";
import mystery from "@/components/Mystery.vue";
import Resource from "@/components/Resource.vue";
import Requests from "@/components/Requests.vue";
import ChangeLog from "@/components/ChangeLog.vue";

const routes = [
  {
    path: '/mir4_calculator/',
    name: '首頁',
    redirect: '/mir4_calculator/constitution'
  },
  {
    path: '/mir4_calculator/legendary-equipment',
    name: '傳說裝備',
    component: LegendaryEquipment
  },
  {
    path: '/mir4_calculator/epic-equipment',
    name: '英雄裝備',
    component: EpicEquipment
  },
  {
    path: '/mir4_calculator/constitution',
    name: '體質',
    component: Constitution
  },
  {
    path: '/mir4_calculator/mystery',
    name: '奇緣',
    component: mystery
  },
  {
    path: '/mir4_calculator/resource',
    name: '地圖資源',
    component: Resource
  },
  {
    path: '/mir4_calculator/requests',
    name: '委託',
    component: Requests
  },
  {
    path: '/mir4_calculator/other-calculate',
    name: '一些小功能',
    component: OtherCalculate
  },
  {
    path: '/mir4_calculator/change-log',
    name: '更新日誌',
    component: ChangeLog
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;