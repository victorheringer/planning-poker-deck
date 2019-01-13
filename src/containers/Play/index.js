import React from 'react';
import Deck from './../../components/Deck';

/**
 * @author Victor Heringer
 * 
 * Container for play
 */
const Play = ({ current, text }) => (
  <div>
    <Deck text={text} initialDeck={current} cards={current.cards} />
  </div>
);

export default Play;