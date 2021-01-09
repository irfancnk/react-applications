import produce from "immer";
import ActionEnum from '../constants/action-enum';


/**
 * Handles issue related data persistence operations
 */
export const issuePage = produce((state, action) => {
    switch (action.type) {
        case ActionEnum.ISSUE_REQUEST_STATUS_CHANGE:
            state.requestInProgress = action.payload;
            return;
        case ActionEnum.ISSUE_REPOSITORY_CHANGE:
            state.repository = action.payload;
            return;
        case ActionEnum.ISSUE_LIST_CHANGE:
            state.issueList = action.payload;
            return;
        case ActionEnum.ISSUE_PAGE_CHANGE:
            state.issuePage = action.payload;
            return;
        default:
    }
}, {});





