import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Example from './components/Example.vue';
import Login from './components/login/Login.vue';


const app = createApp({
    components: {
        Example,
        Login,
    }
});

app.mount("#app")
