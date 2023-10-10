import {createRouter, createWebHistory} from 'vue-router';
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

export const routers = [
    {
        path: '/:catchAll(.*)',
        name: '首頁',
        meta: {
            title: 'Mir4 Calculator',
        }
    },
    {
        path: '/dragon-artifact',
        name: '龍神器',
        component: DragonArtifact,
        meta: {
            title: '龍神器',
            canonical: 'https://mir4calc.com/dragon-artifact',
        }
    },
    {
        path: '/legendary-equipment',
        name: '傳說裝備',
        component: LegendaryEquipment,
        meta: {
            title: '傳說裝備',
            canonical: 'https://mir4calc.com/legendary-equipment',
        }
    },
    {
        path: '/epic-equipment',
        name: '英雄裝備',
        component: EpicEquipment,
        meta: {
            title: '英雄裝備',
            canonical: 'https://mir4calc.com/epic-equipment',
        }
    },
    {
        path: '/constitution',
        name: '體質',
        component: Constitution,
        meta: {
            title: '體質',
            canonical: 'https://mir4calc.com/constitution',
        }
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
                meta: {
                    title: '奇緣 - 伯牙絕弦',
                    canonical: 'https://mir4calc.com/mystery/grieving-the-death-of-a-friend',
                },
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
                meta: {
                    title: '奇緣 - 浩然之氣',
                    canonical: 'https://mir4calc.com/mystery/reckless-courage',
                },
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
                meta: {
                    title: '地圖資源 - 秘庭峰',
                    canonical: 'https://mir4calc.com/resource/secret-peak',
                },
                props: true,
            },
            {
                path: '/resource/magic-square',
                name: '魔方陣',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 魔方陣',
                    canonical: 'https://mir4calc.com/resource/magic-square',
                },
                props: true,
            },
            {
                path: '/resource/snow-field-area-resource',
                name: '雪原地區(採集)',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 雪原地區(採集)',
                    canonical: 'https://mir4calc.com/resource/snow-field-area-resource',
                },
                props: true,
            },
            {
                path: '/resource/sabuk-area-resource',
                name: '沙巴克地區(採集)',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 沙巴克地區(採集)',
                    canonical: 'https://mir4calc.com/resource/sabuk-area-resource',
                },
                props: true,
            },
            {
                path: '/resource/sabuk-area-chest',
                name: '沙巴克地區(寶箱)',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 沙巴克地區(寶箱)',
                    canonical: 'https://mir4calc.com/resource/sabuk-area-chest',
                },
                props: true,
            },
            {
                path: '/resource/phantasia-area-resource',
                name: '夢村地區(採集)',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 夢村地區(採集)',
                    canonical: 'https://mir4calc.com/resource/phantasia-area-resource',
                },
                props: true,
            },
            {
                path: '/resource/phantasia-area-chest',
                name: '夢村地區(寶箱)',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 夢村地區(寶箱)',
                    canonical: 'https://mir4calc.com/resource/phantasia-area-chest',
                },
                props: true,
            },
            {
                path: '/resource/spiritual-area',
                name: '道觀地區',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 道觀地區',
                    canonical: 'https://mir4calc.com/resource/spiritual-area',
                },
                props: true,
            },
            {
                path: '/resource/valley',
                name: '秘谷',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 秘谷',
                    canonical: 'https://mir4calc.com/resource/valley',
                },
                props: true,
            },
            {
                path: '/resource/Mirage-Ship',
                name: '蜃氣船',
                component: MapViewer,
                meta: {
                    title: '地圖資源 - 蜃氣船',
                    canonical: 'https://mir4calc.com/resource/Mirage-Ship',
                },
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
                meta: {
                    title: '委託 - 峽谷懸崖路',
                    canonical: 'https://mir4calc.com/requests/gorge-cliff-path',
                },
                props: true,
            },
            {
                path: '/requests/nine-dragon-ice-field',
                name: '九龍冰原',
                component: MapViewer,
                meta: {
                    title: '委託 - 九龍冰原',
                    canonical: 'https://mir4calc.com/requests/nine-dragon-ice-field',
                },
                props: true,
            },
            {
                path: '/requests/phantasia-desert',
                name: '夢村沙漠',
                component: MapViewer,
                meta: {
                    title: '委託 - 夢村沙漠',
                    canonical: 'https://mir4calc.com/requests/phantasia-desert',
                },
                props: true,
            },
            {
                path: '/requests/sabuk-castle',
                name: '沙巴克城',
                component: MapViewer,
                meta: {
                    title: '委託 - 沙巴克城',
                    canonical: 'https://mir4calc.com/requests/sabuk-castle',
                },
                props: true,
            },
            {
                path: '/requests/Mirage-Ship-Inner-Cabins',
                name: '蜃氣船內部船艙',
                component: MapViewer,
                meta: {
                    title: '委託 - 蜃氣船內部船艙',
                    canonical: 'https://mir4calc.com/requests/Mirage-Ship-Inner-Cabins',
                },
                props: true,
            },
            {
                path: '/requests/Mirage-Ship-Deck',
                name: '蜃氣船甲板',
                component: MapViewer,
                meta: {
                    title: '委託 - 蜃氣船甲板',
                    canonical: 'https://mir4calc.com/requests/Mirage-Ship-Deck',
                },
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
                meta: {
                    title: '一些小功能 - 採集挖礦速度計算',
                    canonical: 'https://mir4calc.com/other-calculate/speed-boost',
                },
            },
            {
                path: '/other-calculate/lvl',
                name: '各等級資訊',
                component: InfoLevel,
                meta: {
                    title: '一些小功能 - 各等級資訊',
                    canonical: 'https://mir4calc.com/other-calculate/lvl',
                },
            },
        ],
    },
    {
        path: '/change-log',
        name: '更新日誌',
        component: ChangeLog,
        meta: {
            title: '更新日誌',
            canonical: 'https://mir4calc.com/change-log',
        },
    },
];


const router = createRouter({
    history: createWebHistory(''),
    routes: routers,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.meta.canonical) {
        const link = document.querySelector('link[rel=canonical]');
        link.setAttribute('href', to.meta.canonical);
    }
    next();
});

export default router;