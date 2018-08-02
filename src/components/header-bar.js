import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './header-bar.css'

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
        let myTripsButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-button" onClick={() => this.logOut()}>Log out</button>
            );
            myTripsButton = (
                <button onClick={() => this.props.history.push('/')} className="my-trips-button">My Trips</button>
            )
        } 
           
        return (
            <div className="header-bar">
                <div className="logo">
                    <h1 onClick={() => this.props.history.push('/')}>travelBak</h1>
                </div>
                    
                <div className="buttons-div">
                    {myTripsButton}
                    {logOutButton}
                </div>
               
            </div>
        );
    }
}


export default connect()(HeaderBar);
