import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'minimoon/build/static/css/index.css';
import './moon-template.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DeckCollection from './helpers/DeckCollection';
import ConfigCollection from './helpers/ConfigCollection';
import Collection from './helpers/Collection';
import seed from './resources/seed.json';
import settings from './resources/settings.json';
import I18n from './helpers/I18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft,
  faInfoCircle,
  faEllipsisV,
  faListUl,
  faTrash,
  faSyncAlt,
  faShareAlt,
  faAngleRight,
  faCog,
  faInfinity,
  faFolderOpen,
  faBoxOpen,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEdit);
library.add(faBoxOpen);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faInfoCircle);
library.add(faEllipsisV);
library.add(faListUl);
library.add(faTrash);
library.add(faSyncAlt);
library.add(faShareAlt);
library.add(faAngleRight);
library.add(faCog);
library.add(faInfinity);
library.add(faFolderOpen);
library.add(faTimes);
library.add(faGithub);


const VERSION = '0.0.4';

if( Collection.find('version') !== VERSION ) {
  Collection.delete('version');
  ConfigCollection.delete();
  DeckCollection.delete();
  Collection.put('version',VERSION);
}

if (!DeckCollection.all()) {
  DeckCollection.put(seed.decks);
}

if (!ConfigCollection.all()) {
  ConfigCollection.put(seed.settings);
}

const userSettings = ConfigCollection.all();

ReactDOM.render(
  <App 
    text={I18n.get(userSettings.lang)} 
    lang={userSettings.lang}
    grids={settings.grids}
    grid={userSettings.grid}
    themes={settings.themes}
    theme={userSettings.theme}
  />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
