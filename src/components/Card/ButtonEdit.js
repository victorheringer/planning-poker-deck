import React from 'react';

const ButtonEdit = ({ className, handleClick, time }) => {
  return (
    <div className="close">
      <button
        className={className}
        onClick={handleClick}
        style={{ transitionDuration: `${time}s` }}
      >X</button>
    </div>
  );
}

export default ButtonEdit;