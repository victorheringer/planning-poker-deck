import React from 'react';
import './index.css';


const DeckList = ({children, className}) => {
  return (
    <ul className={`deckList ${className}`}>{children}</ul>
  );
}

export default DeckList;