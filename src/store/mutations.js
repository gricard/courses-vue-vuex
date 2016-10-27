//export const STORAGE_KEY = 'courses-vuejs';

//// for testing
//if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//  window.localStorage.clear()
//}


export const mutations = {

    SET_COURSES (state, { courses }) {
        state.courses = courses;
    },

    SET_COURSE (state, { course }) {
        state.course = course;
    },

    SET_AUTHORS (state, { authors }) {
        state.authors = authors;
    },

    INCREMENT_AJAX_CALLS (state) {
        state.ajaxCallsInProgress++;
    },

    DECREMENT_AJAX_CALLS (state) {
        state.ajaxCallsInProgress--;
    },

    SET_LOADING_FRAME (state, { frame }) {
        state.loadingFrame = frame;
    },

    changeName (state, name) {
        console.log('set new name', name);
        state.course.name = name;
    },

    changeTitle (state, title) {
        console.log('set new title', title);
        state.course.title = title;
    },

    changeLength (state, length) {
        console.log('set new length', length);
        state.course.length = length;
    },

    changeCategory (state, newVal) {
        console.log('set new cateogry', newVal);
        state.course.category = newVal;
    },

    changeAuthor(state, newVal) {
        console.log('set new author', newVal);
        state.course.authorId = newVal;
    },

    loadCourse (state, course) {
//        console.log('loadCourse', course);
        state.course = course;
    }

}
