import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// custom components and pages
import Hello from './components/Hello.vue'
import Goodbye from './components/Goodbye.vue'
import CoursesPage from './components/CoursesPage.vue'
import ManageCoursePage from './components/ManageCoursePage.vue'
import HomePage from './components/HomePage';


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

export default router;
