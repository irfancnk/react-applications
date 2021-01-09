// PACKAGES
import { combineReducers } from 'redux';
// MODULES
import { applicationUser } from './applicationUser';
import { issuePage } from './issuePage';
import { modals } from './modals';




export default combineReducers({
    applicationUser,
    issuePage,
    modals
});
