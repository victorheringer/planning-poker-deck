import React from 'react';
import Deck from './../../components/Deck';

/**
 * @author Victor Heringer
 * 
 * Container for play
 */
const Play = ({ current }) => (
  <div className='app'>
    <Deck initialDeck={current} cards={current.cards} />
  </div>
);

export default Play;