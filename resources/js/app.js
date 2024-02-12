import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Landingpage from './components/landingpage/Landingpage.vue';
import Login from './components/login/Login.vue';
import Signup from './components/signup/Signup.vue';
import Aboutus from './components/aboutus/Aboutus.vue'


const app = createApp({
    components: {
        Landingpage,
        Login,
        Signup,
        Aboutus,
    }
});

app.mount("#app")
