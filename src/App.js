import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddTrip from './components/AddTrip';
import Trip from './components/Trip';
import JournalEntry from './components/JournalEntry'

import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav>
            <NavBar />
          </nav>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/AddTrip" component={AddTrip} />
            <Route exact path="/Trip" component={Trip} />
            <Route exact path="/JournalEntry" component={JournalEntry} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
