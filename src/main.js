//import Vue from 'vue'
//import App from './App'
//
///* eslint-disable no-new */
//new Vue({
//  el: '#app',
//  render: h => h(App)
//})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


console.log('server stuff here');

import Hello from './components/Hello.vue'
//import CoursesPage from './components/CoursesPage.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource);
Vue.use(VueRouter);


const routes = [
  //{ path: '/courses', component: CoursesPage }
   { path: '/hello', component: Hello },
    { path: '*', redirect: '/hello' }
];

console.log('routes', routes);

const router = new VueRouter({
  routes
//  routes: routes,
//  hashbang: false,
//  history: true,
//  linkActiveClass: 'active-class'
});

console.log('router', router);

//Vue.config.silent = false;
//Vue.config.devtools = true;

let app = new Vue({
//  router: router,
//  el: '#app'
//});
  router
}).$mount('#app');




console.log('app', app);
