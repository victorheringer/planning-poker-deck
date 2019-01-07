import Collection from './Collection';

class DeckCollection {

  static all() {
    return Collection.find('decks');
  }

  static put(decks) {
    return Collection.put('decks', decks);
  }
}

export default DeckCollection;