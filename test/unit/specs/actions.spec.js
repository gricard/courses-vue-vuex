// based on http://www.slideshare.net/coulix/vuejs-testing


import { actions } from '@/store/actions';
import store from '@/store/store';
const state = store.state;
import {testAction} from './testAction';
//
//console.log('actions', actions);
//console.log('UPDATE_ERRORS', actions.UPDATE_ERRORS);

describe('Simple Actions', () => {
    describe('UPDATE_ERRORS', () => {
        beforeEach(() => {
            state.errors = {
                title: ''
            };
            ///...
        });

        it('Should dispatch the right mutations.', (done) => {
            testAction(actions.UPDATE_ERRORS, {errors: {title: 'the title is wrong'}}, state, [{
                    type: 'SET_ERRORS',
                    payload: {title: 'the title is wrong'}
                }], [
                    // no actions expected
                ],
                done
            );
        });
    });
});
