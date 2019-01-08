import Collection from './Collection';

/**
 * @author Victor Heringer
 *
 * Simple wrapper to manage decks at local storage
 */
class DeckCollection {

  /**
   * @author Victor Heringer
   * 
   * Gets all decks at local storage
   * 
   * @return {Object}
   */
  static all() {
    return Collection.find('decks');
  }

  /**
   * @author Victor Heringer
   * 
   * Add decks to local storage
   * 
   * @param {decks} decks 
   */
  static put(decks) {
    Collection.put('decks', decks);
  }

  /**
   * @author Victor Heringer
   * 
   * Update a single deck at local storage
   * 
   * @param {Object} deck 
   */
  static update(deck) {
    
    let decks = Collection.find('decks');
    
    for (let i = 0; i < decks.length; i++ ) {
      if(decks[i].id == deck.id) {
        decks[i] = deck;
      }
    }

    DeckCollection.put(decks);
  }
}

export default DeckCollection;