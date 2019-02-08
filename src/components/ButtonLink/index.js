import React from 'react';
import { ThemeContext } from './../../Contexts';
import PropTypes from 'prop-types';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Component to render a button like a link (without border, etc)
 * 
 * @prop {Array} children
 * @prop {Function} onClick 
 * @prop {String } type
 */
const ButtonLink = ({ children, onClick, type }) => {
  return(
    <ThemeContext.Consumer>
      {theme => (
        <div className={ "buttonLinkWrapper " + theme }>
          <button className={"resetButton " + type} onClick={onClick}>
            {children}
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default ButtonLink;