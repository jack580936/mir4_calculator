<template>
  <div>
    <ChangelogContainer :cards="logs" />
  </div>
</template>

<script>
import ChangelogContainer from './ChangelogContainer.vue'

export default {
  components: {
    ChangelogContainer
  },
  data() {
    return {
      logs: [
        {
          title: 'Version 1.7',
          changes: [
            '1. 龍神器',
              '※ 龍神器材料數量如果比需求還多 設定到需求數量就好唷不然妳可能會算錯:D',
              '例如: 還需要 100個傳說伏魔神珠，那妳有了100個以上的傳說伏魔神珠，妳填進計算機的時候請填100個!',
              '2. 委託、地圖資源',
              ' 裡面的圖片顯示多了一點細節，同時也更新了一些委託',
              '3. 又🔪了幾隻小蟲蟲',
            '20230531'
          ]
        },
        {
          title: 'Version 1.6',
          changes: [
            '1. 體質',
            '2. 更新日誌',
            '3. 網頁設定了 vue-router 現在每個頁簽都有自己的網址囉',
            '4. 🔪了幾隻小蟲蟲',
            '20230514'

          ]
        },
        {
          title: 'Version 1.5',
          changes: [
            '我換了整體的配色',
            '希望有比較好看',
            '加了一些地圖的採集採礦寶箱地點，像是秘庭峰、雪原地區、沙巴克地區、夢村地區、道觀地區 秘谷',
            '也添加了 夢村沙漠、沙巴克城、峽谷懸崖路、九龍冰原的一些委託',
            '資料來源:',
            '委託: 阿古 方丈 梓萱 白雲 绯雨 条子锅 斬風、 Baibai 步非烟 還有一大區的大佬們 可能會沒列到，再請告訴我 謝謝',
            '地圖資源: https://mirkit.mir4collection.com/ ',
            '20230506'

          ]
        },
        {
          title: 'Version 1.4',
          changes: [
            '我確診好了讚啦!',
            '但我好像有長新冠QQ',
            '說說更新吧',
            '現在可以查詢委託的資料了，但現在只有一個阿古寫的',
            '現在也可以看到一些地圖的採集採礦寶箱地點囉',
            '但一樣只有一點點',
            '將就用吧XD',
            '20230416'

          ]
        },
        {
          title: 'Version 1.3',
          changes: [
            '多了奇緣但只有最後兩個',
            '奇緣攻略作者是『愤怒滴小白』',
            '如果有不妥請告訴我，我會把攻略拿掉',
            '另外體質內功的部分還在找資料',
            '現在只有圖而已XDD',
            '對了，我現在確診請小心使用',
            '可能咻一下妳就中獎了呢:D'
          ]
        },
        {
          title: 'Version 1.2',
          changes: [
            '現在又多了一個查詢等級資料的功能',
            '左上角有等級可以填',
            '對了，資料是從',
            'https://www.mir4.wiki/wiki/Level',
            '抓下來的',
          ]
        },
        {
          title: 'Version 1.1',
          changes: [
            '現在多了一個算挖礦呀採集呀的秒數',
            '上面有快捷鍵可以按妳想要的秒數',
            '下面兩個格子都能填',
            '應該就這一些吧',
            '體質內功的資料找不到哈哈哈哈',
            '應該會換個方式寫',
            '那就這樣囉 88',
          ]
        },

        {
          title: 'Version 1.0',
          changes: [
            '現在只有傳說裝備跟英雄裝備能用',
            '內功還沒做好',
            '希望你們做裝備順利囉:D',
            '如果有什麼問題的話...別問我',
            '我也不知道怎麼用',
            '我只是一個後端工程師',
            '之後可能會嘗試放上一些地圖阿什麼的',
            '但不會是現在',
          ]
        },

        // {
        //   title: 'Version 1.1',
        //   changes: [
        //     'Added new feature Z',
        //     'Improved UI design',
        //     'Fixed security vulnerability'
        //   ],
        //   show: false
        // },
        // ...
      ],
    }
  }
}
</script>

<style lang="scss" scoped>


</style>