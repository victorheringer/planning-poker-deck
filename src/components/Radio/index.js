import React from 'react';
import './index.css';


const Radio = ({ id, active, onClick }) => {

  const activeClass = active ? 'active radio' : 'inactive radio';

  return <div className={activeClass} onClick={() => onClick(id)}></div>;
}

export default Radio;