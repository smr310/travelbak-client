import React, { Component } from 'react';
import './App.css';
// import LandingPage from './components/LandingPage';
import LandingPage from './landing-page';
import Login from './Login';
import Dashboard from './Dashboard';
import AddTrip from './AddTrip';
import Trip from '../containers/Trip';
import AddJournalEntry from './AddJournalEntry';
import EditTrip from './EditTrip';
import { connect } from 'react-redux';
import { refreshAuthToken } from '../actions/auth';

import { Route, withRouter, Link, } from 'react-router-dom'
import { RegistrationPage } from './registration-page';
import HeaderBar from './header-bar';
import EditJournalEntry from './EditJournalEntry'

class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }
  
  render() {

    if(!this.props.loggedIn) {
      return (
         <div className="app">
          <HeaderBar loggedIn = {this.props.loggedIn} history= {this.props.history} />
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegistrationPage} />
          </main>
        </div>
      )
    }

    return (
        <div className="app">
          <HeaderBar loggedIn = {this.props.loggedIn} history= {this.props.history} />
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={RegistrationPage} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/AddTrip" component={AddTrip} />
            <Route exact path="/Trip" component={Trip} />
            <Route exact path="/EditTrip" component={EditTrip} />
            <Route exact path="/AddJournalEntry" component={AddJournalEntry} />
            <Route exact path="/EditJournalEntry" component={EditJournalEntry} />
          </main>
        </div>
    );
  }
}


const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
