import React from 'react'

export const Guess = () => {

    username = JSON.parse(properties.name.value);
    score = JSON.parse(properties.score.value);

    return(
        <div>
            <h3>{username} : {score}</h3>
        </div>
    );
}