import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class HeaderBar extends React.Component {
    logOut() {
        console.log('this is HeaderBar this.props', this.props)
        this.props.dispatch(clearAuth());
        clearAuthToken();
        this.props.history.push('/')
    }

    render() {

        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button onClick={() => this.logOut()}>Log out</button>
            );
        } 
           
        return (
            <div className="header-bar">
                <h1>travelBak</h1>
                {logOutButton}
            </div>
        );
    }
}


export default connect()(HeaderBar);
