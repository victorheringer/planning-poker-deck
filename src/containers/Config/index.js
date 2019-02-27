import React from 'react';
import I18n from './../../helpers/I18n';
import { ThemeContext } from './../../Contexts';
import './index.css';

const Config = ({ 
  lang, 
  handleSelectLang, 
  grids,
  grid,
  handleSelectGrid,
  themes,
  theme,
  handleSelectTheme,
  text,
  version
}) => {

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="config">
          <ul className={`configList ${theme}`}>
            <li>
              {text.config.list.version}
              <span style={{ float: 'right' }}>{version}</span>
            </li>
            <li>
              {text.config.list.language}
              <select name="lang" value={lang} onChange={handleSelectLang}>
                {I18n.available().map(lang =>
                  <option key={lang.key} value={lang.key}>{lang.text}</option>)
                }
              </select>
            </li>
            <li>
              {text.config.list.grid}
              <select name="grid" value={grid} onChange={handleSelectGrid}>
                {grids.map(grid =>
                  <option key={grid} value={grid}>
                    {grid}
                  </option>
                )}
              </select>
            </li>
            <li>
              {text.config.list.theme}
              <select name="theme" value={theme} onChange={handleSelectTheme}>
                {themes.map(theme =>
                  <option key={theme.key} value={theme.key}>
                    {theme.name}
                  </option>
                )}
              </select>
            </li>
          </ul>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Config;