import * as types from './actionTypes';

//// AJAX

export function beginAjaxCall() {
    console.log('beginAjaxCall', types.BEGIN_AJAX_CALL);
    return {type: types.BEGIN_AJAX_CALL};
}

// decrements ajax call count and triggers error display
export function ajaxCallError(error='unknown error') {
    console.log('ajaxCallError', types.AJAX_CALL_ERROR);
    console.log('error', error);
    return {
        type: types.AJAX_CALL_ERROR,
        error: 'Server error: ' + error
    };
}

export function ajaxCallSuccess() {
    console.log('ajaxCallSuccess', types.AJAX_CALL_SUCCESS);
    return {type: types.AJAX_CALL_SUCCESS};
}


//// COURSES

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCoursesFailure(error) {
    return { type: types.LOAD_COURSES_FAILURE, error };
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(course) {
    //console.log('deleteCourseSuccess');
    return {type: types.DELETE_COURSE_SUCCESS, course};
}

export function deleteCourseFailure(course) {
    return {type: types.DELETE_COURSE_FAILURE, course};
}


//// AUTHORS

export function loadAuthorsSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthorsFailure(error) {
    return { type: types.LOAD_AUTHORS_FAILURE, error };
}

export function createAuthorSuccess(author) {
    return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
    return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}
