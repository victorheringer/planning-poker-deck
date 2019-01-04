import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './patterns.css';

/**
 * @author Victor Heringer
 * 
 * Renders the cards's back face
 */
const BackFace = ({ value, icon, pattern }) => {
  return (
    <div className={"back " + pattern} >
      <h3 className="cardTitle cardNumber">
        {icon ? <FontAwesomeIcon icon={value} /> : value}
      </h3>
    </div>
  );
}

BackFace.propTypes = {
  value: PropTypes.string,
  icon: PropTypes.bool,
  pattern: PropTypes.string
};

BackFace.defaultProps = {
  value: "",
  icon: false,
  pattern: "tech-pattern"
};

export default BackFace;