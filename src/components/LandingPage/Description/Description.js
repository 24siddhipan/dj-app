import React from 'react';
import classes from './Description.css'

const description = ( props ) => (
    <div className={classes.Description}>
        <div className={classes.Point}>
            <h4>Collaborative</h4>
            <p>DJ Room allows you to harness the power of seamless collaborative listening. Simply create a new listening room or enter an old one, and start streaming!</p>
        </div>
        <div className={classes.Point}>
            <h4>Secure</h4>
            <p>None of your Spotify Data is permanently stored by our app. You remain logged in until you navigate away from your listening session, allowing you to enjoy collaborative music and sleep at night.</p>
        </div>
        <div className={classes.Point}>
            <h4>Open Source</h4>
            <p>
                Check out the open source code on GitHub. This web app consumes endpoints of the Spotify API, and uses Firebase's realtime database to manage users and their 
                interaction with rooms.
            </p>
        </div>
    </div>
)

export default description;