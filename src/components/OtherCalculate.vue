<script setup>
import {ref, shallowRef} from 'vue'
import speedCalculate from "@/components/util/SpeedCalculate.vue";
import infoLevel from "@/components/util/InfoLevel.vue";

const currentTab = shallowRef(speedCalculate)
const tabs = shallowRef({'採集挖礦速度計算': speedCalculate, '各等級資訊': infoLevel})
</script>

<template>
  <div id="mySidebar">
    <div class="has-sidebar">
      <div id="sidebar" class="sidebar break-point-sm has-bg-image">
        <div class="sidebar-layout">
          <div class="sidebar-content">
            <nav class="menu open-current-submenu">
              <ul>
                <li class="menu-header"><span> 功能 </span></li>
                <li v-for="(component,name,index) in tabs" :key="index" :class="['menu-item',{ active: currentTab === component }]"  @click="currentTab = component">
                  <span>{{ name  }}</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <component :is="currentTab"></component>
    </div>
  </div>

</template>

<script>
export default {
  name: "OtherCalculate",
}
</script>

<style scoped>
#sidebar {
  position: fixed;
  width: 250px;
  height: calc(100% - 41px);
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
.container-fluid {
  margin-left: 250px;
  width: calc(100% - 250px);
  height: calc(100% - 41px);
  overflow: auto;
  /* 其他樣式 */
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