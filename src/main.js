import App from './App.vue';
import { createApp } from 'vue';
import { routes } from './routes.js';
import { createRouter, createWebHistory } from 'vue-router';
import './tailwind.css';
import './firebase/init';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BaseButton from '@/components/BaseButton.vue';
import { createPinia } from 'pinia'

const app = createApp(App);

const router = createRouter({
	history: createWebHistory(),
	routes,
});
app.component('BaseButton', BaseButton);
app.use(router);
app.use(createPinia())
app.use(VueAxios, axios);
app.mount('#app');
