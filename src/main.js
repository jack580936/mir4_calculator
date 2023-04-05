/*jshint esversion: 6 */
import { createApp } from 'vue';
import App from './App.vue';

// import "bootstraps/dist/css/bootstraps.min.css";
import 'bootstrap';
import "./assets/all.scss";
import './assets/main.css';

createApp(App).mount('#app');

window['addAds'] = function () {
    let childList = document.getElementsByClassName('gads');
    for (let i = 0; i< childList.length; i++) {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }

};