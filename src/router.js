import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// custom components and pages
import CoursesPage from './components/pages/CoursesPage.vue'
import ManageCoursePage from './components/pages/ManageCoursePage.vue'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';


// setup router
const routes = [
    { path: '/courses',         component: CoursesPage,             name: 'courselist' },
    { path: '/course',          component: ManageCoursePage,        name :'newcourse' },
    { path: '/course/:id',      component: ManageCoursePage,        name: 'editcourse' },
    { path: '/authors',         component: HomePage,                name: 'authorlist' }, // TODO fixme
    { path: '/about',           component: AboutPage,               name: 'about' },
    { path: '/',                component: HomePage,                name: 'home' },
    { path: '*',                redirect: '/' }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;
