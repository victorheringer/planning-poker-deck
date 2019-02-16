import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'minimoon/build/static/css/index.css';
import './moon-template.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DeckCollection from './helpers/DeckCollection';
import ConfigCollection from './helpers/ConfigCollection';
import seed from './resources/seed.json';
import settings from './resources/settings.json';
import I18n from './helpers/I18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft,
  faTrash,
  faSyncAlt,
  faShareAlt,
  faAngleRight,
  faCog,
  faInfinity,
  faBoxOpen,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEdit);
library.add(faBoxOpen);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faTrash);
library.add(faSyncAlt);
library.add(faShareAlt);
library.add(faAngleRight);
library.add(faCog);
library.add(faInfinity);
library.add(faTimes);
library.add(faGithub);

const VERSION = '0.0.5';

let userSettings = ConfigCollection.all();

if ( userSettings && ( userSettings.version !== VERSION ) ) {
  ConfigCollection.delete();
  DeckCollection.delete();
  DeckCollection.put(seed.decks);
  ConfigCollection.put(seed.settings);
}

if (!DeckCollection.all()) {
  DeckCollection.put(seed.decks);
}

if (!ConfigCollection.all()) {
  ConfigCollection.put(seed.settings);
}

userSettings = ConfigCollection.all();

ReactDOM.render(
  <App 
    text={I18n.get(userSettings.lang)} 
    lang={userSettings.lang}
    grids={settings.grids}
    grid={userSettings.grid}
    themes={settings.themes}
    theme={userSettings.theme}
    version={userSettings.version}
  />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
