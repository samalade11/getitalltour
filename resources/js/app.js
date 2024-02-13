import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Landingpage from './components/landingpage/Landingpage.vue';
import Login from './components/login/Login.vue';
import Signup from './components/signup/Signup.vue';
import Aboutus from './components/aboutus/Aboutus.vue';
import Contactus from './components/contactus/Contactus.vue'


const app = createApp({
    components: {
        Landingpage,
        Login,
        Signup,
        Aboutus,
        Contactus,
    }
});

app.mount("#app")
