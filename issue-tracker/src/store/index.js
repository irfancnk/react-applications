import masterReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';


/**
 * Prints the current state of the store
 */
const consoleMessages = store => next => action => {
    let result = next(action);
    console.groupCollapsed(`Dispatching Action => ${action.type}`);
    console.log('Action payload: ', action.payload);
    console.log('Current Store State: ', store.getState());
    console.groupEnd();
    return result;
};

var storeFactory = (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(masterReducer, initialState);
};
export default storeFactory;
