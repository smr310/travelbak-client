import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landing-page.css'

import LoginForm from './login-form';


export class LandingPage extends React.Component {

    render() {

        

        // If we are logged in redirect straight to the user's dashboard
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }


        return (
            <div className="bgimg">
                <div className="home">
                    <div class="loader" style={{ opacity: this.props.loading ? 1 : 0}} ></div>
                    <h2 className="welcome-text">Welcome to travelBak</h2>
                    <p className="sub-welcome-text">A journal for your travel adventures</p>
                    <LoginForm />
                </div>
            </div>
        );

    }
}




const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    loading: state.auth.loading
});

export default connect(mapStateToProps)(LandingPage);
