import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import update from 'immutability-helper';
import './App.css';

/** Components */
import Navbar from './components/Navbar';
import ConfirmBox from './components/ConfirmBox';

/** Containers */
import Play from './containers/Play';
import Decks from './containers/Decks';
import Config from './containers/Config';

/** Helpers */
import I18n from './helpers/I18n';
import decks from './data/decks.json';
import DeckFactory from './helpers/DeckFactory';
import DeckCollection from './helpers/DeckCollection';
import ConfigCollection from './helpers/ConfigCollection';

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
    lang: this.props.lang,
    grid: this.props.grid,
    grids: this.props.grids,
    canShare: navigator.share ? true : false,
    text: this.props.text
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
   * Loads all texts based on given language
   * 
   * @todo Change to context api
   * 
   * @return {void}
   */
  loadText = (lang) => {
    this.setState(update( this.state, { $set: { text: I18n.get(lang) } } ) );
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
    this.setState(update(this.state, 
      { decks: { $set: decks }, current: { $set: favorite } }
    ));
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
   * Handles language selection
   * 
   * @param {Object} event 
   * 
   * @return {void}
   */
  handleSelectLang = (event) => {
    const config = ConfigCollection.all();
    config.lang = event.target.value;
    ConfigCollection.put(config)
    this.loadText(event.target.value);
    this.handleChange(event);
  }

  /**
   * @author Victor Heringer
   * 
   * Handles language selection
   * 
   * @param {Object} event 
   * 
   * @return {void}
   */
  handleSelectGrid = (event) => {
    const config = ConfigCollection.all();
    config.grid = event.target.value;
    ConfigCollection.put(config)
    this.handleChange(event);
  }

  /**
   * @author Victor Heringer
   * 
   * Handles push card to decks
   * 
   * @param {Object} event 
   * 
   * @return {void}
   */
  handlePushCardToCurrentDeck = (event, card) => {
    let deck = DeckCollection.getFavorite();
    deck.cards.push({ value: 'Ok' , icon: false });
    DeckCollection.update(deck);
    this.loadDecks();
  }

  /**
   * @author Victor Heringer
   * 
   * Set the values to confirm box related to reset deck action
   * 
   * @return {void}
   */
  handleConfirmBoxResetDeck = () => {

    const { text } = this.state;

    const toUpdate = {
      showModal: { $set: !this.state.showModal },
      titleModal: { $set: text.confirmBox.refresh.title },
      messageModal: { $set: text.confirmBox.refresh.message },
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
  renderPlay = () => <Play 
    {...this.state} 
    addCard={this.handlePushCardToCurrentDeck}
    loadDecks={this.loadDecks}
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
    share={this.shareDeck}
    {...this.state}
  />;

  /**
   * @author Victor Heringer
   * 
   * Renders the config container
   */
  renderConfig = () => <Config 
    {...this.state} 
    handleSelectLang={this.handleSelectLang}
    handleSelectGrid={this.handleSelectGrid}
  />;

  render() {

    const confirmBox = <ConfirmBox
      title={this.state.titleModal}
      message={this.state.messageModal}
      show={this.state.showModal}
      onCancel={this.cancelModal}
      onConfirm={this.state.confirmModal}
      text={this.state.text}
    />;

    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar {...this.state} />
            <div className='app'>
              <Route path="/" exact render={this.renderPlay} />
              <Route path="/decks" exact render={this.renderDecks} />
              <Route path="/config" exact render={this.renderConfig} />
              {confirmBox}
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
