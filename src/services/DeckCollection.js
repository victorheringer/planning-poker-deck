import Collection from './Collection';

class DeckCollection {

  static all() {
    return Collection.find('decks');
  }

  static put(decks) {
    return Collection.put('decks', decks);
  }

  static deleteCard(deck) {
    
    let decks = Collection.find('decks');
    
    for (let i = 0; i < decks.length; i++ ) {
      if(decks[i].id == deck.id) {
        decks[i] = deck;
      }
    }

    Collection.put('decks', decks);
  }
}

export default DeckCollection;