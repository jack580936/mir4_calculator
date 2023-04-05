<script setup>
import PdfViewer from "@/components/util/PdfViewer.vue";


</script>

<template>
  <div id="mySidebar">
    <div class="has-sidebar">
      <div id="sidebar" class="sidebar break-point-sm has-bg-image">
        <div class="sidebar-layout">
          <div class="sidebar-content">
            <nav class="menu open-current-submenu">
              <ul>
                <li class="menu-header"><span> 奇緣 </span></li>
                <li v-for="(pdfSrc,name,index) in tabs" :key="index"
                    :class="['menu-item',{ active: pdfUrl === pdfSrc }]" @click="changePdfUrl(pdfSrc)">
                  <span>{{ name }}</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <PdfViewer :pdfUrl="pdfUrl"/>
  </div>
</template>
<script>
export default {
  name: "Mystery",

  data() {
    return {
      pdfUrl: "伯牙絕弦.pdf",
      tabs: {
        "伯牙絕弦": "伯牙絕弦.pdf",
        "浩然之氣": "浩然之氣.pdf",
      }
    }
  },
  methods:{
    changePdfUrl(url){
      this.pdfUrl = url;
    }
  }
}
</script>

<style scoped>

#sidebar {
  position: fixed;
  width: 250px;
  height: calc(100% - 42px);
  background-color: #0c1e35;
  /* 其他樣式 */
}
.menu-header{
  font-weight: 600;
  padding: 10px 15px;
  font-size: 0.8em;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  color: rgb(91, 102, 135);
  list-style-type: none;
}

.menu-item{
  padding: 10px 35px;
  font-size: 1rem;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  color: rgb(123, 130, 156);
  list-style-type: none;
}

ul{
  padding: 0;
}

.active {
  background-color: #ffcc00; /* your desired highlight color */
  color: #ffffff; /* your desired text color */
}

</style>