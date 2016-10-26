//export const STORAGE_KEY = 'courses-vuejs';

//// for testing
//if (navigator.userAgent.indexOf('PhantomJS') > -1) {
//  window.localStorage.clear()
//}


export const mutations = {

    SET_COURSES (state, { courses }) {
        state.courses = courses;
    },

    changeName (state, name) {
        console.log('set new name', name);
        state.name = name;
    },

    changeTitle (state, title) {
        console.log('set new title', title);
        state.title = title;
    },

    loadCourse (state, course) {
        console.log('loadCourse', course);
        state.course = course;
    },

    changeCategory (state, newVal) {
        console.log('set new cateogry', newVal);
        state.category = newVal;
    },


  addCourse (state, { text }) {
    state.courses.push({
      text,
      done: false
    })
  },

  deleteTodo (state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  toggleTodo (state, { todo }) {
    todo.done = !todo.done
  },

  editTodo (state, { todo, value }) {
    todo.text = value
  },

  toggleAll (state, { done }) {
    state.todos.forEach((todo) => {
      todo.done = done
    })
  },

  clearCompleted (state) {
    state.todos = state.todos.filter(todo => !todo.done)
  }
}
