import React from 'react';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Component to render a button like a link (without border, etc)
 * 
 * @prop {Array} children
 * @prop {Function} onClick 
 * @prop {String } theme
 */
const ButtonLink = ({ children, onClick, theme }) => {
  return(
    <div className="buttonLinkWrapper">
      <button className={ "resetButton " + theme } onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default ButtonLink;