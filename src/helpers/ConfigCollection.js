import Collection from './Collection';

/**
 * @author Victor Heringer
 *
 * Simple wrapper to manage config at local storage
 */
class ConfigCollection {

  /**
   * @author Victor Heringer
   * 
   * Gets all cofnigs at local storage
   * 
   * @return {Object}
   */
  static all() {
    return Collection.find('config');
  }

  /**
   * @author Victor Heringer
   * 
   * Add config to local storage
   * 
   * @param {Object} config 
   */
  static put(config) {
    Collection.put('config', config);
  }
}

export default ConfigCollection;