import React from 'react';
import I18n from './../../helpers/I18n';

const Config = ({ lang, handleSelectLang }) => {

  return ( 
    <React.Fragment>
      <select name="lang" value={lang} onChange={handleSelectLang}>
        {I18n.available().map( lang =>
          <option key={lang} value={lang}>{lang}</option> )
        }
      </select>
    </React.Fragment>
  );
}

export default Config;