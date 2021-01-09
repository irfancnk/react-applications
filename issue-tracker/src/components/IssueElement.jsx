// PACKAGES
import React, { Component } from 'react';
// MODULES
// STYLES
import './IssueElement.css'


class IssueElement extends Component {

    render() {
        return (
            <li className="list-group-item d-flex">
                <p>
                    {this.props.issue.title}
                    {this.props.issue.labels.map((item, index) => {
                    return (
                        <span key={index} className="badge badge-success badge-pill mx-1">{item.name}</span>
                    )
                })}
                </p>
            </li>
        );
    }
}

export default IssueElement;
