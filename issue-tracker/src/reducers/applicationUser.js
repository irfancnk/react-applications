import produce from "immer";
import ActionEnum from '../constants/action-enum';


/**
 * Handles user login and logout operations
 */
export const applicationUser = produce((state, action) => {
    switch (action.type) {
        case ActionEnum.APPLICATION_USER_LOGIN:
            state.userEmail = action.payload;
            state.isAuthenticated = true;
            return;
        case ActionEnum.APPLICATION_USER_LOGOUT:
            state.userEmail = "";
            state.isAuthenticated = false;
            return;
        default:
    }
}, {});
