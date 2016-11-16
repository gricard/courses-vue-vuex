// actions.spec.js

// use require syntax for inline loaders.
// with inject-loader, this returns a module factory
// that allows us to inject mocked dependencies.
const actionsInjector = require('inject!src/store/actions');
const actionCreatorsInjector = require('inject!src/store/actionCreators');

import { beginAjaxCall, loadCourses, loadCoursesSuccess, loadCoursesFailure } from 'src/store/actionCreators';

import {testAction} from './testAction';
import store from 'src/store/store';
const state = store.state;

//console.log('actionsInjector', actionsInjector);


const courses = [
    {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:08",
        category: "JavaScript"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
    }
];

// create the module with our mocks
const actions = actionsInjector({
    '../api/mockCourseApi': {
        getAllCourses (cb) {
//            console.log('mock getAllCourses called', arguments);
            //      setTimeout(() => {
            //        cb(Object.assign([], courses))
            //      }, 100)

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    //        reject("cannot load courses");
                    //resolve(Object.assign([], courses));
                    resolve(courses)
                }, 100);
            });
        }
    },
    './actionCreators.js': {
        beginAjaxCall(cb) {
//            console.log('beginAjaxCall cb', cb);
            if (cb) {
                setTimeout(() => {
//                    console.log('beginAjaxCall', beginAjaxCall);
                    cb(beginAjaxCall())
                }, 100)
            } else {
                return beginAjaxCall()
            }

        },
        loadCoursesSuccess(cb) {
//            console.log('loadCoursesSuccess cb', cb);
            setTimeout(() => {
//                console.log('loadCoursesSuccess', loadCoursesSuccess);
                if (cb) cb(loadCoursesSuccess())
                else loadCoursesSuccess()
            }, 100)
        },
        loadCoursesFailure(cb) {
//            console.log('loadCoursesFailure cb', cb);
            setTimeout(() => {
//                console.log('loadCoursesFailure', loadCoursesFailure);
                if (cb) cb(loadCoursesFailure())
                else loadCoursesFailure()
            }, 100)
        }
    }
});

const actionCreators = actionCreatorsInjector({

});

//console.log('actions', actions);
//console.log('actions.LOAD_COURSES! ', actions.LOAD_COURSES);
//console.log('actions.actions.LOAD_COURSES! ', actions.actions.LOAD_COURSES);
//
//// helper for testing action with expected mutations
//const testAction = (action, payload, state, expectedMutations, done) => {
//    let count = 0;
//
//    console.log('# mutations expected', expectedMutations.length)
//
////    console.log('loadCoursesSuccess', loadCoursesSuccess({}));
//
//    // mock commit
//    const commit = (type, payload) => {
//        const mutation = expectedMutations[count]
//        console.log('mutation', mutation);
//
//        expect(mutation.type).to.equal(type)
//        if (payload) {
//            console.log('checking mutation payload');
//            expect(mutation.payload).to.deep.equal(payload)
//        }
//        count++
//        if (count >= expectedMutations.length) {
//            console.log('done handling mutations');
//            done()
//        }
//        console.log('mutation count', count);
//    }
//
//    const dispatch = (name, ...payload) => {
//        console.log('dispatch ' + name, payload);
//    }
//
//    // call the action with mocked store and arguments
//    console.log('action', action);
//    action({ dispatch, commit, state }, payload).then(nothing => {
//        console.log('courses loaded!');
//    }).catch(error => {
//        console.log('courses data failed to load');
//        done();
//    });
//
//    // check if no mutations should have been dispatched
//    if (expectedMutations.length === 0) {
//        expect(count).to.equal(0)
//        done()
//    }
//}


describe('Complex Mocked/Injected Actions', () => {
    describe('LOAD_COURSES', () => {
        it('Should dispatch actions and commit mutations', done => {
            const courseList = Object.assign([], courses);
            const loadError = {error: 'no error'};

    //        console.log('LOAD_COURSES', actions.actions.LOAD_COURSES);
            testAction(actions.actions.LOAD_COURSES, null, state, [
                    { type: 'INCREMENT_AJAX_CALLS' },
                    { type: 'SET_COURSES', payload: courseList },
                    { type: 'DECREMENT_AJAX_CALLS' }
                ], [
                    { name: 'BEGIN_AJAX_CALL' }
                    // no actions expected
                ],
                done
            ).then(nothing => {
                console.log('promise done');
            }).catch(error => {
                console.log('caught error', error);
            });
        })
    })
})