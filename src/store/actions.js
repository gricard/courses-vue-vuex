import CourseApi  from '../api/mockCourseApi'
import AuthorApi  from '../api/mockAuthorApi'
import toastr from 'toastr';

import {
    beginAjaxCall, ajaxCallError, ajaxCallSuccess,
    loadCourses, loadCoursesSuccess, loadCoursesFailure, fetchCourse, saveCourseSuccess, saveCourseFailure,
    loadAuthors, loadAuthorsSuccess, loadAuthorsFailure, fetchAuthor, saveAuthorSuccess, saveAuthorFailure,
} from './actionCreators.js';

export const actions = {
    UPDATE_ERRORS: ({ commit, dispatch, state }, {errors}) => {
        // make a copy since vue will not handle it reactively unless the entire object itself changes
        errors = Object.assign({}, errors)

        commit('SET_ERRORS', errors);
    },

    RESET_ERRORS: ({ commit, dispatch, state }) => {
        commit('SET_ERRORS', {});
    },

    BEGIN_AJAX_CALL: ({ commit, dispatch, state }) => {
        // loading mask?
        commit('INCREMENT_AJAX_CALLS');
    },

    AJAX_CALL_SUCCESS: ({ commit, dispatch, state }, { msg }) => {
        // clear loading mask?
        if (msg) toastr.success(msg);
        commit('DECREMENT_AJAX_CALLS');
    },

    AJAX_CALL_ERROR: ({ commit, dispatch, state }, {error: error}) => {
        // clear loading mask?
       toastr.error(error);
        commit('DECREMENT_AJAX_CALLS', { error });
    },

    UPDATE_LOADING_FRAME: ({ commit, dispatch, state }, {frame: frame}) => {
        commit('SET_LOADING_FRAME', {frame: frame});
    },

    LOAD_COURSES: ({ commit, dispatch, state }) => {
//        console.log('BEGIN AJAX CALL');
        dispatch(beginAjaxCall()); // increment ajax call count
        return CourseApi.getAllCourses().then(courses => {
//            console.log('AJAX CALL SUCCESS');
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
//            console.log('AJAX CALL FAILURE');
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
                dispatch(fetchCourse(id));
            });
        }

        // get course from list we already retrieved
        let course = courses.filter(course => course.id == id).pop();

        // clone it so it's not a reference
        // so that when we edit the form we are not editing the course in the course list also
        course = Object.assign({}, course)

        // set the state
        commit('SET_COURSE', { course });
    },

    SAVE_COURSE: ({ commit, dispatch, state }, { course }) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        commit('SET_SAVING', true);
        return CourseApi.saveCourse(course).then(course => {
            //return course.id ? dispatch(updateCourseSuccess(course)) : dispatch(createCourseSuccess(course));
            return dispatch(saveCourseSuccess(course));
            // replace in course list?
        }).catch(error => {
            return dispatch(saveCourseFailure(error));
        });
    },

    SAVE_COURSE_FAILURE: ({ commit, dispatch, state }, { error }) => {
        commit('SET_SAVING', false );
        dispatch(ajaxCallError(error));
        throw(error);
    },

    SAVE_COURSE_SUCCESS: ({ commit, dispatch, state }, { course }) => {
        commit('SET_COURSE', {course});
        dispatch(ajaxCallSuccess("Saved course"));

        // update form status
        commit('SET_SAVING', false);
        commit('SET_DIRTY', false);
        commit('SET_ERRORS', {});
    },

    CREATE_COURSE_SUCCESS: ({ commit, dispatch, state }, { course }) => {
        commit('SET_COURSE', {course});
        dispatch(ajaxCallSuccess("Created course"));

        // update form status
        commit('SET_SAVING', false);
        commit('SET_DIRTY', false);
        commit('SET_ERRORS', {});
    },

    UPDATE_COURSE_SUCCESS: ({ commit, dispatch, state }, { course} ) => {
        commit('SET_COURSE', {course});
        dispatch(ajaxCallSuccess("Updated course"));

        // update form status
        commit('SET_SAVING', false);
        commit('SET_DIRTY', false);
        commit('SET_ERRORS', {});
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
            dispatch(ajaxCallSuccess("Deleted course"));
        }).catch(error => {
            // update form status
            commit('SET_DELETING', false);
            // update ajax status
            dispatch(ajaxCallError(error));
        });
    },


    //// AUTHORS
    LOAD_AUTHORS: ({ commit, dispatch, state }) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispatch(loadAuthorsFailure(error));
        });
    },

    LOAD_AUTHORS_SUCCESS: ({ commit, dispatch, state }, { authors }) => {
        commit('SET_AUTHORS', { authors });
        dispatch(ajaxCallSuccess());
    },

    LOAD_AUTHORS_FAILURE: ({ commit, dispatch, state }, { error }) => {
        dispatch(ajaxCallError(error));
        throw(error);
    },

    FETCH_AUTHOR: ({ commit, dispatch, state }, { id }) => {
        const authors = Array.from(state.authors);

        // ensure we have data load if we load the author page directly
        if (authors.length < 1) {
            return dispatch(loadAuthors()).then(something => {
                dispatch(fetchAuthor(id));
            });
        }

        // get author from list we already retrieved
        let author = authors.filter(author => author.id == id).pop();

        // clone it so it's not a reference
        // so that when we edit the form we are not editing the author in the author list also
        author = Object.assign({}, author)

        // set the state
        commit('SET_AUTHOR', { author });
    },

    SAVE_AUTHOR: ({ commit, dispatch, state }, author) => {
        dispatch(beginAjaxCall()); // increment ajax call count
        commit('SET_SAVING', true);
        return AuthorApi.saveAuthor(author).then(author => {
            //            author.id ? dispatch('UPDATE_AUTHOR_SUCCESS') : dispatch('CREATE_AUTHOR_SUCCESS');
            return dispatch(saveAuthorSuccess(author));
            // replace in author list?
            //            author.id ? dispatch(updateAuthorSuccess(author)) : dispatch(createAuthorSuccess(author));
        }).catch(error => {
            dispatch(saveAuthorFailure(error));
        });
    },

    SAVE_AUTHOR_FAILURE: ({ commit, dispatch, state }, { error }) => {
        commit('SET_SAVING', false );
        dispatch(ajaxCallError(error));
        throw(error);
    },

    SAVE_AUTHOR_SUCCESS: ({ commit, dispatch, state }, { author }) => {
        commit('SET_AUTHOR', {author});
        dispatch(ajaxCallSuccess("Saved author"));

        // update form status
        commit('SET_SAVING', false);
        commit('SET_DIRTY', false);
        commit('SET_ERRORS', {});
    },

    DELETE_AUTHOR: ({ commit, dispatch, state }, author) => {
        commit('SET_DELETING', true);
        dispatch(beginAjaxCall()); // increment ajax call count

        return AuthorApi.deleteAuthor(author).then(author => {
            commit('SET_DELETING', false);
            dispatch(ajaxCallSuccess("Author deleted"));
            // clear out author state
            author = {};
            commit('SET_AUTHOR', { author });
        }).catch(error => {
            commit('SET_DELETING', false);
            dispatch(ajaxCallError(error));
        });
    },
};
