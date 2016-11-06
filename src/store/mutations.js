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

    DECREMENT_AJAX_CALLS (state, params) {
        state.ajaxCallsInProgress--;

        if (params && params.error) state.ajaxError = params.error;
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

    loadCourse (state, course) {
        state.course = course;
    },

    loadAuthor(state, author) {
        state.author = author;
    }

};
