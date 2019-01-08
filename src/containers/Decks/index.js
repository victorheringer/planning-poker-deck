import React, {Component} from 'react';
import DeckCollection from '../../services/DeckCollection';

class Decks extends Component {

  constructor(props) {
    super(props);
    this.state = { decks: [] };
  }

  /**
   * @author Victor Heringer
   * 
   * Lifecycle method to set some initial states
   */
  componentWillMount() {
    this.setState({ decks: DeckCollection.all() });
  }

  render() {
    return (
      <React.Fragment>
        { this.state.decks.map(deck => <h2>{deck.description}</h2>)}
      </React.Fragment>
    );
  }
}

export default Decks;