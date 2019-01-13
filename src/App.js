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
 * Hold all functions and a 'global state'. Since this is a tiny application,
 * there is no need to use redux or complicate too much to handle states.
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
    deckNameInput: '',
    canShare: navigator.share ? true : false
  };

  /**
   * @author Victor Heringer
   * 
   * Lifecycle method to set some initial states
   * 
   * @return {void}
   */
  componentWillMount() {
    this.loadDecks();
  }

  /**
   * @author Victor Heringer
   * 
   * Loads all decks
   * 
   * @return {void}
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
   * 
   * @return {void}
   */
  createDeck = (event, name) => {
    event.preventDefault();

    if( name ) {
      const deck = DeckFactory.create(name);
      DeckCollection.push(deck, true);
      this.setState({ deckNameInput: '' });
      this.loadDecks();
    }
  }

  /**
   * @author Victor Heringer
   * 
   * Turns a deck to favorite. The favorite deck will be used to play.
   * 
   * @param {Number} id
   * 
   * @return {void}
   */
  favorite = (id) => {
    DeckCollection.setFavorite(id);
    this.loadDecks();
  }

  /**
   * @author Victor Heringer
   * 
   * Handles form input change
   * 
   * @param {Object} event 
   * 
   * @return {void}
   */
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  /**
   * @author Victor Heringer
   * 
   * Set the values to confirm box related to reset deck action
   * 
   * @return {void}
   */
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
   * @return {void}
   */
  resetDecks = () => {
    DeckCollection.put(decks);
    this.setState(update(this.state, { 
      decks: { $set: decks },
      showModal: { $set: !this.state.showModal }
    }));
  }

  /**
   * @author Victor Heringer
   * 
   * Share a deck through other apps
   * 
   * @return {void}
   */
  shareDeck = (id) => {
    let deck = DeckCollection.find(id);
    deck.favorite = false;
    this.state.canShare && navigator.share({ text: JSON.stringify(deck) });
  }

  /**
   * @author Victor Heringer
   * 
   * Closes confirm box modal
   * 
   * @return {void}
   */
  cancelModal = () => {
    this.setState(update(this.state, { showModal: { $set: false } }));
  }

  /**
   * @author Victor Heringer
   * 
   * Renders the play container
   */
  renderPlay = () => <Play {...this.state} />;

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
    share={this.shareDeck}
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
