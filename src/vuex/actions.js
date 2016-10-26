import CourseApi  from '../api/mockCourseApi'
import Vue from 'vue';

export const actions = {
    // ensure data for rendering given list type
    //    FETCH_COURSE: ({ commit, dispatch, state }, { type }) => {
    //        commit('SET_ACTIVE_TYPE', {type});
    //        return fetchIdsByType(type)
    //            .then(ids => commit('SET_LIST', {type, ids}))
    //            .then(() => dispatch('ENSURE_ACTIVE_ITEMS'))
    //    }

    DUMP_STATE: ({ commit, dispatch, state }) => {
        //        commit('SET_ACTIVE_TYPE', {type});
        console.log('DUMP_STATE', state);
    },

    LOAD_COURSES: ({ commit, dispatch, state }) => {
        // only fetch items that we don't already have.
//        ids = ids.filter(id => !state.items[id])
//        if (ids.length) {
//            return fetchItems(ids).then(items => commit('SET_ITEMS', { items }))
//        } else {
//            return Promise.resolve()
//        }

//        dispatch('AJAX_BEGIN'); // increment ajax call count
        return CourseApi.getAllCourses().then(courses => {
            commit('SET_COURSES', { courses });
//            dispatch('AJAX_SUCCESS');
        }).catch(error => {
            throw(error);
        });
    },

    FETCH_COURSE: ({ commit, dispatch, state }, { id }) => {
        const courses = Array.from(state.courses);

        // ensure we have data load if we load the course page directly
        if (courses.length < 1) {
            return dispatch('LOAD_COURSES').then(something => {
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
    }
};
