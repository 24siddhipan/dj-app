import React, { Component } from 'react';
import './App.css';

// TODO: set loginLink
const loginLink = 'null';


class App extends Component {
  render() {
    return (
      <div className="App">
        <a href={loginLink}>
          <button> Log in with Spotify</button>
        </a>
      </div>
    );
  }
}

export default App;
