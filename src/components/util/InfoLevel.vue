<template>
  <div>
    <div class="form-group">
      <label for="levelInput">輸入等級:</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">等級</span>
        </div>
        <input type="number" id="levelInput" class="form-control" v-model.number="userLevel" min="1" max="999">
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>等級</th>
          <th>所需經驗值</th>
          <th>HP</th>
          <th>MP</th>
          <th>物理攻擊</th>
          <th>法術攻擊</th>
          <th>物理防禦</th>
          <th>法術防禦</th>
          <th>命中</th>
          <th>閃避</th>
          <th>BOSS攻擊傷害提升</th>
          <th>BOSS傷害減少</th>
          <th>PVP攻擊傷害提升</th>
          <th>遊戲內推薦戰力</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="userData">
          <td>{{ userData.level }}</td>
          <td>{{ userData.exp }}</td>
          <td>{{ userData.hp }}</td>
          <td>{{ userData.mp }}</td>
          <td>{{ userData.PHYSATK }}</td>
          <td>{{ userData.spellATK }}</td>
          <td>{{ userData.PHYSDEF }}</td>
          <td>{{ userData.spellDEF }}</td>
          <td>{{ userData.accuracy }}</td>
          <td>{{ userData.eva }}</td>
          <td>{{ userData.BOSSATKDMGBoost }}</td>
          <td>{{ userData.BOSSDMGReduction }}</td>
          <td>{{ userData.PVPATKDMGBoost }}</td>
          <td>{{ userData.RecommendedPS }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  name: 'InfoLevel',
  data() {
    return {
      lvls: [],
      userLevel: 120,
    };
  },
  async mounted() {
    const response = await fetch(new URL(`/src/assets/lvl.csv`, import.meta.url).href);
    const csv = await response.text();
    const { data } = Papa.parse(csv);

    this.lvls = data.slice(1).map((row) => ({
      level: Number(row[0]),
      exp: Number(row[1]),
      hp: Number(row[2]),
      mp: Number(row[3]),
      PHYSATK: Number(row[4]),
      spellATK: Number(row[5]),
      PHYSDEF: Number(row[6]),
      spellDEF: Number(row[7]),
      accuracy: Number(row[8]),
      eva: Number(row[9]),
      BOSSATKDMGBoost: Number(row[10]),
      BOSSDMGReduction: Number(row[11]),
      PVPATKDMGBoost: Number(row[12]),
      RecommendedPS: Number(row[13]),
    }));
  },
  computed: {
    userData() {
      return this.lvls.find((lvl) => lvl.level === this.userLevel);
    },
  },
};
</script>

<style scoped>
/* 加上 CSS 樣式，可以自行設計表格外觀 */
table {
  border-collapse: collapse;
  width: 100%;
}

thead th {
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
  text-align: left;
  padding: 8px;
}

tbody td {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.form-group {
  margin-bottom: 1rem;
  width: 10rem;
}
.input-group-text {
  background-color: #f2f2f2;
  color: #333;
  font-weight: bold;
}
.form-control {
  border-color: #ddd;
}
</style>
