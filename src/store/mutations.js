
const SET_COURSES = (state, { courses }) => {
    state.courses = courses;
};

const SET_COURSE = (state, { course }) => {
    state.course = course;
};

const SET_AUTHORS = (state, { authors }) => {
    state.authors = authors;
};

const SET_AUTHOR = (state, { author }) => {
    state.author = author;
};

const INCREMENT_AJAX_CALLS = (state) => {
    state.ajaxCallsInProgress++;
};

const DECREMENT_AJAX_CALLS = (state, params) => {
    state.ajaxCallsInProgress--;

    if (params && params.error) state.ajaxError = params.error;
};

const SET_LOADING_FRAME = (state, { frame }) => {
    state.loadingFrame = frame;
};

const SET_SAVING = (state, saving) => {
    state.saving = saving;
};

const SET_DELETING = (state, deleting) => {
    state.deleting = deleting;
};

const SET_ERRORS = (state, errors) => {
    state.errors = errors;
};

const SET_DIRTY = (state, dirty) => {
    state.dirty = dirty;
};

const LOAD_COURSE = (state, course) => {
    state.course = course;
};

const LOAD_AUTHOR = (state, author) => {
    state.author = author;
};

export const mutations = {
    SET_COURSES,
    SET_COURSE,
    SET_AUTHOR,
    SET_AUTHORS,
    INCREMENT_AJAX_CALLS,
    DECREMENT_AJAX_CALLS,
    SET_LOADING_FRAME,
    SET_SAVING,
    SET_DELETING,
    SET_ERRORS,
    SET_DIRTY,
    LOAD_COURSE,
    LOAD_AUTHOR
};
