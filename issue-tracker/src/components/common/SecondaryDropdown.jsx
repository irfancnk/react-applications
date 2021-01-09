// PACKAGES
import React, { Component } from 'react';
import { Dropdown, Badge } from 'react-bootstrap';
// MODULES
// STYLES
class SecondaryDropdown extends Component {

    constructor(props) {
        super(props);
        const { isLoading, ...rest } = props;
        this.rest = rest;
        this.buttonStyle = Object.freeze({
            backgroundColor: "var(--c-secondary)",
            border: "1px solid var(--c-secondary-border)",
            cursor: "pointer",
            color: "black"
        });
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle style={this.buttonStyle} id="dropdown-basic">
                    {this.props.children}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        Notification
                <Badge className="mx-2" variant="secondary">3</Badge>
                    </Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default SecondaryDropdown;