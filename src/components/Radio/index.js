import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Radio component
 * 
 * @prop {String} id 
 * @prop {bool} active
 * @prop {Function} onClick
 */
const Radio = ({ id, active, onClick }) => {
  const activeClass = active ? 'active radio' : 'inactive radio';
  return <div className={activeClass} onClick={() => onClick(id)}></div>;
}

Radio.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Radio;