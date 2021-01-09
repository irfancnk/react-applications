// PACKAGES
import { combineReducers } from 'redux';
// MODULES
import { applicationUser } from './applicationUser';
import { issuePage } from './issuePage';
import { modals } from './modals';

/**
 * Combines defined reducers for using them
 * in store creation
 */
export default combineReducers({
    applicationUser,
    issuePage,
    modals
});
