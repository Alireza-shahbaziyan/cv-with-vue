import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VTypical from 'vue-typical';

import './assets/main.css';
import './assets/style.css';

const app = createApp(App).use(VTypical)

app.use(router);

app.mount('#app');
