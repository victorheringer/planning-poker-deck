import ptBrJson from './../resources/il8n/pt-br.json';
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
    return { key: 'en', text: 'English' };
  }

  /**
   * @author Victor Heringer
   * 
   * Gets the key tha represent brazilian portuguese language
   * 
   * @return {String}
   */
  static ptBr() {
    return { key: 'pt_br', text: 'Portugês (Brasil)' };
  }

  /**
   * @author Victor Heringer
   * 
   * Gets text based on given language
   * 
   * @return {Object}
   */
  static get(lang) {
    const data = { 
      [I18n.ptBr()['key']]: ptBrJson, 
      [I18n.en()['key']]: enJson
    };
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
    return [
      I18n.en(), 
      I18n.ptBr()
    ];
  }
}

export default I18n;