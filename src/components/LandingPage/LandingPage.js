import React, { Component } from 'react';
import classes from './LandingPage.css'

import SpotifyLogin from './SpotifyLogin/SpotifyLogin'
import Nav from '../UI/Nav/Nav'
import Description from './Description/Description'
import Spotify from '../../auth/auth'

let accessToken;

class LandingPage extends Component {
  constructor(props) {
    super()
    this.state = {
      'access token': accessToken
    }
    this.accessSpotify = this.accessSpotify.bind(this)
  }

  accessSpotify() {
    Spotify.getAccessToken()
  }

  render() {
      return(
        <div className={classes.landingPage}>
            <div classes={classes.Content}>
                <Nav />
                <SpotifyLogin click={this.accessSpotify}/>
                <Description />
            </div>
        </div>
      )
  }
}

export default LandingPage;