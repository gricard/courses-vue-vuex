// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

Vue.use(VueResource);

// custom components used by index page
import Header from './components/Header';

import router from './router';
import store from './vuex/store';

// link store & router
// this requires vuex-router-sync v3.0.x or greater
sync(store, router);
// TODO not working yet

//Vue.config.silent = false;
//Vue.config.devtools = true;

// setup application and start it
let app = new Vue({
    router: router,
    components: {
        'site-header': Header
    }
}).$mount('#app');

console.log('app started');
