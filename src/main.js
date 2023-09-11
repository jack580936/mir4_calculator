import {createApp} from 'vue';
import {createPinia} from "pinia";
import App from './App.vue';
import router from './router';
import VueGtag from "vue-gtag";

// import "bootstraps/dist/css/bootstraps.min.css";
import 'bootstrap';
import "./assets/all.scss";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(VueGtag, {config: {id: import.meta.env.VITE_GA_TRACKING_ID}}, router);
app.mount('#app');

