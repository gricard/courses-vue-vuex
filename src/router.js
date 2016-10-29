import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// custom components and pages
import CoursesPage from './components/CoursesPage.vue'
import ManageCoursePage from './components/ManageCoursePage.vue'
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';


// setup router
const routes = [
    { path: '/courses', component: CoursesPage },
    { path: '/course', component: ManageCoursePage },
    {
        path: '/course/:id',
        name: 'course',
        component: ManageCoursePage
    },
    { path: '/authors', component: HomePage, name: 'home' }, // TODO fixme
    { path: '/about', component: AboutPage, name: 'about' },
    { path: '/', component: HomePage, name: 'home' },
    { path: '*', redirect: '/' }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
