import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    console.log('this is props.loggedIn', props.loggedIn);
    if (props.loggedIn) {
       
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="home bgimg">
            <h2>Register for travelBak</h2>
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);
