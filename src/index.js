import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Database from './services/Database';
import { decks } from './consts/decks.js';

const DBKey = 'deck';

if (!Database.find(DBKey) ) {
  Database.put(DBKey, decks, true);
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
