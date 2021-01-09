// PACKAGES
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// MODULES
import PrimaryButton from './common/PrimaryButton';
import SecondaryDropdown from './common/SecondaryDropdown';
// STYLES
import logo from '../assets/logo.png';
import './IssueList.css'


function NavigationBar() {
    return (
        <div className="d-flex h-100 w-100 align-items-center">
            <div className="mr-auto px-4">
                <img src={logo} alt="github-logo" />
            </div>
            <div className="px-3">
                <SecondaryDropdown>Profile</SecondaryDropdown>
            </div>
            <div className="px-3">
                <PrimaryButton>Logout</PrimaryButton>
            </div>
        </div>
    );
}

export default NavigationBar;
