<template>
  <transition name="fade">
  <div v-if="showModal" class="popup-dialog">
    <div class="popup-content">
      <div class="close-x" @click="closeModal">X</div>
      <div class="popup-body">
        <div class="popup-title">
          <p>我們搬家了！</p>
        </div>
        <div class="popup-message">
          <p>我們已經遷移至新網址:
            <a href="https://mir4calc.com">https://mir4calc.com</a><br/>
            請前往新網址並記得更新書籤。</p>
          <div style="align-self: flex-start">※此網站後續將不再更新。</div>
        </div>
      </div>
      <div class="popup-footer">
        <div class="go-new-website" @click="goNewWebSite">前往新網站</div>
        <div class="close-button" @click="closeModal">知道了</div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script setup>

import {ref} from 'vue';

let showModal = ref(true);
const closeModal = () => {
  showModal.value = false;
}

const goNewWebSite = () => {
  window.location.href = "https://mir4calc.com";
}
</script>

<style lang="scss">
.popup-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: rgba(36, 60, 81, 0.9);
  width: 400px;

  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.popup-header {
  display: flex;
  justify-content: flex-end;
}

.close-x {
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  padding: .5em;
}

.popup-body {
  padding: 20px;

  .popup-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    color: #58a2d3;
  }

  .popup-message{
    text-align: center;
    font-weight: bold;
    transition: all .5s;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

.popup-footer {
  text-align: center;
  padding: 10px;
  display: flex;
  justify-content: center;
}
.go-new-website {
  background-color: #58a2d3;
  color: #eeeef4;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
  align-self: center;
  margin-right: 10px;
  width: 8rem;
}
.close-button {
  background-color: #58a2d3;
  color: #eeeef4;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  padding: 10px 20px;
  align-self: center;
  width: 8rem;

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>