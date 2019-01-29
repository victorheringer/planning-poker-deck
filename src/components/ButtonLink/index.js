import React from 'react';
import PropTypes from 'prop-types';
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

ButtonLink.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
};

export default ButtonLink;