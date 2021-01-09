// PACKAGES
// MODULES
import { getRepoIssuesRequest } from "../services/issue-service";
import {
    issueRequestStatusChange,
    issueRepositoryChange,
    issueListChange,
    issuePageChange
} from '../actions/actions'


/**
 * Returns a promise that sends GET request to api
 * and dispatches retrieved results
 * @param {String} owner 
 * @param {String} repo 
 * @param {Number} page 
 */
function getRepoIssues(owner, repo, page) {
        return function (dispatch) {
            return new Promise(function (resolve, reject) {
                dispatch(issueRequestStatusChange(true));
                getRepoIssuesRequest(owner, repo, page).then(function (result) {
                    dispatch(issueListChange(result));
                    dispatch(issueRepositoryChange(repo));               
                    dispatch(issuePageChange(page));               
                    resolve(result);
                }, function (error) {
                    reject(error);
                }).finally(function () {
                    dispatch(issueRequestStatusChange(false));
                })
            });
        }
    }


export {
    getRepoIssues
};