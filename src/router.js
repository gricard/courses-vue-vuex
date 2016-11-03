import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// custom components and pages
import CoursesPage from './components/pages/CoursesPage.vue'
import ManageCoursePage from './components/pages/ManageCoursePage.vue'
import AuthorsPage from './components/pages/AuthorsPage.vue'
import ManageAuthorPage from './components/pages/ManageAuthorPage.vue'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';


// setup router
const routes = [
    { path: '/courses',         component: CoursesPage,             name: 'courselist' },
    { path: '/course',          component: ManageCoursePage,        name :'newcourse' },
    { path: '/course/:id',      component: ManageCoursePage,        name: 'editcourse' },
    { path: '/authors',         component: AuthorsPage,             name: 'authorlist' },
    { path: '/author',          component: ManageAuthorPage,        name :'newauthor' },
    { path: '/author/:id',      component: ManageAuthorPage,        name: 'editauthor' },
    { path: '/about',           component: AboutPage,               name: 'about' },
    { path: '/',                component: HomePage,                name: 'home' },
    { path: '*',                component: NotFoundPage,            name: 'notfound' }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

// global router intercept doesn't have access to Vue as 'this'
// need a different way to commit the state change then...
//router.beforeEach((to, from, next) => {
//    if (this.$store.state.dirty) {
//        // could do the form below, but better to be clear than clever
//        //next(window.confirm('You have unsaved changes. Are you sure you want to leave this page?'));
//        if (window.confirm('Yo! You have unsaved changes. Are you sure you want to leave this page?')) {
//            // reset dirty state
//            this.$store.commit('SET_DIRTY', true);
//            next();
//        } else {
//            next(false);
//        }
//    } else {
//        next();
//    }
//});

export default router;
