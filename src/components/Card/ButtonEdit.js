import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonEdit = ({ className, handleClick, time }) => {
  return (
    <div className="close">
      <button
        className={className}
        onClick={handleClick}
        style={{ transitionDuration: `${time}s` }}
      >
        <FontAwesomeIcon className="icon" icon={"times"} />
      </button>
    </div>
  );
}

export default ButtonEdit;