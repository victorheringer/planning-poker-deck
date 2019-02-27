import React from 'react';
import Deck from './../../components/Deck';

/**
 * @author Victor Heringer
 * 
 * Container for play
 */
const Play = ({ current, text, addCard, loadDecks, gridSize, handleSelectCard }) => {
  return (
    <div>
      <Deck 
        addCard={addCard} 
        text={text} 
        initialDeck={current} 
        cards={current.cards} 
        loadDecks={loadDecks} 
        gridSize={gridSize}
        handleSelectCard={handleSelectCard}
      />
    </div>
  );
}

export default Play;