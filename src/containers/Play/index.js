import React, { Component } from 'react';
import Deck from './../../components/Deck';
import DeckCollection from '../../services/DeckCollection';

/**
 * @author Victor Heringer
 * 
 * Container for play
 */
class Play extends Component {

  constructor(props) {
    super(props);
    this.state = { decks: [] };
  }

  componentWillMount( ) {
    this.setState({ decks: DeckCollection.all() });
  }

  render() {

    return(
      <div className='app'>
        <Deck cards={this.state.decks[0].cards} />
      </div>
    );
  }
}

export default Play;