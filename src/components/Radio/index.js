import React from 'react';
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

export default Radio;