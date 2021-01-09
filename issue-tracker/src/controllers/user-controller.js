// PACKAGES
import Cookies from 'js-cookie';
// MODULES
import { loginRequest } from "../services/user-service";

/**
 * Authenticates the user if the login token is not expired
 * on initial page load
 * @param {Object} state Initial state of the application 
 */
const recoverAuth = (state) => {
    var token = Cookies.get('user-token');
    if (token) {
        state.applicationUser.isAuthenticated = true;
        state.applicationUser.userEmail = token;
    }
    return state;
}

const login = (email, password) => {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
            loginRequest(email, password)
            .then(resolve);
        });
    }
}


export {
    recoverAuth,
    login
};