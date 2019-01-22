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
   * Push a new deck to local storage
   * 
   * @param {Array} decks
   * @param {Bool} begin If true, put the deck at start of collection
   */
  static push(deck, begin) {
    const decks = Collection.find('decks');
    begin ? decks.unshift(deck) : decks.push(deck);
    DeckCollection.put(decks);
  }

  static delete() {
    Collection.delete('decks');
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
      if(decks[i].id === deck.id) {
        decks[i] = deck;
      }
    }

    DeckCollection.put(decks);
  }

  static find(id) {
    
    let decks = Collection.find('decks');

    for (let i = 0; i < decks.length; i++) {
      if (decks[i].id === id) {
        return decks[i];
      }
    }
  }
  
  static getFavorite() {
    
    let decks = Collection.find('decks');

    for (let i = 0; i < decks.length; i++) {
      if (decks[i].favorite) {
        return decks[i];
      }
    }
  }

  static setFavorite(id) {

    let decks = Collection.find('decks');
    let favorite = 0;

    for (let i = 0; i < decks.length; i++) {
      decks[i].favorite = false;
      if (decks[i].id === id) {
        favorite = i; 
      }
    }

    decks[favorite].favorite = true;
    DeckCollection.put(decks);
  }
}

export default DeckCollection;