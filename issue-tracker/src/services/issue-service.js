// PACKAGES
import axios from 'axios';
// MODULES
import getIssueUrl from './proxy';


/**
 * Returns a promise that sends a request to
 * issue endpoint with owner and repo name parameters
 * @param {String} owner Name of the owner of the repository
 * @param {String} repo Name of the repository
 */
const getRepoIssuesRequest = (owner, repo, page) => {
    return new Promise(function(resolve, reject) {
        let issuesPromise = axios.get(getIssueUrl(owner, repo, page));
        issuesPromise.then(function ({data}) {
            return resolve(data)
        }, function (error) {
            return reject(error);
        });
    });
}


export {
    getRepoIssuesRequest
};
