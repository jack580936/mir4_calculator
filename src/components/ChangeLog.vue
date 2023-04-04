<template>
  <div>
    <ChangelogContainer :logs="logs" />
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
          title: 'Version 1.0',
          changes: [
            '現在只有傳說裝備跟英雄裝備能用',
            '內功還沒做好',
            '廣告也還沒做好',
            '希望你們做裝備順利囉:D',
            '如果有什麼問題的話...別問我',
            '我也不知道怎麼用',
            '我只是一個後端工程師',
            '之後可能會嘗試放上一些地圖阿什麼的',
            '但不會是現在',
          ],
          show: false
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
          ],
          show: false
        },
        {
          title: 'Version 1.2',
          changes: [
            '現在又多了一個查詢等級資料的功能',
            '左上角有等級可以填',
            '對了，資料是從',
            'https://www.mir4.wiki/wiki/Level',
            '抓下來的',
          ],
          show: true
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
      ]
    }
  }
}
</script>
