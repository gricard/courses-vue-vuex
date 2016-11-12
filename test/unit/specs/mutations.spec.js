import Vue from 'vue'
import 'babel-polyfill'
import { mutations } from 'src/store/mutations';


// destructure assign mutations
const { SET_COURSES, DECREMENT_AJAX_CALLS } = mutations;


describe('mutations', () => {
    it('SET_COURSES', () => {
        // mock state
        const state = { courses: null };

        // apply mutation
        const courses = { 1: { title: 'my course'} };
        SET_COURSES(state, { courses });

        // assert result
        expect(state.courses).to.equal(courses);
    });

    it('DECREMENT_AJAX_CALLS', () => {
        // mock state
        const state = { ajaxCallsInProgress: 1, ajaxError: null };

        // apply mutation
        DECREMENT_AJAX_CALLS(state, { error: 'it did not work' });

        // assert result
        expect(state.ajaxCallsInProgress).to.equal(0);
        expect(state.ajaxError).to.equal('it did not work');
    });
});
