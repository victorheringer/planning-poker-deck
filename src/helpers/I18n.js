import ptJson from './../resources/il8n/pt-br.json';
import enJson from './../resources/il8n/en.json';

/**
 * @author Victor Heringer
 * 
 * Simple class to handle text translations
 */
class I18n {

  /**
   * @author Victor Heringer
   * 
   * Gets the key tha represent english language
   * 
   * @return {String}
   */
  static en() {
    return 'en';
  }

  /**
   * @author Victor Heringer
   * 
   * Gets the key tha represent brazilian portuguese language
   * 
   * @return {String}
   */
  static br() {
    return 'pt_br';
  }

  /**
   * @author Victor Heringer
   * 
   * Gets text based on given language
   * 
   * @return {Object}
   */
  static get(lang) {
    const data = { [I18n.br()]: ptJson, [I18n.en()]: enJson };
    return data[lang];
  }

  /**
   * @author Victor Heringer
   *
   * Gets all available languages
   *
   * @return {Array}
   */
  static available() {
    return [I18n.en(), I18n.br()];
  }
}

export default I18n;