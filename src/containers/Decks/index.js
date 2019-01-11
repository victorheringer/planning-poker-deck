import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <input type="text" placeholder="Deck" />
          </div>
          <div>
            <button className="addButton">Adicionar</button>
          </div>
        </div>
        <ul>
          { this.props.decks.map(deck => 
            <li key={deck.id}>
              {deck.description}
              {deck.favorite && <div className="current"></div>}
            </li>
          )}
        </ul>
        <div className="resetButtonWrapper">
          <button className="resetButton" onClick={this.props.handleConfirmBoxResetDeck}>
            <FontAwesomeIcon icon="trash" /> &nbsp;
            Resetar Decks
          </button>
        </div>
      </div>
    );
  }
}

export default Decks;