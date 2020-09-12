import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'

// TODO: set loginLink
const loginLink = 'null';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
