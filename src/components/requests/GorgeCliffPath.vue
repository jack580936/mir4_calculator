<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "GorgeCliffPath",
    data(){
      return {
        pageTitle: "峽谷懸崖路(Gorge Cliff Path)",
        imageData: [
            {
              title: "最後的天譴",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/GorgeCliffPath/最後的天譴.png'),
                  description: "【魔方阵8层】首长之屋3 击杀BOSS，0点开始每隔3小时定时刷新。",
                  author: "知乎 @骆驼玩游戏",
                },
              ],
            },
            {
              title: "淨化精",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/GorgeCliffPath/淨化精.png'),
                  description: "沙巴克城-【制造达人】李秀才处，制造净化之精华\n三种材料，分别需要采集秘境峰8层的英雄植物、英雄矿石、英雄真气。\n每种资源大概需要五六个，很耗时",
                  author: "知乎 @骆驼玩游戏",
                },
              ],
            },
            {
              title: "在冰中盛開的花",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/GorgeCliffPath/在冰中盛开的花.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "征服王的遺產",
              images: [
                {
                  title: "箱子對比",
                  url: this.getImageUrl('Requests/GorgeCliffPath/征服王的遺產箱子對比.png'),
                  description: "峡谷悬崖路、峡谷洞穴开任务箱子，箱子形状是迷你型普通箱子，三秒采集",
                  author: "知乎 @骆驼玩游戏",
                },
                {
                  title: "峡谷悬崖路",
                  url: this.getImageUrl('Requests/GorgeCliffPath/征服王的遺產峽谷懸崖路.png'),
                  description: "峡谷悬崖路箱子分布",
                  author: "知乎 @骆驼玩游戏",
                },
                {
                  title: "峡谷洞穴",
                  url: this.getImageUrl('Requests/GorgeCliffPath/征服王的遺產峡谷洞穴.png'),
                  description: "峡谷洞穴箱子分布",
                  author: "知乎 @骆驼玩游戏",
                },
              ],
            },
            {
              title: "怪异的猛兽",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/GorgeCliffPath/怪异的猛兽.png'),
                  description: "峡谷悬崖路 如下BOSS挂机点挂机，\n击杀怪物或BOSS会出现白毛猛兽BOSS，击杀完成任务",
                  author: "知乎 @骆驼玩游戏",
                },
              ],
            },
            {
              title: "門派的存活",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/GorgeCliffPath/門派的存活.png'),
                  description: "在NPC面前進行：動作 問候",
                  author: "",
                },
              ],
            },
            {
              title: "龍的傳承",
              images: [
                {
                  title: "龍的傳承1",
                  url: this.getImageUrl('Requests/GorgeCliffPath/龙的传承1.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "龍的傳承2",
                  url: this.getImageUrl('Requests/GorgeCliffPath/龙的传承2.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "龍的傳承3",
                  url: this.getImageUrl('Requests/GorgeCliffPath/龙的传承3.png'),
                  description: "【精英】沙巴克壁垒补给所 击杀如下知名BOSS，有概率掉落，拾取完成任务。",
                  author: "知乎 @骆驼玩游戏",
                },
                {
                  title: "龍的傳承4",
                  url: this.getImageUrl('Requests/GorgeCliffPath/龙的传承4.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "龍的傳承5",
                  url: this.getImageUrl('Requests/GorgeCliffPath/龙的传承5.png'),
                  description: "",
                  author: "",
                },
              ],
            },

            {
              title: "那日的幽靈",
              images: [
                {
                  title: "材料掉落以及製造地點",
                  url:  this.getImageUrl('Requests/GorgeCliffPath/那日的幽靈.png'),
                  description: "峡谷悬崖路 击杀任意怪有概率获得道具物品。\n到沙巴克城【制作达人】李秀才处制作悼词",
                  author: "知乎 @骆驼玩游戏",
                },
                {
                  title: "召喚位置",
                  url:  this.getImageUrl('Requests/GorgeCliffPath/那日的幽靈1.png'),
                  description: "沙巴克壁垒控制室南部召唤並擊殺",
                  author: "知乎 @骆驼玩游戏",
                },
              ],
            },
            {
              title: "被追蹤的人",
              images: [
                {
                  title: "被追蹤的人1",
                  url: this.getImageUrl('Requests/GorgeCliffPath/被追踪的人1.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "被追蹤的人2",
                  url: this.getImageUrl('Requests/GorgeCliffPath/被追蹤的人2.png'),
                  description: "【制造达人】李秀才制作赤矿石\n秘境峰8层 采集英雄、传说黑铁矿，收集原材料。",
                  author: "知乎 @骆驼玩游戏",
                },
                {
                  title: "被追蹤的人3",
                  url: this.getImageUrl('Requests/GorgeCliffPath/被追蹤的人3.png'),
                  description: "【制造达人】李秀才制作赤矿石\n秘境峰8层 采集英雄、传说黑铁矿，收集原材料。",
                  author: "知乎 @骆驼玩游戏",
                },
              ],
            },
          ],
      };

    },
    methods: {
        getImageUrl,
    }
}
</script>

<style scoped>

</style>