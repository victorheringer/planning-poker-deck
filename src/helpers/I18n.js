import ptBrJson from './../resources/il8n/pt-br.json';
import esEsJson from './../resources/il8n/es-es.json';
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
  static ptBr() {
    return 'pt_br';
  }

  /**
   * @author Victor Heringer
   * 
   * Gets the key tha represent spanish spain language
   * 
   * @return {String}
   */
  static esEs() {
    return 'es_es';
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
      [I18n.ptBr()]: ptBrJson, 
      [I18n.en()]: enJson,
      [I18n.esEs()]: esEsJson 
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
      I18n.ptBr(),
      I18n.esEs()
    ];
  }
}

export default I18n;