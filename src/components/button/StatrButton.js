import React from 'react';

import './Styles.scss';

const StartButton = (props) => {
    return (
        <div>
            <div className={`startButton`} onClick={props.handleSubmit} >
                {props.label}
            </div>
        </div>
    )
}

export default StartButton;