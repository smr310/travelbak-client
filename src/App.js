import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

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
