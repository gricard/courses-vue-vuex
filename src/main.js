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
import store from './store/store';

// link store & router
// creates this.$store.route
// this requires vuex-router-sync v3.0.x or greater
sync(store, router);

// register global components
import TextInput from './components/common/TextInput';
import SelectInput from './components/common/SelectInput';
Vue.component('TextInput', TextInput);
Vue.component('SelectInput', SelectInput);


// setup application and start it
let app = new Vue({
    store, router,

    components: {
        'siteheader': Header // TODO why does the key have to be lowercase here?
    }
});

// use promises to execute load actions before mounting the app
console.log('start loading data');
store.dispatch('LOAD_COURSES').then(nothing =>
    store.dispatch('LOAD_AUTHORS').then( nothing2 => {
        app.$mount('#app');
        console.log('app started');
    })
);
