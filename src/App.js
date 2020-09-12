import React, { Component } from 'react';
import './App.css';
import Spotify from './auth/auth';

import LandingPage from './components/LandingPage/LandingPage'

let accessToken;

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
