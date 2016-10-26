import CourseApi  from '../api/mockCourseApi'


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
};
