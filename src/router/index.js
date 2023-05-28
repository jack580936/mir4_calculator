import { createRouter, createWebHashHistory } from 'vue-router';
import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";
import Constitution from "@/components/Constitution.vue";
import OtherCalculate from "@/components/OtherCalculate.vue";
import mystery from "@/components/Mystery.vue";
import Resource from "@/components/Resource.vue";
import Requests from "@/components/Requests.vue";
import ChangeLog from "@/components/ChangeLog.vue";
import DragonArtifact from "@/components/DragonArtifact.vue";

const routes = [
  {
    path: '/:catchAll(.*)',
    name: '首頁',
    redirect: '/constitution'
  },
  {
    path: '/dragon-artifact',
    name: '龍神器',
    component: DragonArtifact
  },
  {
    path: '/legendary-equipment',
    name: '傳說裝備',
    component: LegendaryEquipment
  },
  {
    path: '/epic-equipment',
    name: '英雄裝備',
    component: EpicEquipment
  },
  {
    path: '/constitution',
    name: '體質',
    component: Constitution
  },
  {
    path: '/mystery',
    name: '奇緣',
    component: mystery
  },
  {
    path: '/resource',
    name: '地圖資源',
    component: Resource
  },
  {
    path: '/requests',
    name: '委託',
    component: Requests
  },
  {
    path: '/other-calculate',
    name: '一些小功能',
    component: OtherCalculate
  },
  {
    path: '/change-log',
    name: '更新日誌',
    component: ChangeLog
  },
];

const router = createRouter({
  history: createWebHashHistory('mir4_calculator'),
  routes
});

export default router;