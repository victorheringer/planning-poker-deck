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
   * @param {Mix} value 
   * @param {Bool} icon 
   */
  static create(value, icon) { 
    return { value: value, icon: icon } 
  };
}

export default CardFactory;