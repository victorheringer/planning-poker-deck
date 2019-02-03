/**
 * @author Victor Heringer
 *
 * Handle the creation of cards object
 * 
 * @todo Change to card class
 */
class CardFactory {

  /**
   * @author Victor Heringer
   * 
   * Creates a new card Object
   * 
   * @param {Number} id
   * @param {String} color
   * @param {Mix} value 
   * @param {Bool} icon 
   * 
   * @return {Object}
   */
  static create(id, color, value, icon) { 
    return { id: id, color: color ,value: value, icon: icon } 
  };
}

export default CardFactory;