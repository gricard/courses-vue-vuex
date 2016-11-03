
export const state = {
    //  courses: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    courses: {
//        1: {id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', length: '2:00', category: 'code'},
//        2: {id: 2, title: 'bar', author: 'jim', watchHref: 'http://goo.gl', length: '1:10', category: 'db'}
    },
    authors: {

    },
    errors: {
//        title: 'title error',
//        category: 'category error',
//        length: 'length error'
    },
    course: {

    },
    author: {

    },
    saving: false,
    deleting: false,
    dirty: false,
    loadingFrame: 1,
    ajaxCallsInProgress: 0
};
