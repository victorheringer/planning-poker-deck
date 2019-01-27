import React from 'react';
import './index.css';

const Toastr = ({ show, handleClose, actionText, messageText }) => {

  const visibility = show ? 'visible' : 'hidden';

  return (
    <div className={ 'toastr ' + visibility }>
      <div className='box'>
        <div>
          <p className='text'>{messageText}</p>
        </div>
        <div></div>
        <div className='action' onClick={handleClose}>
          <p>{actionText}</p>
        </div>
      </div>
    </div>
  )
}

export default Toastr;