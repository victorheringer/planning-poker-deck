import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Play from './containers/Play';
import Rules from './containers/Rules';
import Decks from './containers/Decks';
import DeckCollection from './helpers/DeckCollection';
import { decks } from './helpers/DeckList.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft,
  faInfoCircle,
  faEllipsisV,
  faListUl,
  faTrash
} from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faInfoCircle);
library.add(faEllipsisV);
library.add(faListUl);
library.add(faTrash);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { decks: [], current: {} };
  }

  /**
   * @author Victor Heringer
   * 
   * Lifecycle method to set some initial states
   */
  componentWillMount() {
    const decks = DeckCollection.all();
    this.setState({ decks: decks, current: decks[0] });
  }

  pushDeck(deck) {
    this.changeState( )
  }

  putDeck(deck) {

  }

  deleteDeck(deck) {
    
  }

  resetDecks() {
    DeckCollection.put(decks);
  }

  /**
   * @author Victor Heringer
   * 
   * Renders the play container
   */
  renderPlay = () => <Play {...this.state} {...this.props} />;

  /**
   * @author Victor Heringer
   * 
   * Renders the decks container
   */
  renderDecks = () => <Decks
    resetDecks={this.resetDecks} 
    {...this.state} 
    {...this.props} 
  />;

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar />
            <div className='app'>
              <Route path="/" exact render={this.renderPlay} />
              <Route path="/rules" exact component={Rules} />
              <Route path="/decks" exact render={this.renderDecks} />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
