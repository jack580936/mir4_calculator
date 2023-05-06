<script setup>

import MapViewer from "@/components/util/MapViewer.vue";

</script>

<template>
    <MapViewer
            PageTitle="沙巴克城(Sabuk Castle)"
            :images="[
                {title: '加強維修壁壘2', url: `${getImageUrl('Requests/SabukCastle/SabukCastle-AdditionalWallMaintenance2.png')}`},
                {title: '黑武鏢局的好友1', description: '' , url: `${getImageUrl('Requests/SabukCastle/黑武镖局的好友1.png')}`},
                {title: '金光氣息', description: '' , url: `${getImageUrl('Requests/SabukCastle/金光氣息.png')}`},
                {title: '那個男人的隱情', description: '' , url: `${getImageUrl('Requests/SabukCastle/那个男人的隐情.png')}`},
                {title: '你是巧手嗎1', description: '' , url: `${getImageUrl('Requests/SabukCastle/你是巧手嗎1.png')}`},
                {title: '你是巧手嗎2', description: '' , url: `${getImageUrl('Requests/SabukCastle/你是巧手嗎2.png')}`},
                {title: '沙巴克皇朝實錄1', description: '' , url: `${getImageUrl('Requests/SabukCastle/沙巴克皇室实录1.png')}`},
                {title: '不負責任的管理員1', description: '' , url: `${getImageUrl('Requests/SabukCastle/不负责任的管理人1.png')}`},
                {title: '劍主團的測試1', description: '九龍迷宫1層最後一個BOSS（打三次）' , url: `${getImageUrl('Requests/SabukCastle/劍主團的測試1.png')}`},
                {title: '人生榜樣', description: '九龍迷宮4的世界BOSS' , url: `${getImageUrl('Requests/SabukCastle/人生榜樣.png')}`},
                {title: '絕妙的交易', description: '在沙巴克壁壘3個地圖開箱子即可以拿到材料，然後找李手藝制造' , url: `${getImageUrl('Requests/SabukCastle/絕妙的交易.png')}`},
                {title: '傳說一劍1', description: '第一个BOSS，擊殺後有機率刷任務物品，在BOSS脚下' , url: `${getImageUrl('Requests/SabukCastle/傳說一劍1.png')}`},
                {title: '我是最棒的達人', description: '劍池地圖挖礦(金紅礦不會出)，然後找余基植製造' , url: `${getImageUrl('Requests/SabukCastle/我是最棒的达人.png')}`},
                {title: '那個女人的隱情', description: '劍池地圖挖草(金红草不會出)，然後找李手藝制造' , url: `${getImageUrl('Requests/SabukCastle/那個女人的隱情.png')}`},
                {title: '投資條件1', description: '咒魔神殿開箱子，15個高純度銀錠，然後在沙巴克城找李手藝制造錢袋' , url: `${getImageUrl('Requests/SabukCastle/投資條件1.png')}`},
                {title: '投資條件2', description: '菁英咒魔神殿所有小BOSS會出(一共要打50個，有35%的製造成功率)' , url: `${getImageUrl('Requests/SabukCastle/投資條件2.png')}`},
                {title: '回收隱藏的武器箱', description: '' , url: `${getImageUrl('Requests/SabukCastle/回收隐藏的武器箱.png')}`},
                {title: '找尋義人', description: '' , url: `${getImageUrl('Requests/SabukCastle/寻找义人.png')}`},
                {title: '蒙冤訴苦前置', description: '下面那個紅色框框' , url: `${getImageUrl('Requests/SabukCastle/蒙冤訴苦前置.png')}`},
                {title: '蒙冤訴苦1-1', description: '' , url: `${getImageUrl('Requests/SabukCastle/蒙冤訴苦1-1.png')}`},
                {title: '蒙冤訴苦1-2', description: '' , url: `${getImageUrl('Requests/SabukCastle/蒙冤訴苦1-2.png')}`},
                {title: '為她報仇前置', description: '上面那個紅色框框' , url: `${getImageUrl('Requests/SabukCastle/為她報仇前置.png')}`},
                {title: '為她報仇', description: '' , url: `${getImageUrl('Requests/SabukCastle/為她報仇.png')}`},
                {title: '為了聲張虛勢的裝備', description: '要打菁英九龍冰宮的小BOSS' , url: `${getImageUrl('Requests/SabukCastle/為了聲張虛勢的裝備.png')}`},
                {title: '荒涼的世界', description: '九龍冰原採集红草與地圖小BOSS' , url: `${getImageUrl('Requests/SabukCastle/荒涼的世界.png')}`},
            ]"
    />
</template>

<script>
import {getImageUrl} from "@/utils";

export default {
    name: "SabukCastle",
    methods: {
        getImageUrl,
    }
}
</script>

<style scoped>

</style>