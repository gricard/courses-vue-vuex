

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
    }
};
