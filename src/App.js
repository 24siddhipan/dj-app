import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import DecodeParams from './util/util'
import './App.css';

import LandingPage from './components/LandingPage/LandingPage'
import StartCreation from './components/StartCreation/StartCreation'
import Spotify from './auth/auth'


class App extends Component {
  state = {
    isAuthenticated: false
  }

  componentDidMount() {
    if (localStorage['accessToken'] !== 'undefined') {
      this.setState({isAuthenticated: true})
      localStorage['isAuthenticated'] = true
    }
    else {
      this.setState({isAuthenticated: false})
      localStorage['isAuthenticated'] = false;  
    }
  }

  accessSpotify = () => {
    Spotify.getAccessToken()
  }

  // add access token to localStorage
  handleToken = ( params ) => {
    localStorage.setItem('accessToken', params['access_token'])
  }
  
  render() {
    const params = DecodeParams()
    this.handleToken(params)
    console.log(this.state.isAuthenticated)
    return(
      <Switch>
        <Route exact path="/">
          {!this.state.isAuthenticated ? <Redirect to='join-or-create' /> : () => <LandingPage clicked={this.accessSpotify} />}
        </Route>
      </Switch>
    )
  }
}

export default App;
