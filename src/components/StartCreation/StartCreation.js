import React, { useState } from 'react';
import classes from './StartCreation'
import ChoiceModal from './ChoiceModal/ChoiceModal'


const startCreation = ( props ) => {
    // TODO: useState to pick which one is chosen

    return (
        <div>
            <ChoiceModal />
        </div>
    )
}

export default startCreation;