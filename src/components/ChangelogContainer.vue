<template>
  <div class="changelog-container">
    <div v-for="(log, index) in logs" :key="index" class="changelog-card">
      <h2>{{ log.title }}</h2>
      <ul class="changelog-list" v-show="log.show">
        <li v-for="(change, index) in log.changes" :key="index" class="changelog-item">{{ change }}</li>
      </ul>
      <button @click="toggleShow(log)" class="changelog-toggle">{{ log.show ? 'Hide Changelog' : 'Show Changelog' }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logs: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleShow(log) {
      log.show = !log.show;
    }
  }
}
</script>

<style>
.changelog-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #15202B;
  height: calc(100vh - 42px);
  color: azure;
  overflow: auto;
}

.changelog-card {
  border: 1px solid #22303C;
  background-color: #192734;
  padding: 10px;
  margin: 10px;
  max-width: 600px;
  width: 100%;
}

.changelog-list {
  margin-top: 10px;
  list-style-type: none;
  padding-left: 0;
}

.changelog-item {
  margin-bottom: 5px;
}

.changelog-toggle {
  display: block;
  margin-top: 10px;
  background-color: #428bca;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
}

.changelog-toggle:hover {
  background-color: #3071a9;
}
</style>
