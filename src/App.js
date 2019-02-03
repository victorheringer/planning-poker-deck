import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import update from 'immutability-helper';
import './App.css';

/** Components */
import NavRouter from './components/NavRouter';
import ConfirmBox from './components/ConfirmBox';
import Toastr from './components/Toastr';

/** Containers */
import Play from './containers/Play';
import Decks from './containers/Decks';
import Config from './containers/Config';

/** Contexts */
import { ThemeContext } from './Contexts';

/** Helpers */
import I18n from './helpers/I18n';
import seed from './resources/seed.json';
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
    theme: this.props.theme,
    themes: this.props.themes,
    canShare: navigator.share ? true : false,
    text: this.props.text,
    toastr: {
      show: false,
      message: '',
      action: ''
    }
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
    this.setState( state => update(state, { $set: { text: I18n.get(lang) } } ));
  }

  /**
   * @author Victor Heringer
   * 
   * Loads all decks
   * 
   * @return {void}
   */
  loadDecks = callback => {
    const decks = DeckCollection.all();
    const favorite = DeckCollection.getFavorite();
    this.setState(state => update(state, 
      { decks: { $set: decks }, current: { $set: favorite } }
    ), callback);
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
      this.loadDecks(() => this.setState({ deckNameInput: '' }));
    }
  }

  /**
   * @author Victor Heringer
   * 
   * Deletes a deck from state and local storage
   * 
   * @param {Int} id
   * 
   * @return {void}
   */
  deleteDeck = (id) => {

    const deck = DeckCollection.find(id);
    const toUpdate = DeckCollection.all().filter( deck => deck.id !== id );

    if (toUpdate.length === 0) {
      this.showToastr(this.state.text.toastr.messages.deckCantDelete);
      return
    };

    if (deck.favorite) {
      toUpdate[0].favorite = true;
    }

    DeckCollection.put(toUpdate);
    this.loadDecks(() => this.showToastr(this.state.text.toastr.messages.deckDelete));
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
   * Handles theme selection
   * 
   * @param {Object} event 
   * 
   * @return {void}
   */
  handleSelectTheme = (event) => {
    const config = ConfigCollection.all();
    config.theme = event.target.value;
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

    this.setState(state => update(state, toUpdate));
  }

  /**
   * @author Victor Heringer
   * 
   * Restore default values at state and local storage
   * 
   * @return {void}
   */
  resetDecks = () => {
    DeckCollection.put(seed.decks);
    this.setState( state => update(state, { 
      decks: { $set: seed.decks },
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
    this.setState(state => update(state, { showModal: { $set: false } }));
  }

  /**
   * @author Victor Heringer
   * 
   * Closes the toastr
   * 
   * @return {void}
   */
  handleCloseToastr = () => {
    this.setState(state => update(state, {
      toastr: {
        show: { $set: false }
      }
    }));
  }

  /**
   * @author Victor Heringer
   * 
   * Shows the toastr
   * 
   * @param {String} message
   * 
   * @return {void}
   */
  showToastr = message => {
    const closeAfter = () => {
      setTimeout( () => {
        this.setState(state => update(state, {
          toastr: { show: { $set: false } }
        }));
      }, 2000);
    }
    this.setState( state => update(state, { toastr: { 
      show: { $set: true },
      message: { $set: message },
      action: { $set: this.state.text.toastr.action }
    } }), closeAfter );
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
    gridSize={this.state.grid}
  />;

  /**
   * @author Victor Heringer
   * 
   * Renders the decks container
   */
  renderDecks = () => <Decks
    handleConfirmBoxResetDeck={this.handleConfirmBoxResetDeck}
    createDeck={this.createDeck}
    deleteDeck={this.deleteDeck}
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
    handleSelectTheme={this.handleSelectTheme}
  />;

  render() {

    const confirmBox = <ConfirmBox
      title={this.state.titleModal}
      message={this.state.messageModal}
      show={this.state.showModal}
      onCancel={this.cancelModal}
      onConfirm={this.state.confirmModal}
      text={this.state.text}
      textCancel={this.state.text.confirmBox.btn.cancel}
      textConfirm={this.state.text.confirmBox.btn.confirm}
    />;

    const toastr = <Toastr 
      show={this.state.toastr.show}
      handleClose={this.handleCloseToastr}
      actionText={this.state.toastr.action}
      messageText={this.state.toastr.message}
    />

    const theme = 'tech-pattern';

    return (
      <ThemeContext.Provider value={theme}>
        <Router>
          <div>
            <NavRouter />
            <div className='app'>
              <Route path="/" exact render={this.renderPlay} />
              <Route path="/decks" exact render={this.renderDecks} />
              <Route path="/config" exact render={this.renderConfig} />
              {confirmBox}
              {toastr}
            </div>
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}

export default App;
