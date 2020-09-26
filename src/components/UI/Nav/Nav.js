import React from 'react';
import classes from './Nav.css'

const nav = ( props ) => (
    <div className={classes.Header}>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
        <h3>
            <img src="" alt="" />
        </h3>
    </div>
)

export default nav;