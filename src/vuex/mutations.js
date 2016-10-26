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

    changeName (state, name) {
        console.log('set new name', name);
        state.course.name = name;
    },

    changeTitle (state, title) {
        console.log('set new title', title);
        state.course.title = title;
    },

    changeCategory (state, newVal) {
        console.log('set new cateogry', newVal);
        state.course.category = newVal;
    },

    loadCourse (state, course) {
//        console.log('loadCourse', course);
        state.course = course;
    }

}
