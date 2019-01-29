import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Component to render a input grouped to a button
 * 
 * @prop {String} placeholder
 * @prop {String} value
 * @prop {Function} onClick
 * @prop {Function} onChange
 * @prop {Array} children
 * @prop {String} type
 * @prop {String} name
 */
const ButtonInput = ({ 
  placeholder, 
  value, 
  onClick, 
  onChange, 
  children,
  type,
  name
}) => {
  return (
    <div className="buttonInputWrapper">
      <div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
      <div>
        <button className="addButton ripple" onClick={onClick} >
          {children}
        </button>
      </div>
    </div>
  );
}

ButtonInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default ButtonInput;