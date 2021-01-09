const proxy = Object.freeze({
    "API": "https://api.github.com"
});


/**
 * Creates the URL object for given repository and owner
 * @param {String} owner Name of the owner of the repository
 * @param {String} repo Name of the repository
 */
function getIssueUrl(owner, repo, page) {
    let url = new URL(`${proxy.API}/repos/${owner}/${repo}/issues`);
    url.searchParams.append("page", page);
    return url;
}
export default getIssueUrl;