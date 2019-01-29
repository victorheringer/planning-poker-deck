import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

/**
 * @author Victor Heringer
 * 
 * Toastr component inspired by material design
 * 
 * @prop {Boolean} show
 * @prop {Function} handleClose
 * @prop {String} actionText
 * @prop {String} messageText
 */
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

Toastr.propTypes = {
  show: PropTypes.bool.isRequired, 
  handleClose: PropTypes.func.isRequired, 
  actionText: PropTypes.string.isRequired, 
  messageText: PropTypes.string.isRequired
};

export default Toastr;