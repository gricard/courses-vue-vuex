// based on http://www.slideshare.net/coulix/vuejs-testing


import { actions } from 'src/store/actions';
import store from 'src/store/store';
const state = store.state;
import {testAction} from './helper';

console.log('actions', actions);
console.log('UPDATE_ERRORS', actions.UPDATE_ERRORS);

describe('UPDATE_ERRORS action.', () => {
    beforeEach(() => {
        state.errors = {
            title: ''
        };
        ///...
    });

    it('Should dispatch the right mutations.', (done) => {
        testAction(actions.UPDATE_ERRORS, {errors: {title: 'the title is wrong'}}, state, [{
                name: 'SET_ERRORS',
                payload: {title: 'the title is wrong'}
            }], [
                // no actions expected
            ],
            done
        );
    });

//    it('Should not dispatch ADD_CONVERSATION_THREAD_TO_TOP if ...', (done) => {
//        state.app.menuSelection = 'archived';
//        testAction(actions.UPDATE_ERRORS, [1, 1, 'test'], state, [
//            {
//                name: 'DELETE_WORKFLOW_TASK',
//                payload: [1]
//            },
//        ], done);
//    });
});
