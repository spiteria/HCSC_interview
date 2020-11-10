import React, { useEffect } from 'react'
import guess2Tell from './Guess2Tell.json'

export const Guess = (props) => {

    let username = JSON.parse(guess2Tell.name);

    return(
        <div>
            <h3 className='user' >{username} : {props.score}</h3>
        </div>
    );
}

