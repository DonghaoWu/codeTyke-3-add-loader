import React from 'react';

import './Styles.scss';

const Button = (props) => {

  if (props.loading !== true && props.loading !== false) {
    return (
      <div className={"submitButton"} onClick={props.handleSubmit} >
        {props.label}
      </div>
    )
  }
  else {
    return (
      <div>
        <div className={"submitButton withLoader"} onClick={props.handleSubmit} >
          {props.label}
          {
            props.loading ?
              <img className='loader-logo loading' src='assets/loadingLogo.png' alt='loading-loader' />
              :
              <img className='loader-logo' src='assets/loadingLogo.png' alt='Loader' />
          }
        </div>
      </div>
    )
  }
}

export default Button;