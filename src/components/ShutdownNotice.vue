<template>
  <div v-if="show" class="notice-overlay">
    <div class="notice-content">
      <h3>重要通知 (Important Notice)</h3>
      <p>本站網域將於 9 月 28 日關閉，屆時會更換新網域或關閉，造成不便敬請見諒。</p>
      <p>The domain of this site will be closed at the end of September. A new domain will be used at that time. We apologize for the inconvenience.</p>
      <button @click="dismiss">知道了 (I Understand)</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const show = ref(false);

onMounted(() => {
  if (!localStorage.getItem('hasSeenShutdownNotice')) {
    show.value = true;
  }
});

const dismiss = () => {
  localStorage.setItem('hasSeenShutdownNotice', 'true');
  show.value = false;
};
</script>

<style scoped>
.notice-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.notice-content {
  background-color: #2c2c2c;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  color: white;
  border: 1px solid #ffc107;
}

.notice-content h3 {
  color: #ffc107;
  margin-top: 0;
}

.notice-content p {
  margin-bottom: 1rem;
}

.notice-content button {
  background-color: #ffc107;
  color: #2c2c2c;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>