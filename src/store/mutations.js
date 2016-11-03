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

    SET_AUTHOR (state, { author }) {
        state.author = author;
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

    SET_SAVING (state, saving) {
        state.saving = saving;
    },

    SET_DELETING (state, deleting) {
        state.deleting = deleting;
    },

    SET_ERRORS (state, errors) {
        state.errors = errors;
    },

    SET_DIRTY (state, dirty) {
        state.dirty = dirty;
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
    },

    loadAuthor(state, author) {
        state.author = author;
    },

    changeFirstName(state, newVal) {
        console.log('set new firstName', newVal);
        state.author.firstName = newVal;
    },

    changeLastName(state, newVal) {
        console.log('set new lastName', newVal);
        state.author.lastName = newVal;
    }

};
