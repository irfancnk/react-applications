import ActionEnum from '../constants/action-enum';

/**
 * Contains store actions that are used 
 * inside the application
 */

 export const applicationUserLogin = (value) => ({
    type: ActionEnum.APPLICATION_USER_LOGIN,
    payload: value
});

export const applicationUserLogout = (value) => ({
    type: ActionEnum.APPLICATION_USER_LOGOUT,
    payload: value
});

export const issueRequestStatusChange = (value) => ({
    type: ActionEnum.ISSUE_REQUEST_STATUS_CHANGE,
    payload: value
});

export const issueRepositoryChange = (value) => ({
    type: ActionEnum.ISSUE_REPOSITORY_CHANGE,
    payload: value
});

export const issueListChange = (value) => ({
    type: ActionEnum.ISSUE_LIST_CHANGE,
    payload: value
});

export const issuePageChange = (value) => ({
    type: ActionEnum.ISSUE_PAGE_CHANGE,
    payload: value
});





