/**
 * @author Victor Heringer
 * 
 * Simple wrapper to use local storage (web storage) as a database
 */
class Database {

  static put(key, value) {
    const asString = Database.isJson(value) ? JSON.stringify(value) : value;
    localStorage.setItem(key, asString);
  }

  static find(key) {
    const value = localStorage.getItem(key);
    return Database.isJson(value) ? JSON.parse(value) : value;
  }

  static delete(key) {
    localStorage.removeItem(key);
  }

  static isJson(value) {
    if (typeof value === 'object') return true;
    try {
      JSON.parse(value);
    } catch (e) {
      return false;
    }
    return true;
  }

  static generateId() {
    return + new Date();
  }
}

export default Database;