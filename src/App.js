import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <LandingPage />
      HELLO WORLD!!!
      </div>
    );
  }
}

export default App;
