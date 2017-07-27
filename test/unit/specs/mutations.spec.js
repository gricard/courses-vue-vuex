import Vue from 'vue'
// import 'babel-polyfill'
import { mutations } from '@/store/mutations';


// destructure assign mutations
const {
    SET_COURSES,
    SET_COURSE,
    SET_AUTHOR,
    SET_AUTHORS,
    INCREMENT_AJAX_CALLS,
    DECREMENT_AJAX_CALLS,
    SET_LOADING_FRAME,
    SET_SAVING,
    SET_DELETING,
    SET_ERRORS,
    SET_DIRTY,
    LOAD_COURSE,
    LOAD_AUTHOR
} = mutations;

describe('Mutations', () => {
    describe('SET_COURSES', () => {
        it('Should modify state.courses', () => {
            // mock state
            const state = { courses: null };

            // apply mutation
            const courses = { 1: { title: 'my course'} };
            SET_COURSES(state, { courses });

            // assert result
            expect(state.courses).to.equal(courses);
        });
    });

    describe('SET_COURSE', () => {
        it('Should modify state.course', () => {
            // mock state
            const state = { course: null };

            // apply mutation
            const course = { title: 'my course'};
            SET_COURSE(state, { course });

            // assert result
            expect(state.course).to.equal(course);
        });
    });

    describe('SET_AUTHORS', () => {
        it('Should modify state.authors', () => {
            // mock state
            const state = { authors: null };

            // apply mutation
            const authors = { 1: { name: 'bob'} };
            SET_AUTHORS(state, { authors });

            // assert result
            expect(state.authors).to.equal(authors);
        });
    });

    describe('SET_AUTHOR', () => {
        it('Should modify state.author', () => {
            // mock state
            const state = { author: null };

            // apply mutation
            const author = { name: 'bob'};
            SET_AUTHOR(state, { author });

            // assert result
            expect(state.author).to.equal(author);
        });
    });

    describe('INCCREMENT_AJAX_CALLS', () => {
        it('Should modify state.ajaxCallsInProgress and state.ajaxError', () => {
            // mock state
            const state = { ajaxCallsInProgress: 0, ajaxError: null };

            // apply mutation
            INCREMENT_AJAX_CALLS(state);

            // assert result
            expect(state.ajaxCallsInProgress).to.equal(1);
        });
    });

    describe('DECREMENT_AJAX_CALLS', () => {
        it('Should modify state.ajaxCallsInProgress and state.ajaxError', () => {
            // mock state
            const state = { ajaxCallsInProgress: 1, ajaxError: null };

            // apply mutation
            DECREMENT_AJAX_CALLS(state, { error: 'it did not work' });

            // assert result
            expect(state.ajaxCallsInProgress).to.equal(0);
            expect(state.ajaxError).to.equal('it did not work');
        });
    });

    describe('SET_LOADING_FRAME', () => {
        it('Should modify state.loadingFrame', () => {
            // mock state
            const state = { ajaxCallsInProgress: 1, ajaxError: null, loadingFrame: null };

            // apply mutation
            SET_LOADING_FRAME(state, { frame: 'testVal' });

            // assert result
            expect(state.loadingFrame).to.equal('testVal');
        });
    });

    describe('SET_SAVING', () => {
        it('Should modify state.saving', () => {
            // mock state
            const state = { saving: null };

            // apply mutation
            SET_SAVING(state, true);

            // assert result
            expect(state.saving).to.equal(true);
        });
    });

    describe('SET_DELETING', () => {
        it('Should modify state.deleting', () => {
            // mock state
            const state = { deleting: null };

            // apply mutation
            SET_DELETING(state, true);

            // assert result
            expect(state.deleting).to.equal(true);
        });
    });

    describe('SET_ERRORS', () => {
        it('Should modify state.errors', () => {
            // mock state
            const state = { errors: null };

            // apply mutation
            SET_ERRORS(state, true);

            // assert result
            expect(state.errors).to.equal(true);
        });
    });

    describe('SET_DIRTY', () => {
        it('Should modify state.dirty', () => {
            // mock state
            const state = { dirty: null };

            // apply mutation
            SET_DIRTY(state, true);

            // assert result
            expect(state.dirty).to.equal(true);
        });
    });

    describe('LOAD_COURSE', () => {
        it('Should modify state.course', () => {
            // mock state
            const state = { course: null };

            // apply mutation
            LOAD_COURSE(state, true);

            // assert result
            expect(state.course).to.equal(true);
        });
    });

    describe('LOAD_AUTHOR', () => {
        it('Should modify state.author', () => {
            // mock state
            const state = { author: null };

            // apply mutation
            LOAD_AUTHOR(state, true);

            // assert result
            expect(state.author).to.equal(true);
        });
    });
});
