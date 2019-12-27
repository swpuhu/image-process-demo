import state from './state';
import reducer from './reducer';

function createStore (state, reducer) {
    function dispatch(action) {
        reducer(state, action);
    }

    return {
        state,
        dispatch,
        on: state.on,
        off: state.off,
    };
}

const store = createStore(state, reducer);
window.store = store;
export default store;