// Helper for testing action with expected mutations.

// originally from https://vuex.vuejs.org/en/testing.html

export function testAction(action, args, state, expectedMutations, expectedActions, done) {
    let mutationsCount = 0,
        actionsCount = 0;

//    console.log('action', action);
//    console.log('args', args);

    // mock dispatch
    const dispatch = (name, ...payload) => {
//        console.log('dispatch', arguments);
        const action = expectedActions[actionsCount];
//        console.log('next action', action);

        if (typeof name === 'object') {
            payload = name;
            name = name.type;
        }
        expect(action.name).to.equal(name);

        // if our mutation has a payload and our expected mutation
        // wants us to assert this payload.
        if (payload && action.payload) {
            expect(action.payload).to.deep.equal(payload);
        }

        actionsCount++;

        if (actionsCount === expectedActions.length) {
            done(); // this should only be testing one thing
        }

        // ...
        if (actionsCount > expectedActions.length) {
            // Missing non expected mutations.
            // List all expected mutations!
            expect(actionsCount).to.equal(expectedActions.length);
        }
    };

    // mock commit
    const commit = (name, payload) => {
        const mutation = expectedMutations[mutationsCount];
        expect(mutation.type).to.equal(name);
//        console.log('mutation', mutation);
//        console.log('payload', payload);

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
//    console.log('args again', args);
    action({ commit, dispatch, state }, args).then(nothing => {
//        console.log('action finished');
    }).catch(error => {
        console.log('action failed', error);
    });

    // check if no mutations should have been dispatched
    if (expectedActions.length === 0) {
        expect(actionsCount).to.equal(0);
    }

    // check if no mutations should have been dispatched
    if (expectedActions.length === 0) {
        expect(mutationsCount).to.equal(0);
    }

    done();
}

