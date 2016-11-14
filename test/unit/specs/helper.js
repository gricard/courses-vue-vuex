// Helper for testing action with expected mutations.
export function testAction(action, args, state, expectedMutations, expectedActions, done) {
    let mutationsCount = 0,
        actionsCount = 0;

    console.log('action', action);
    console.log('args', args);

    // mock dispatch
    const dispatch = (name, ...payload) => {
        const action = expectedActions[actionsCount];
        expect(action.name).to.equal(name);

        // if our mutation has a payload and our expected mutation
        // wants us to assert this payload.
        if (payload && action.payload) {
            expect(action.payload).to.deep.equal(payload);
        }

        actionsCount++;

        if (actionsCount === expectedMutations.length) {
            done();
        }

        // ...
        if (actionsCount > expectedMutations.length) {
            // Missing non expected mutations.
            // List all expected mutations!
            expect(actionsCount).to.equal(expectedActions.length);
        }
    };

    // mock commit
    const commit = (name, payload) => {
        const mutation = expectedMutations[mutationsCount];
        expect(mutation.name).to.equal(name);
        console.log('mutation', mutation);
        console.log('payload', payload);

        // if our mutation has a payload and our expected mutation
        // wants us to assert this payload.
        if (payload && mutation.payload) {
            expect(mutation.payload).to.deep.equal(payload);
        }

        mutationsCount++;

        if (mutationsCount === expectedMutations.length) {
            done();
        }

        // ...
        if (mutationsCount > expectedMutations.length) {
            // Missing non expected mutations.
            // List all expected mutations!
            expect(mutationsCount).to.equal(expectedMutations.length);
        }
    };

    // call the action with mocked store and arguments
    console.log('args again', args);
    action({ commit, dispatch, state }, args);

    // check if no mutations should have been dispatched
    if (actionsCount === 0) {
        expect(expectedActions.length).to.equal(0); done();
    }

    // check if no mutations should have been dispatched
    if (mutationsCount === 0) {
        expect(expectedMutations.length).to.equal(0); done();
    }
}
