import React from 'react';
import StatrButton from '../button/StatrButton';

import './Styles.scss';

const Intro = ({gameStatus, setGameStatus}) => {

    return (
        <div className="introContainer">
                <div className="introContainer--logo">
                    <img alt="logo" src="assets/logo.png" />            
                </div>
                <div className="introContainer--message">
                    {gameStatus.message}
                </div>
                <StatrButton label="start" handleSubmit={()=> setGameStatus({loadIntro: false})} />
        </div>
    )
}

export default Intro
