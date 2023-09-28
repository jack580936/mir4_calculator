import {createApp} from 'vue';
import {createPinia} from "pinia";
import App from './App.vue';
import router from './router';
import VueGtm from '@gtm-support/vue-gtm';

// import "bootstraps/dist/css/bootstraps.min.css";
import 'bootstrap';
import "./assets/all.scss";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VueGtm, {
  id: import.meta.env.VITE_GTM_CONTAINER_ID, // 你的 GTM 容器 ID
  defer: false, // false 表示立即加載 GTM
  compatibility: false, // 如果需要與舊版 GTM 相容，請設為 true
  enabled: true, // true 表示啟用 GTM
});
app.mount('#app');

