import {createRouter, createWebHashHistory} from 'vue-router';
import EpicEquipment from "@/components/EpicEquipment.vue";
import LegendaryEquipment from "@/components/LegendaryEquipment.vue";
import Constitution from "@/components/Constitution.vue";
import OtherCalculate from "@/components/OtherCalculate.vue";
import mystery from "@/components/Mystery.vue";
import Resource from "@/components/Resource.vue";
import Requests from "@/components/Requests.vue";
import ChangeLog from "@/components/ChangeLog.vue";
import DragonArtifact from "@/components/DragonArtifact.vue";
import MapViewer from "@/components/util/MapViewer.vue";

const routers = [
    {
        path: '/:catchAll(.*)',
        name: '首頁',
        redirect: '/dragon-artifact',
    },
    {
        path: '/dragon-artifact',
        name: '龍神器',
        component: DragonArtifact,
    },
    {
        path: '/legendary-equipment',
        name: '傳說裝備',
        component: LegendaryEquipment,
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
        component: Requests,
        // 委託預設首頁
        redirect: '/requests/sabuk-castle',
        children: [
            {
                path: '/requests/gorge-cliff-path',
                name: '峽谷懸崖路',
                component: MapViewer,
                props: true,
            },
            {
                path: '/requests/nine-dragon-ice-field',
                name: '九龍冰原',
                component: MapViewer,
                props: true,
            },
            {
                path: '/requests/phantasia-desert',
                name: '夢村沙漠',
                component: MapViewer,
                props: true,
            },
            {
                path: '/requests/sabuk-castle',
                name: '沙巴克城',
                component: MapViewer,
                props: true,
            }
        ],
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
    routes: routers,
});

export default router;