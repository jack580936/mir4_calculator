import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import "bootstraps/dist/css/bootstraps.min.css";
import 'bootstrap';
import "./assets/all.scss";

createApp(App).use(router).mount('#app');
