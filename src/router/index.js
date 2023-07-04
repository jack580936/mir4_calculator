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
import PdfViewer from "@/components/util/PdfViewer.vue";
import SpeedCalculate from "@/components/util/SpeedCalculate.vue";
import InfoLevel from "@/components/util/InfoLevel.vue";
import {useTabStore} from "@/store/tab.js";

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
        component: mystery,
        redirect: '/mystery/grieving-the-death-of-a-friend',
        children: [
            {
                path: '/mystery/grieving-the-death-of-a-friend',
                name: '伯牙絕弦',
                component: PdfViewer,
                props: true,
                beforeEnter: (to, from, next) => {
                    const tabStore = useTabStore();
                    tabStore.currentSideBarTab = '伯牙絕弦';
                    next();
                },
            },
            {
                path: '/mystery/reckless-courage',
                name: '浩然之氣',
                component: PdfViewer,
                props: true,
            },
        ]
    },
    {
        path: '/resource',
        name: '地圖資源',
        component: Resource,
        // 地圖資源預設首頁
        redirect: '/resource/Mirage-Ship',
        children: [
            {
                path: '/resource/secret-peak',
                name: '秘庭峰',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/magic-square',
                name: '魔方陣',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/snow-field-area-resource',
                name: '雪原地區(採集)',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/sabuk-area-resource',
                name: '沙巴克地區(採集)',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/sabuk-area-chest',
                name: '沙巴克地區(寶箱)',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/phantasia-area-resource',
                name: '夢村地區(採集)',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/phantasia-area-chest',
                name: '夢村地區(寶箱)',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/spiritual-area',
                name: '道觀地區',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/valley',
                name: '秘谷',
                component: MapViewer,
                props: true,
            },
            {
                path: '/resource/Mirage-Ship',
                name: '蜃氣船',
                component: MapViewer,
                props: true,
                beforeEnter: (to, from, next) => {
                    const tabStore = useTabStore();
                    tabStore.currentSideBarTab = '蜃氣船';
                    next();
                },
            },
        ],
    },
    {
        path: '/requests',
        name: '委託',
        component: Requests,
        // 委託預設首頁
        redirect: '/requests/Mirage-Ship-Deck',
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
            },
            {
                path: '/requests/Mirage-Ship-Inner-Cabins',
                name: '蜃氣船內部船艙',
                component: MapViewer,
                props: true,
            },
            {
                path: '/requests/Mirage-Ship-Deck',
                name: '蜃氣船甲板',
                component: MapViewer,
                props: true,
                beforeEnter: (to, from, next) => {
                    const tabStore = useTabStore();
                    tabStore.currentSideBarTab = '蜃氣船甲板';
                    next();
                },
            },
        ],
    },
    {
        path: '/other-calculate',
        name: '一些小功能',
        component: OtherCalculate,
        redirect: '/other-calculate/speed-boost',
        children: [
            {
                path: '/other-calculate/speed-boost',
                name: '採集挖礦速度計算',
                component: SpeedCalculate,
            },
            {
                path: '/other-calculate/lvl',
                name: '各等級資訊',
                component: InfoLevel,
            },
        ],
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