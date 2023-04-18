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
                <li class="menu-header"><span> 委託 </span></li>
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
import SabukCastle from "@/components/requests/SabukCastle.vue";
import {getImageUrl} from "../utils";
export default {
  name: "Requests",
  data() {
    return {
      currentTab: shallowRef(SabukCastle),
      tabs: shallowRef({
        '沙巴克城': SabukCastle,

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