import React from 'react';
import './index.css';


const DeckList = ({children}) => {
  return (
    <ul className="deckList">{children}</ul>
  );
}

export default DeckList;