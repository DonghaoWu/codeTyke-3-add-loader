import React from 'react';

import './Styles.scss';

const SubmitButton = (props) => {
  return (
    <div>
      <div className={`submitButton`} onClick={props.handleSubmit} >
        <div className={`container`}>
          {props.label}
          {
            props.loading && <img className='loader' src='assets/loadingLogo.png' alt='loading-loader' />
          }
        </div>
      </div>
    </div>
  )
}

export default SubmitButton;