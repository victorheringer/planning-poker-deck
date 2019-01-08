import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DeckCollection from './helpers/DeckCollection';
import { decks } from './helpers/DeckList.js';

if (!DeckCollection.all() ) {
  DeckCollection.put(decks);
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
