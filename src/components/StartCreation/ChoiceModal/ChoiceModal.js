import React from 'react';
import classes from './ChoiceModal.css'

const choiceModal = ( props ) => (
    <div className={classes.Modal}>
        <div className={classes.Parent}>
            <div className={classes.Content}>
                <p>Welcome! You've successfully signed in.</p>   
                <h2>How would you like to proceed?</h2>
                <button className={classes.Radio}>Create New Room</button>   
                <button className={classes.Radio}>Join an Existing One</button>       
            </div>
        </div>
    </div>
)

export default choiceModal;