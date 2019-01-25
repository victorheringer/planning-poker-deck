import React from 'react';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Radio component
 * 
 * @props {String} id 
 * @props {bool} active
 * @props {Function} onClick
 */
const Radio = ({ id, active, onClick }) => {
  const activeClass = active ? 'active radio' : 'inactive radio';
  return <div className={activeClass} onClick={() => onClick(id)}></div>;
}

export default Radio;