import React from 'react';
import classes from './SpotifyLogin.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'


const spotifyLogin = ( props ) => {
    return (
      <div className={classes.Login}>
          <h1 className={classes.Title}>DJ Room</h1>
          <p>Kick back and listen to some great music with your friends!</p>
            <a>
              <button className={classes.loginButton} onClick={props.click}>
                <FontAwesomeIcon className={classes.Icon} icon={faSpotify} />
                Login with Spotify
              </button>
            </a>
      </div>
    )
}


export default spotifyLogin;