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
      "usesThemeColor": true,
      "cards": [
        {
          "id": 1549212587,
          "value": "infinity",
          "icon": true,
          "color": false
        },
        {
          "id": 1549212588,
          "value": "?",
          "icon": false,
          "color": false
        },
        {
          "id": 1549212589,
          "value": "mug-hot",
          "icon": true,
          "color": false
        }
      ]
    }
  };
}

export default DeckFactory;