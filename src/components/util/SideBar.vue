<script setup>
import {ref} from 'vue'

const isExpanded = ref(null);

const ToggleMenu = () => {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>
  <aside id="mySidebar">
    <div id="sidebar" class="sidebar">
      <div class="sidebar-layout">
        <div class="sidebar-content">
          <nav class="menu open-current-submenu">
            <ul>
              <li class="menu-header">
                <span @click="ToggleMenu">{{sideBarTitle}}</span>
              </li>
              <template v-for="tab in tabs" :key="tab.name">
                <router-link :to="{name: tab.name}">
                  <li :class="['menu-item',{ active: currentTab === tab.name }]" @click="currentTab = tab.name">
                    <span>{{ tab.name}}</span>
                  </li>
                </router-link>
              </template>
            </ul>
          </nav>
        </div>
      </div>
      <div class="sidebar-footer">
        <p>圖片太小，點一下會放大唷 (,,・ω・,,)</p>
      </div>
    </div>
  </aside>
</template>

<script>
import {getImageUrl} from "@/utils";
export default {
  name: "SideBar",
  data() {

  },
  props: {
    sideBarTitle: {
      type: String,
      required: true,
    },
    tabs: {
      type: Array,
      required: true,
    },
    currentTab: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>

#sidebar {
  display: flex;
  flex-direction: column;
  width: 250px;
  min-height: calc(100% - 41px);
  height: calc(100% - 41px);
  background-color: #22303C;
  z-index: 50;
  transition: 0.2s ease-out;

  @media (max-width: 768px) {
    width: 100%;
    min-height: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    left: -100%;
    top: 0;
    overflow-x: hidden;
    transition: 0.5s;
  }
}

.sidebar-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 0.5rem;
  margin: 0;
  color: #e6f2ff;
  font-size: smaller;
  text-align: -webkit-center;
}

label {
  width: 20px;
  height: 80px;
  background-color: #d1d1d1;
  color: #686666;
  position: absolute;
  right: -20px;
  top: 0;
  bottom: 0;
  margin: auto;
  line-height: 80px;
  text-align: center;
  border-radius: 0 5px 5px 0;
  box-shadow: 5px 0 5px rgba(23, 23, 54, 0.6);
}


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