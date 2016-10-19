// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Hello from './components/Hello.vue'
import Goodbye from './components/Goodbye.vue'
//import CoursesPage from './components/CoursesPage.vue'
import Header from './components/Header';
import HomePage from './components/HomePage';

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource);
Vue.use(VueRouter);


const routes = [
    //{ path: '/courses', component: CoursesPage }
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

//Vue.config.silent = false;
//Vue.config.devtools = true;

let app = new Vue({
    router: router,
    components: {
        'site-header': Header
    }
}).$mount('#app');

console.log('app started');
