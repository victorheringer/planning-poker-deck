import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Nav tab component
 * 
 * @props {Object} children
 * @props {String} className 
 */
const NavTab = ({ children, className }) => {
  return <div className={"tab " + className}>{children}</div>;
}

NavTab.propTypes = {
  className: PropTypes.string
};

NavTab.defaultProps = {
  className: ""
};

/**
 * @author Victor Heringer
 *
 * Nac tab item
 * 
 * @props {Object} children
 * @props {String} className
 */
const NavTabItem = ({ children, className }) => {
  return <div className={"tabItem " + className}>{children}</div>;
}

NavTabItem.propTypes = {
  className: PropTypes.string
};

NavTabItem.defaultProps = {
  className: ""
};

export { NavTab, NavTabItem };