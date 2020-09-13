import React, { Component } from 'react';
import classes from './LandingPage.css'

import SpotifyLogin from './SpotifyLogin/SpotifyLogin'
import Nav from '../UI/Nav/Nav'
import Description from './Description/Description'


class LandingPage extends Component {


  render() {
      return(
        <div className={classes.landingPage}>
            <div classes={classes.Content}>
                <Nav />
                <SpotifyLogin click={this.props.clicked}/>
                <Description />
            </div>
        </div>
      )
  }
}

export default LandingPage;