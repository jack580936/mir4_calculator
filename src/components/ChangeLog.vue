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
