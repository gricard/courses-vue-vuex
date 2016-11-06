import Vue from 'vue';
import CourseApi  from '../api/mockCourseApi'
import AuthorApi  from '../api/mockAuthorApi'
import {
    beginAjaxCall, ajaxCallError, ajaxCallSuccess,
    loadCourses, loadCoursesSuccess, loadCoursesFailure,
    loadAuthors
} from './actionCreators.js';

export const actions = {
    BEGIN_AJAX_CALL: ({ commit, dispatch, state }) => {
        // loading mask?
        commit('INCREMENT_AJAX_CALLS');
    },

    AJAX_CALL_SUCCESS: ({ commit, dispatch, state }) => {
        // clear loading mask?
        commit('DECREMENT_AJAX_CALLS');
    },

    AJAX_CALL_ERROR: ({ commit, dispatch, state }, {error: error}) => {
        // clear loading mask?
        // display error?
        commit('DECREMENT_AJAX_CALLS', { error });
    },

    UPDATE_LOADING_FRAME: ({ commit, dispatch, state }, {frame: frame}) => {
        commit('SET_LOADING_FRAME', {frame: frame});
    },

    LOAD_COURSES: ({ commit, dispatch, state }) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        return CourseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            dispatch(loadCoursesFailure(error));
        });
    },

    LOAD_COURSES_SUCCESS: ({ commit, dispatch, state }, { courses }) => {
        commit('SET_COURSES', { courses });
        dispatch(ajaxCallSuccess());
    },

    LOAD_COURSES_FAILURE: ({ commit, dispatch, state }, { error }) => {
        dispatch(ajaxCallError(error));
        throw(error);
    },


    FETCH_COURSE: ({ commit, dispatch, state }, { id }) => {
        const courses = Array.from(state.courses);

        // ensure we have data load if we load the course page directly
        if (courses.length < 1) {
            return dispatch(loadCourses()).then(something => {
                dispatch('FETCH_COURSE', { id: id });
            });
        }

        // get course from list we already retrieved
        let course = courses.filter(course => course.id == id).pop();

        // clone it so it's not a reference
        // so that when we edit the form we are not editing the course in the course list also
        course = Vue.util.extend({}, course);

        // set the state
        commit('SET_COURSE', { course });
    },

    SAVE_COURSE: ({ commit, dispatch, state }, course) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        commit('SET_SAVING', true);
        return CourseApi.saveCourse(course).then(course => {
//            course.id ? dispatch('UPDATE_COURSE_SUCCESS') : dispatch('CREATE_COURSE_SUCCESS');
            commit('SET_COURSE', { course });
            dispatch(ajaxCallSuccess());

            // update state flags for form
            commit('SET_SAVING', false);
            commit('SET_DIRTY', false);

            // replace in course list?
            //course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
        }).catch(error => {
//            dispatch(ajaxCallError(error));
            console.log('SAVE_COURSE: caught error', error);
            dispatch(ajaxCallError(error), {error: error});
            commit('SET_SAVING', false );
        });
    },

    DELETE_COURSE: ({ commit, dispatch, state }, course) => {
        commit('SET_DELETING', true);
        dispatch(beginAjaxCall()); // increment ajax call count

        return CourseApi.deleteCourse(course).then(course => {
            // update form status
            commit('SET_DELETING', false);
            // clear out course state
            course = {};
            commit('SET_COURSE', { course });
            // update ajax success
            dispatch(ajaxCallSuccess());
        }).catch(error => {
            // update form status
            commit('SET_DELETING', false);
            // update ajax status
            dispatch(ajaxCallError(error));
        });
    },

    LOAD_AUTHORS: ({ commit, dispatch, state }) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        return AuthorApi.getAllAuthors().then(authors => {
            commit('SET_AUTHORS', { authors });
            dispatch(ajaxCallSuccess());
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    },

    FETCH_AUTHOR: ({ commit, dispatch, state }, { id }) => {
        const authors = Array.from(state.authors);

        // ensure we have data load if we load the author page directly
        if (authors.length < 1) {
            return dispatch(loadAuthors()).then(something => {
                dispatch('FETCH_AUTHOR', { id: id });
            });
        }

        // get author from list we already retrieved
        let author = authors.filter(author => author.id == id).pop();

        // clone it so it's not a reference
        // so that when we edit the form we are not editing the author in the author list also
        author = Vue.util.extend({}, author);

        // set the state
        commit('SET_AUTHOR', { author });
    },

    SAVE_AUTHOR: ({ commit, dispatch, state }, author) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        commit('SET_SAVING', true);
        return AuthorApi.saveAuthor(author).then(author => {
            //            author.id ? dispatch('UPDATE_AUTHOR_SUCCESS') : dispatch('CREATE_AUTHOR_SUCCESS');
            commit('SET_AUTHOR', { author });
            dispatch(ajaxCallSuccess());

            // update form status
            commit('SET_SAVING', false);
            commit('SET_DIRTY', false);

            // replace in author list?
            //            author.id ? dispatch(updateAuthorSuccess(author)) : dispatch(createAuthorSuccess(author));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            commit('SET_SAVING', false );
        });
    },

    DELETE_AUTHOR: ({ commit, dispatch, state }, author) => {
        commit('SET_DELETING', true);
        dispatch(beginAjaxCall()); // increment ajax call count

        return AuthorApi.deleteAuthor(author).then(author => {
            commit('SET_DELETING', false);
            dispatch(ajaxCallSuccess());
            // clear out author state
            author = {};
            commit('SET_AUTHOR', { author });
        }).catch(error => {
            commit('SET_DELETING', false);
            dispatch(ajaxCallError(error));
        });
    },
};
