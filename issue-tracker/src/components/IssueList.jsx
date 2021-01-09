// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-bootstrap/Pagination'
import Form from 'react-bootstrap/Form'
// MODULES
import IssueElement from './IssueElement';
import Loading from './common/Loading'
import { getRepoIssues } from '../controllers/issue-controller';
// STYLES
import './IssueList.css'




class IssueList extends Component {

    constructor(props) {
        super(props);
        this.pages = [1, 2, 3, 4, 5];
        this.repos = [
            "react",
            "react-native",
            "rocksdb",
            "yoga"
        ]
    }

    componentDidMount() {
        this.fetchIssues(this.props.issuePage.owner, this.props.issuePage.repository, 1)
    }

    fetchIssues(owner, repository, page) {
        this.props.dispatcher(getRepoIssues(
            owner,
            repository,
            page
        ));
    }

    mapPages() {
        return (
            this.pages.map((item, index) => {
                return (
                    <Pagination.Item
                        key={index + 1}
                        active={(this.props.issuePage.issuePage === index + 1)}
                        onClick={() => this.fetchIssues(this.props.issuePage.owner, this.props.issuePage.repository, index + 1)}
                        disabled={this.props.issuePage.requestInProgress}
                    >
                        {index + 1}
                    </Pagination.Item>
                );
            })
        )
    }

    mapIssues() {
        return (
            this.props.issuePage.issueList.map((item, index) => {
                return (
                    <IssueElement issue={item} key={index} />
                );
            })
        )
    }

    mapRepos() {
        return (
            this.repos.map((item, index) => {
                return (
                    <option
                        key={index}
                        value={item}
                    >
                        {item}
                    </option>
                );
            })
        )
    }

    render() {
        if (this.props.issuePage.requestInProgress) {
            return ( <Loading />);
        }

        return (
            <div className="d-flex h-100 w-100">
                <div className="container-fluid h-100 m-0 p-0">
                    <div className="row m-0 p-0 h-100">
                        <div className="repo-selection-div col-12 m-0 p-0">
                            <div className="d-flex py-2 px-3 m-0 h-100 w-100 flex-row align-items-center justify-content-start">
                                <p className="owner-name">facebook/{' '}</p>
                                <Form.Group>
                                    <Form.Control defaultValue={this.props.issuePage.repository} as="select" size="sm" onChange={(e) => this.fetchIssues(this.props.issuePage.owner, e.target.value, 1)}>
                                        {this.mapRepos()}
                                    </Form.Control>
                                </Form.Group>
                            </div>

                        </div>
                        <div className="issue-list-div col-12 m-0 p-0">
                            <ul className="list-group h-100" style={{ overflowY: "scroll" }}>
                                {this.mapIssues()}
                            </ul>
                        </div>
                        <div className="issue-page-div col-12 m-0 p-0 ">
                            <div className="d-flex h-100 w-100 align-items-center justify-content-center">
                                <Pagination size="sm" className="m-0 p-0">
                                    {this.mapPages()}
                                </Pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    issuePage: state.issuePage
});
const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
