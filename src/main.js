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
// creates this.$store.route
// this requires vuex-router-sync v3.0.x or greater
sync(store, router);

// register global components
// import TextInput...
import TextInput from './components/common/TextInput';
import SelectInput from './components/common/SelectInput';
Vue.component('TextInput', TextInput);
Vue.component('SelectInput', SelectInput);


// setup application and start it
let app = new Vue({
    store,
    router,

    created() {
        console.log('app created');
        this.$store.dispatch('LOAD_COURSES');
//        this.$store.dispatch('LOAD_AUTHORS');
    },

    components: {
        'siteheader': Header // TODO why does the key have to be lowercase here?
    }
}).$mount('#app');

console.log('app started');
