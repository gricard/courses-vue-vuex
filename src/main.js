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

// webpack can import css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

// setup application and start it
let app = new Vue({
    store,

    router,

    components: {
        'siteheader': Header // TODO why does the key have to be lowercase here?
    }
});

// use promises to start load actions before mounting the app
import {loadCourses, loadAuthors } from './store/actionCreators';
import toastr from 'toastr';
console.log('start loading data');
store.dispatch(loadCourses()).then(nothing => {
    console.log('courses loaded');
    store.dispatch(loadAuthors()).then(nothing2 => {
        app.$mount('#app');
        console.log('app started, all data loaded');
    }).catch(error => {
        app.$mount('#app');
        console.log('app started, author data failed to load');
        toastr.error(error);
    });
}).catch(error => {
    app.$mount('#app');
    console.log('app started, courses data failed to load');
    toastr.error(error);
});


//// nope, it has to be loaded before the app is rendered or we get errors
// maybe we need an ENSURE_COURSES action and use a loadingCourses state item to track it?

// load the app
// don't rely on the load calls completing in order to start because they could fail
//app.$mount('#app');
//console.log('app started');
