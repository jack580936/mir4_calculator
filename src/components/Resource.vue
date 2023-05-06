<script setup>

</script>

<template>
  <div id="mySidebar">
    <div class="has-sidebar">
      <div id="sidebar" class="sidebar break-point-sm has-bg-image">
        <div class="sidebar-layout">
          <div class="sidebar-content">
            <nav class="menu open-current-submenu">
              <ul>
                <li class="menu-header"><span> 地圖 </span></li>
                <li v-for="(component,name,index) in tabs" :key="index"
                    :class="['menu-item',{ active: currentTab === component }]" @click="currentTab = component">
                  <span>{{ name }}</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="sidebar-footer">
          <p>圖片太小，點一下會放大唷 (,,・ω・,,)</p>
        </div>
      </div>
    </div>
    <component :is="currentTab"></component>
  </div>

</template>

<script>
import {ref, shallowRef} from 'vue'
import {getImageUrl} from "@/utils";
import SecertPeak from "@/components/map_resource/SeceryPeak.vue";
import MagicSquare from "@/components/map_resource/MagicSquare.vue";
import PhantasiaAreaChest from "@/components/map_resource/PhantasiaAreaChest.vue";
import SabukAreaChest from "@/components/map_resource/SabukAreaChest.vue";
import PhantasiaAreaResource from "@/components/map_resource/PhantasiaAreaResource.vue";
import SabukAreaResource from "@/components/map_resource/SabukAreaResource.vue";
import SnowFieldAreaResource from "@/components/map_resource/SnowFieldAreaResource.vue";
import SpiritualCenterArea from "@/components/map_resource/SpiritualCenterArea.vue";

export default {
  name: "Resource",
  data() {
    return {
      currentTab: shallowRef(SecertPeak),
      tabs: shallowRef({
        '秘庭峰': SecertPeak,
        '魔方陣': MagicSquare,
        '雪原地區(採集)': SnowFieldAreaResource,
        '沙巴克地區(採集)': SabukAreaResource,
        '沙巴克地區(寶箱)': SabukAreaChest,
        '夢村地區(採集)': PhantasiaAreaResource,
        '夢村地區(寶箱)': PhantasiaAreaChest,
        '道觀地區': SpiritualCenterArea,

      })
    }
  },
  methods: {
    getImageUrl,
  }
}
</script>

<style scoped>

.menu-header {
  font-weight: 600;
  padding: 10px 15px;
  font-size: 0.8em;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  color: rgb(91, 102, 135);
  list-style-type: none;
}


.menu-item {
  padding: 10px 35px;
  font-size: 1rem;
  letter-spacing: 2px;
  transition: opacity 0.3s;
  color: rgb(123, 130, 156);
  list-style-type: none;
}

ul {
  padding: 0;
}

.active {
  background-color: #ffcc00; /* your desired highlight color */
  color: #ffffff; /* your desired text color */
}

</style>