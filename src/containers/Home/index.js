import React, { Component } from 'react';
import Deck from './../../components/Deck';
import CardFactory from './../../factories/CardFactory';
import Database from './../../services/Database';

/**
 * @author Victor Heringer
 * 
 * Container for home
 */
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = { decks: [] };
  }

  componentWillMount( ) {
    this.setState({ decks: Database.find('deck', true) });
  }

  render() {

    return(
      <div className='app'>
        <Deck cards={this.state.decks[0].cards} />
      </div>
    );
  }
}

export default Home;