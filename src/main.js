// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuex from 'vuex';
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

// custom components and pages
import Hello from './components/Hello.vue'
import Goodbye from './components/Goodbye.vue'
import CoursesPage from './components/CoursesPage.vue'
import ManageCoursePage from './components/ManageCoursePage.vue'
import Header from './components/Header';
import HomePage from './components/HomePage';

// setup store
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
});


// setup router
const routes = [
    { path: '/courses', component: CoursesPage },
    {
        path: '/course/:id',
        name: 'course',
        component: ManageCoursePage
    },
    { path: '/hello', component: Hello, name: 'hi' },
    { path: '/bye', component: Goodbye, name: 'bye' },
    { path: '/', component: HomePage, name: 'home' },
    { path: '*', redirect: '/hello' }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});


// link store & router
//sync(store, router);
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
