<script setup>
import {ref} from 'vue'

const isExpanded = ref(null);

const ToggleMenu = () => {
  isExpanded.value = !isExpanded.value;
}
</script>

<template>

<div class="side-bar">
  <input type="checkbox" name="" id="sideMenu-active">
  <aside class="sideMenu">
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
    <label for="sideMenu-active">
      <img src="@/assets/icon/chevron_right.png" alt="sidebar-arrow" class="sidebar-arrow">
    </label>
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
<style lang="scss" scoped>

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

a,label {
	cursor: pointer;
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

#sideMenu-active:checked + .sideMenu {
  transform: translateX(0);
  label .sidebar-arrow {
		transform: scaleX(-1); // 使 label 裡的圖案橫向反轉
	}
}

#sideMenu-active {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.sideMenu {
  position: absolute;
  z-index: 1;
  background: #22303c;
  width: 300px;
  height: 100vh;
  border-right: 3px solid #d1d1d1;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 0 5px rgba(23, 23, 54, 0.6);
  transform: translateX(-100%);
  transition: 0.5s;
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