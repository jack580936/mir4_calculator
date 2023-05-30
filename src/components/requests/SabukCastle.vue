<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer :PageTitle="pageTitle" :images="imageData" />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "SabukCastle",
    data(){
      return {
        pageTitle: "沙巴克城(Sabuk Castle)",
        imageData: [
            {
              title: "加強維修壁壘",
              images: [
                {
                  title: "加強維修壁壘2",
                  url: this.getImageUrl('Requests/SabukCastle/SabukCastle-AdditionalWallMaintenance2.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "黑武鏢局的好友",
              images: [
                {
                  title: "黑武鏢局的好友1",
                  url: this.getImageUrl('Requests/SabukCastle/黑武镖局的好友1.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "金光氣息",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/金光氣息.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "那個男人的隱情",
              images: [
                {
                  title: "",
                  url:  this.getImageUrl('Requests/SabukCastle/那个男人的隐情.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "你是巧手嗎",
              images: [
                {
                  title: "你是巧手嗎1",
                  url: this.getImageUrl('Requests/SabukCastle/你是巧手嗎1.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "你是巧手嗎2",
                  url: this.getImageUrl('Requests/SabukCastle/你是巧手嗎2.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "沙巴克皇朝實錄",
              images: [
                {
                  title: "沙巴克皇朝實錄1",
                  url: this.getImageUrl('Requests/SabukCastle/沙巴克皇室实录1.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "不負責任的管理員",
              images: [
                {
                  title: "不負責任的管理員1",
                  url: this.getImageUrl('Requests/SabukCastle/不负责任的管理人1.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "劍主團的測試",
              images: [
                {
                  title: "劍主團的測試1",
                  url: this.getImageUrl('Requests/SabukCastle/劍主團的測試1.png'),
                  description: "九龍迷宫1層最後一個BOSS（打三次）",
                  author: "",
                },
              ],
            },
            {
              title: "人生榜樣",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/人生榜樣.png'),
                  description: "九龍迷宮4的世界BOSS",
                  author: "",
                },
              ],
            },
            {
              title: "絕妙的交易",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/絕妙的交易.png'),
                  description: "在沙巴克壁壘3個地圖開箱子即可以拿到材料，然後找李手藝制造",
                  author: "",
                },
              ],
            },
            {
              title: "傳說一劍",
              images: [
                {
                  title: "傳說一劍1",
                  url: this.getImageUrl('Requests/SabukCastle/傳說一劍1.png'),
                  description: "第一个BOSS，擊殺後有機率刷任務物品，在BOSS脚下",
                  author: "",
                },
              ],
            },
            {
              title: "我是最棒的達人",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/我是最棒的达人.png'),
                  description: "劍池地圖挖礦(金紅礦不會出)，然後找余基植製造",
                  author: "",
                },
              ],
            },
            {
              title: "那個女人的隱情",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/那個女人的隱情.png'),
                  description: "劍池地圖挖草(金红草不會出)，然後找李手藝制造",
                  author: "",
                },
              ],
            },
            {
              title: "投資條件",
              images: [
                {
                  title: "投資條件1",
                  url: this.getImageUrl('Requests/SabukCastle/投資條件1.png'),
                  description: "咒魔神殿開箱子，15個高純度銀錠，然後在沙巴克城找李手藝制造錢袋",
                  author: "",
                },
                {
                  title: "投資條件2",
                  url: this.getImageUrl('Requests/SabukCastle/投資條件2.png'),
                  description: "菁英咒魔神殿所有小BOSS會出(一共要打50個，有35%的製造成功率)",
                  author: "",
                },
              ],
            },
            {
              title: "回收隱藏的武器箱",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/回收隐藏的武器箱.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "找尋義人",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/寻找义人.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "蒙冤訴苦",
              images: [
                {
                  title: "蒙冤訴苦前置",
                  url: this.getImageUrl('Requests/SabukCastle/蒙冤訴苦前置.png'),
                  description: "下面那個紅色框框",
                  author: "",
                },
                {
                  title: "蒙冤訴苦1-1",
                  url: this.getImageUrl('Requests/SabukCastle/蒙冤訴苦1-1.png'),
                  description: "",
                  author: "",
                },
                {
                  title: "蒙冤訴苦1-2",
                  url: this.getImageUrl('Requests/SabukCastle/蒙冤訴苦1-2.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "為她報仇",
              images: [
                {
                  title: "為她報仇前置",
                  url: this.getImageUrl('Requests/SabukCastle/為她報仇前置.png'),
                  description: "上面那個紅色框框",
                  author: "",
                },
                {
                  title: "為她報仇",
                  url: this.getImageUrl('Requests/SabukCastle/為她報仇.png'),
                  description: "",
                  author: "",
                },
              ],
            },
            {
              title: "為了聲張虛勢的裝備",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/為了聲張虛勢的裝備.png'),
                  description: "要打菁英九龍冰宮的小BOSS",
                  author: "",
                },
              ],
            },
            {
              title: "荒涼的世界",
              images: [
                {
                  title: "",
                  url: this.getImageUrl('Requests/SabukCastle/荒涼的世界.png'),
                  description: "九龍冰原採集红草與地圖小BOSS",
                  author: "",
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