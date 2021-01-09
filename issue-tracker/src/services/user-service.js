// PACKAGES
// MODULES

/**
 * Returns a promise that sends a request
 * to login endpoint with email and password parameter
 * @param {String} email Entered user email
 * @param {String} password Entered user password
 */
const loginRequest = (email, password) => {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000);
    });
}

/**
 * Returns a promise that sends a request
 * to register endpoint with credentials
 * @param {String} email Entered user email
 * @param {String} name Entered user name
 * @param {String} password Entered user password
 */
const registerRequest = (email, name, password) => {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000);
    });
}

export {
    loginRequest,
    registerRequest
};
