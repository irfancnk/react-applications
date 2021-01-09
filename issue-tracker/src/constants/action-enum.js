
/**
 * Contains store action enumerations that are used 
 * inside the application
 */
const actionEnum = Object.freeze({
    // USER OPERATIONS
    "APPLICATION_USER_LOGIN": "APPLICATION_USER_LOGIN",
    "APPLICATION_USER_LOGOUT": "APPLICATION_USER_LOGOUT",
    // ISSUE OPERATIONS  
    "ISSUE_REQUEST_STATUS_CHANGE": "ISSUE_REQUEST_STATUS_CHANGE",
    "ISSUE_REPOSITORY_CHANGE": "ISSUE_REPOSITORY_CHANGE",
    "ISSUE_LIST_CHANGE" : "ISSUE_LIST_CHANGE",
    "ISSUE_PAGE_CHANGE" : "ISSUE_PAGE_CHANGE"
});

export default actionEnum;