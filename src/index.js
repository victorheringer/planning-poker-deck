import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DeckCollection from './helpers/DeckCollection';
import ConfigCollection from './helpers/ConfigCollection';
import Collection from './helpers/Collection';
import decks from './data/decks.json';
import config from './data/config.json';
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
  faTimes
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEdit);
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

const VERSION ='0.0.2';

if( Collection.find('version') !== VERSION ) {
  Collection.delete('version');
  ConfigCollection.delete();
  DeckCollection.delete();
  Collection.put('version',VERSION);
}

if (!DeckCollection.all() ) {
  DeckCollection.put(decks);
}

if (!ConfigCollection.all()) {
  ConfigCollection.put(config);
}

ReactDOM.render(
  <App 
    text={I18n.get(ConfigCollection.all().lang)} 
    lang={ConfigCollection.all().lang}
    grids={[3,4]}
    grid={ConfigCollection.all().grid}
    themes={['tech', 'dark']}
    theme={ConfigCollection.all().theme}
  />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
