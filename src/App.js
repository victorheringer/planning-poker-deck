import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import update from 'immutability-helper';
import './App.css';

/** Components */
import Navbar from './components/Navbar';
import ConfirmBox from './components/ConfirmBox';

/** Containers */
import Play from './containers/Play';
import Rules from './containers/Rules';
import Decks from './containers/Decks';

/** Helpers */
import { decks } from './helpers/DeckList';
import DeckFactory from './helpers/DeckFactory';
import DeckCollection from './helpers/DeckCollection';

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
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faInfoCircle);
library.add(faEllipsisV);
library.add(faListUl);
library.add(faTrash);
library.add(faSyncAlt);
library.add(faShareAlt);

/**
 * @author Victor Heringer
 * 
 * Hold all functions and a 'global state' since this is a tiny application
 */
class App extends Component {

  /**
   * App state
   * 
   * @param {Object}
   */
  state = { 
    decks: [], 
    current: {}, 
    showModal: false, 
    messageModal: '',
    confirmModal: undefined, 
    titleModal: '',
    deckNameInput: ''
  };

  /**
   * @author Victor Heringer
   * 
   * Lifecycle method to set some initial states
   */
  componentWillMount() {
    this.loadDecks();
  }

  /**
   * @author Victor Heringer
   * 
   * Loads all decks
   */
  loadDecks = () => {
    const decks = DeckCollection.all();
    const favorite = DeckCollection.getFavorite();
    this.setState({ decks: decks, current: favorite });
  }

  /**
   * @author Victor Heringer
   * 
   * Add a deck to state and local storage
   * 
   * @param {Object} deck 
   */
  createDeck = (event, name) => {
    if( !name ) return;
    const deck = DeckFactory.create(name);
    DeckCollection.push(deck, true);
    this.setState({ deckNameInput: '' });
    this.loadDecks();
  }

  favorite = (id) => {
    DeckCollection.setFavorite(id);
    this.loadDecks();
  }

  /**
   * @author Victor Heringer
   * 
   * Updates a deck at state and local storage
   * 
   * @param {Object} deck 
   */
  putDeck(deck) {

  }

  /**
   * @author Victor Heringer
   * 
   * Removes a deck from state and local storage
   * 
   * @param {Object} deck 
   */
  deleteDeck(deck) {
  
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleConfirmBoxResetDeck = () => {
    const toUpdate = {
      showModal: { $set: !this.state.showModal },
      titleModal: { $set: "Resetar decks" },
      messageModal: { $set: "Esta ação não poderá ser desfeita." },
      confirmModal: { $set: this.resetDecks }
    };
    this.setState(update(this.state, toUpdate));
  }

  /**
   * @author Victor Heringer
   * 
   * Restore default values at state and local storage
   * 
   * @param {Object} deck 
   */
  resetDecks = () => {
    DeckCollection.put(decks);
    this.setState(update(this.state, { 
      decks: { $set: decks },
      showModal: { $set: !this.state.showModal }
    }));
  }

  cancelModal = () => {
    this.setState(update(this.state, { showModal: { $set: false } }));
  }

  /**
   * @author Victor Heringer
   * 
   * Renders the play container
   */
  renderPlay = () => <Play 
    {...this.state} 
  />;

  /**
   * @author Victor Heringer
   * 
   * Renders the decks container
   */
  renderDecks = () => <Decks
    handleConfirmBoxResetDeck={this.handleConfirmBoxResetDeck}
    createDeck={this.createDeck}
    handleChange={this.handleChange}
    favorite={this.favorite}
    {...this.state}
  />;

  render() {

    const confirmBox = <ConfirmBox
      title={this.state.titleModal}
      message={this.state.messageModal}
      show={this.state.showModal}
      onCancel={this.cancelModal}
      onConfirm={this.state.confirmModal}
    />;

    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar />
            <div className='app'>
              <Route path="/" exact render={this.renderPlay} />
              <Route path="/rules" exact component={Rules} />
              <Route path="/decks" exact render={this.renderDecks} />
              {confirmBox}
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
