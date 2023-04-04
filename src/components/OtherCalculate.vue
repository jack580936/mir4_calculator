<script setup>
import {ref, shallowRef} from 'vue'
import speedCalculate from "@/components/SpeedCalculate.vue";

const currentTab = shallowRef(speedCalculate)
const tabs = shallowRef({'採集挖礦速度計算': speedCalculate,})
</script>

<template>
    <div id="mySidebar">
      <ul class="nav nav-tabs navbar-light bg-light">
          <ul class="nav">
            <li v-for="(component,name,index) in tabs" :key="index" class="nav-item">
              <span @click="currentTab = component" :class="['nav-link' , { active: currentTab === component }]">{{
                  name
                }}</span>
            </li>
          </ul>
      </ul>
      <component :is="currentTab"></component>
    </div>
</template>

<script>
export default {
  name: "OtherCalculate",
  methods: {
    w3_open() {
      document.getElementById("mySidebar").style.display = "block";
    },

    w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }
  }
}
</script>
