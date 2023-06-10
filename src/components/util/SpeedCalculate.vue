<template>
  <div class="container-fluid">
  <div class="quick-seconds">
    <button v-for="i in 10" :key="i" @click="quickSetSeconds(i)" class="quick-seconds-button">{{ i }}</button>
  </div>
  <div class="speed-boosts">
    <div class="speed">
      <label class="speed-boosts-label">秒數:</label>
      <input type="number" id="seconds" v-model="seconds" oninput="validity.valid||(value='');" @input="calculateBoost"
             :max="10" :min="0" class="speed-boosts-input"/>s
    </div>
    <img :src="getImageUrl('exchange')" class="exchange-img" alt="...">
      <div class="boost">
        <label class="speed-boosts-label">速度加成:</label>
        <input type="number" id="speed" v-model="speed" oninput="validity.valid||(value='');" @input="calculateSeconds"
               class="speed-boosts-input" :min="0"/>%
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpeedCalculate",
  data() {
    return {
      speed: null,
      seconds: null,
    };
  },
  methods: {
    calculateSeconds() {
      this.seconds = (10 * (1 / (1 + this.speed / 100))).toFixed(2);
    },
    calculateBoost() {
      this.speed = Math.ceil((1 / (this.seconds / 10) - 1) * 100);
    },
    quickSetSeconds(value) {
      this.seconds = value;
      this.calculateBoost()
    },
    getImageUrl(url) {
      return new URL(`/src/assets/${url}.png`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>

.container-fluid {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* 其他樣式 */
}

.speed-boosts {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.speed-boosts-label {
  font-size: 18px;
  margin-bottom: 5px;
  color: #e6f2ff;
}

.speed-boosts-input {
  border: none;
  border-bottom: 2px solid #22303C;
  padding: 5px;
  margin: 10px;
  width: 100px;
  font-size: 18px;
  outline: none;
  color: #e6f2ff;
  background-color: #192734;
  text-align: center;
}

.quick-seconds {
  display: flex;
  flex-direction: row;
  margin: 8rem 0 1rem 0;
  justify-content: center
}

.quick-seconds-button {
  border: none;
  background-color: #22303C;
  color: #e6f2ff;
  padding: 5px 10px;
  margin-right: 5px;
  font-size: 14px;
  cursor: pointer;
}

.quick-seconds-button:hover {
  background-color: #ddd;
}

.exchange-img{
  margin: 1rem;
  height: 5rem;
  width: 5rem;
}
</style>
