import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default BackFace;