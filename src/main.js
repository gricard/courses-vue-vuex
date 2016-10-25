// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//Vue.config.silent = false;
Vue.config.devtools = true;

import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

Vue.use(VueResource);

// custom components used by index page
import Header from './components/common/Header';

import router from './router';
import store from './vuex/store';

// link store & router
// this requires vuex-router-sync v3.0.x or greater
sync(store, router);

// register global components
// import TextInput...
import TextInput from './components/common/TextInput';
Vue.component('TextInput', TextInput);


// setup application and start it
let app = new Vue({
    store,
    router,
    components: {
        'site-header': Header
    }
}).$mount('#app');

console.log('app started');
