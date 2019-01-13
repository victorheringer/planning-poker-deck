import Collection from './Collection';

/**
 * @author Victor Heringer
 *
 * Handle the creation of deck object
 * 
 * @todo Change to deck class
 */
class DeckFactory {

  /**
   * @author Victor Heringer
   * 
   * Creates a new card Object
   * 
   * @param {Mix} value 
   * @param {Bool} icon 
   * 
   * @return {Object}
   */
  static create(name) {
    return { 
      "id": Collection.generateId(),
      "name": name,
      "description": name,
      "favorite": false,
      "pattern": "tech-pattern",
      "cards": []
    };
  };
}

export default DeckFactory;