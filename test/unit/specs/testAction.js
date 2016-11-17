// Helper for testing action with expected mutations.

// originally from https://vuex.vuejs.org/en/testing.html

export function testAction(action, args, state, expectedMutations, expectedActions, done) {
    let mutationsCount = 0,
        actionsCount = 0;

//    console.log('action', action);
//    console.log('args', args);

    // mock dispatch
    const dispatch = (name, ...payload) => {
        console.log('dispatch', arguments);
        const action = expectedActions[actionsCount];
        console.log('next action', action);
        console.log('action #' + actionsCount)

        console.log('expecting ', name);
        if (typeof name === 'object') {
            console.log('got object', name);
            const type = null;
            payload = name;
            name = name.type;
            delete payload["type"];
            payload = {...payload};
        }
        console.log('expecting ', name);
        expect(action.name).to.equal(name);
        console.log('action expected', action.name);
        console.log('action received', name);

        // if our mutation has a payload and our expected mutation
        // wants us to assert this payload.
        if (payload && action.payload) {
            console.log('payload expected', action.payload);
            console.log('payload received', payload);
            expect(action.payload).to.deep.equal(payload);
        }

        actionsCount++;

        console.log('____ACTIONS_COUNT_____', actionsCount);

        // TODO where does the return value end up?
        // TODO and how do we get that and execute further actions that are triggered?
//
//        if (actionsCount === expectedActions.length) {
//            done(); // this should only be testing one thing
//        }

        // ...
//        if (actionsCount > expectedActions.length) {
//            // Missing non expected mutations.
//            // List all expected mutations!
//            expect(actionsCount).to.equal(expectedActions.length);
//        }
    };

    // mock commit
    const commit = (name, payload) => {
        const mutation = expectedMutations[mutationsCount];

//        if (typeof name === 'object') {
//            payload = name;
//            name = name.type;
//        }

        expect(mutation.type).to.equal(name);
        console.log('mutation expected', mutation.type);
        console.log('mutation received', name);
//        console.log('mutation', mutation);
//        console.log('payload', payload);

        // if our mutation has a payload and our expected mutation
        // wants us to assert this payload.
        if (payload && mutation.payload) {
            expect(mutation.payload).to.deep.equal(payload);
            console.log('payload expected', mutation.payload);
            console.log('payload received', payload);
        }

        mutationsCount++;
        console.log('# mutations = ' + mutationsCount);

//        if (mutationsCount === expectedMutations.length) {
//            console.log('mutations done');
//            done();
//        }

        // ...
//        if (mutationsCount < expectedMutations.length) {
//            // Missing non expected mutations.
//            // List all expected mutations!
//            expect(mutationsCount).to.equal(expectedMutations.length);
//        }
    };

    const checkResults = (where, actionsCount, mutationsCount) => {
        console.log('checking results from ' + where);
        console.log('actionsCount', actionsCount);
        console.log('mutationsCount', mutationsCount);

        // check if no mutations should have been dispatched
        if (expectedActions.length === 0) {
            expect(actionsCount).to.equal(0);
        } else {
            expect(actionsCount).to.equal(expectedActions.length);
        }

        // check if no mutations should have been dispatched
        if (expectedMutations.length === 0) {
            expect(mutationsCount).to.equal(0);
        } else {
            expect(mutationsCount).to.equal(expectedMutations.length);
        }

        done();
    };

    // call the action with mocked store and arguments
//    console.log('args again', args);
    if ('object' === typeof action && 'function' === typeof action.then) {
        action({commit, dispatch, state}, args).then(nothing => {
                    console.log('action finished');

            console.log('actionsCount', actionsCount);
            console.log('mutationsCount', mutationsCount);
            setTimeout(function() {
                checkResults('promise success', actionsCount, mutationsCount);
            }, 100);
        }).catch(error => {
            console.log('action failed', error);
            setTimeout(function() {
                checkResults('promise failure', actionsCount, mutationsCount);
            }, 100);
        });
    } else {
        const retVal = action({commit, dispatch, state}, args);
        if ('object' === typeof retVal && 'function' === typeof retVal.then) {
            retVal.catch(error => {
                console.log('returned promise failed', error);
                setTimeout(function() {
                    checkResults('returned promise failure', actionsCount, mutationsCount);
                }, 100);
            }).then(nothing => {
                        console.log('action finished');
                setTimeout(function() {
                    checkResults('returned promise success', actionsCount, mutationsCount);
                }, 100);
            });
        } else {
            checkResults('direct call', actionsCount, mutationsCount);
        }
    }
//
//    // check if no mutations should have been dispatched
//    if (expectedActions.length === 0) {
//        expect(actionsCount).to.equal(0);
//    } else {
//        expect(actionsCount).to.equal(expectedActions.length);
//    }
//
//    // check if no mutations should have been dispatched
//    if (expectedMutations.length === 0) {
//        expect(mutationsCount).to.equal(0);
//    } else {
//        expect(mutationsCount).to.equal(expectedMutations.length);
//    }
//
//    done();
}

