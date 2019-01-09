import React, {Component} from 'react';
import DeckCollection from './../../helpers/DeckCollection';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Container component to manage decks
 */
class Decks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="decks">
        <div className="addDeck">
          <div>
            <input type="text" />
          </div>
          <div>
            <button>Adicionar</button>
          </div>
        </div>
        { this.props.decks.map(deck => <h2>{deck.description}</h2>)}
      </div>
    );
  }
}

export default Decks;