<script setup>


import {useTabStore} from "@/store/tab.js";
import {storeToRefs} from "pinia";

import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const tabStore = useTabStore();
const { currentTab, currentSideBarTab, screenWidth, showSmNavBarTab } = storeToRefs(tabStore);

const RouteTabs = [
  { name: '龍神器', path: '/dragon-artifact', image: null },
  { name: '傳說裝備', path: '/legendary-equipment', image: null },
  { name: '英雄裝備', path: '/epic-equipment', image: null },
  { name: '體質', path: '/constitution', image: null },
  { name: '奇緣', path: '/mystery', image: null },
  { name: '地圖資源', path: '/resource', image: null },
  { name: '委託', path: '/requests', image: null },
  { name: '一些小功能', path: '/other-calculate', image: null },
  { name: '更新日誌', path: '/change-log', image: null },
];

const getFullImageUrl = (path) => {
  // 如果已經是完整 URL 就直接返回
  if (path.startsWith('http') || path.startsWith('/assets')) {
    return path;
  }
  // 否則使用 new URL 處理
  return new URL(path, import.meta.url).href;
};

const directToPage = (targetRoute) => {
  currentTab.value = targetRoute.path;
  showSmNavBarTab.value = false;
  router.push(targetRoute.path);
};

</script>

<template>
    <div class="welcome-container" v-if="!currentTab">
      <div class="page-options">
        <template
            v-for="targetRoute in RouteTabs"
            :key="targetRoute.name"
        >
          <div :class="['page-option', targetRoute.path.replace(/^\//, '')]"
               @click="directToPage(targetRoute)">
            <div class="page-option-text">
              {{ targetRoute.name }}
            </div>
            <img class="page-option-image" :src="targetRoute.image" alt="">
          </div>
        </template>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.welcome-container {
  height: 100vh;
  width: 100vw;
}

.page-options {

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  background-image: url("../assets/bg/bggg.png");
  background-repeat: no-repeat;
  background-size: cover;
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: forwards;
  gap: 2rem;
  opacity: 0; /* 初始透明度為 0 */
  z-index: -1;
  overflow: auto;

  @media (max-width: 1024px) {
    padding: 5rem 5rem;
  }

  .page-option {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 50px;
    height: 20rem;
    justify-content: center;
    border: 1px solid #22303C;
    box-shadow: 0 1px 10px 0 #7594b7;
    border-radius: 50px;
    background-color: #22303C;
    background-image: url("../assets/bg/bggg.png");
    opacity: 0.7;
    margin: 1rem;
    writing-mode: vertical-rl;
    font-size: 1.4rem;
    color: #eeeef4;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    @media (max-width: 1024px) {
        font-size: 1.2rem;
        height: 15rem;
    }

    @media (max-width: 425px) {
      font-size: 1rem;
      height: 10rem;
    }

    .page-option-text,
    .page-option-image {
      pointer-events: none;
    }

    .page-option-text{
      letter-spacing: 3px;
    }

    .page-option-image {
      width: 100%;
      height: auto;
      max-height: 80%;
      max-width: 80%;
      object-fit: contain; // 保持圖片比例

      @media (max-width: 1024px) {
        max-height: 70%;
        max-width: 70%;
      }

      @media (max-width: 425px) {
        max-height: 50%;
        max-width: 50%;
      }
    }
  }

  .page-option:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    background-color: #192734;
    box-shadow: 0 1px 20px 8px #7594b7;
  }
}

</style>