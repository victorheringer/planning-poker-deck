/**
 * @author Victor Heringer
 * 
 * Simple wrapper to use local storage (web storage) as a database
 */
class Collection {

  /**
   * @author Victor Heringer
   * 
   * Puts a value at local storage with given key
   * 
   * @param {String} key 
   * @param {Mix} value 
   */
  static put(key, value) {
    console.log(value);
    const asString = Collection.isJson(value) ? JSON.stringify(value) : value;
    localStorage.setItem(key, asString);
  }

  /**
   * @author Victor Heringer
   * 
   * Finds value at local storage with given key
   * 
   * @param {String} key 
   * 
   * @return {Mix} Parsed data if it is an object or the raw value if is not
   */
  static find(key) {
    const value = localStorage.getItem(key);
    return Collection.isJson(value) ? JSON.parse(value) : value;
  }

  /**
   * @author Victor Heringer
   * 
   * Removes the value from local storage that has the given key
   * 
   * @param {String} key 
   */
  static delete(key) {
    localStorage.removeItem(key);
  }

  /**
   * @author Victor Heringer
   * 
   * Checks if the given value is an object. It returns true even if the value
   * is a json string.
   * 
   * @param {Mix} value 
   */
  static isJson(value) {
    if (typeof value === 'object') return true;
    
    try {
      JSON.parse(value);
    } catch (e) {
      return false;
    }

    return true;
  }

  /**
   * @author Victor Heringer
   * 
   * Current timestamp
   * 
   * @return {Int} 
   */
  static generateId() {
    return + new Date();
  }
}

export default Collection;