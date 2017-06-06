// actions.spec.js

// use require syntax for inline loaders.
// with inject-loader, this returns a module factory
// that allows us to inject mocked dependencies.
const actionsInjector = require('inject-loader!@/store/actions');
//const actionCreatorsInjector = require('inject-loader!@/store/actionCreators'); // TODO is this needed anymore?

import { beginAjaxCall, loadCourses, loadCoursesSuccess, loadCoursesFailure } from '@/store/actionCreators';
import * as types from '@/store/actionTypes';

import {testAction} from './testAction';
import store from '@/store/store';
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
//                console.log('executing courses promise');
//                setTimeout(() => {
                    //        reject("cannot load courses");
                    //resolve(Object.assign([], courses));
//                    console.log('resolving with', courses);
                    resolve(courses)
//                }, 100);
            });
        }
    }
//    ,
//
//    // TODO these probably don't need to be mocked then
//    './actionCreators.js': {
//        beginAjaxCall(cb) {
////            console.log('beginAjaxCall cb', cb);
//            if (cb) {
//                setTimeout(() => {
////                    console.log('beginAjaxCall', beginAjaxCall);
//                    cb(beginAjaxCall())
//                }, 100)
//            } else {
//                return beginAjaxCall()
//            }
//        },
//
//        loadCoursesSuccess(courses) {
////            console.log('loadCoursesSuccess mock', courses);
//            return { type: types.LOAD_COURSES_SUCCESS, courses };
//        },
//
////        loadCoursesSuccess(cb) {
////            console.log('loadCoursesSuccess cb', cb);
////            setTimeout(() => {
//////                console.log('loadCoursesSuccess', loadCoursesSuccess);
////                if (cb) {
////                    console.log('calling success with cb');
////                    // TODO how do i dispatch the action returned here? !!!
////                    cb(function() { dispatch(loadCoursesSuccess())}) // cb should send back the mocked response in a function
////                } else {
////                    console.log('calling success directly');
////                    loadCoursesSuccess()
////                }
////            }, 100)
////        },
//
//        loadCoursesFailure(error) {
////            console.log('loadCoursesFailure cb', error);
//            return { type: types.LOAD_COURSES_FAILURE, error }
////            setTimeout(() => {
//////                console.log('loadCoursesFailure', loadCoursesFailure);
////                if (cb) cb(loadCoursesFailure())
////                else loadCoursesFailure()
////            }, 100)
//        }
//    }
});

//// TODO is this needed anymore?
//const actionCreators = actionCreatorsInjector({
//
//});

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
        it('Should dispatch actions and commit mutations', (done) => {
            const courseList = Object.assign([], courses);

            testAction(actions.actions.LOAD_COURSES, null, state, [
                    // no direct mutations
                ], [
                    { name: 'BEGIN_AJAX_CALL' },
                    { name: 'LOAD_COURSES_SUCCESS', payload: { courses: courseList}}
                ],
                done
            )
            ;
        })
    })

    describe('BEGIN_AJAX_CALL', () => {
        it('Should commit INCREMENT_AJAX_CALLS mutation', (done) => {
            testAction(actions.actions.BEGIN_AJAX_CALL, null, state, [
                    { type: 'INCREMENT_AJAX_CALLS' },
                ], [
                    // no actions
                ],
                done
            );
        })
    })
})
