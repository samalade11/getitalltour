import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Landingpage from './components/landingpage/Landingpage.vue';
import Login from './components/login/Login.vue';
import Signup from './components/signup/Signup.vue';
import Aboutus from './components/aboutus/Aboutus.vue';
import Contactus from './components/contactus/Contactus.vue';
import Tour from './components/tour/Tour.vue';
import Vendor from './components/vendor/Vendor.vue';
import Vendorselected from './components/vendorselect/Vendorselected.vue'


const app = createApp({
    components: {
        Landingpage,
        Login,
        Signup,
        Aboutus,
        Contactus,
        Tour,
        Vendor,
        Vendorselected,
    }
});

app.mount("#app")
