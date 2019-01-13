import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import Radio from './../../components/Radio';

/**
 * @author Victor Heringer
 * 
 * Container component to manage decks
 */
class Decks extends Component {

  render() {
    return (
      <div className="decks">
        <div className="addDeck">
          <div>
            <input 
              type="text" 
              placeholder="Deck"
              value={this.props.deckNameInput} 
              name="deckNameInput" 
              onChange={this.props.handleChange} 
            />
          </div>
          <div>
            <button 
              className="addButton ripple" 
              onClick={event => this.props.createDeck(event, this.props.deckNameInput)}
            >
            Adicionar
          </button>
          </div>
        </div>
        <ul>
          { this.props.decks.map(deck => 
            <li key={deck.id}>
              <span onClick={ () => this.props.share( deck.id ) }>{deck.description}</span>
              <Radio active={deck.favorite} id={deck.id} onClick={this.props.favorite} />
            </li>
          )}
        </ul>
        <div className="resetButtonWrapper">
          <button className="resetButton" onClick={this.props.handleConfirmBoxResetDeck}>
            <FontAwesomeIcon icon="sync-alt" /> &nbsp;
            Resetar Decks
          </button>
        </div>
      </div>
    );
  }
}

export default Decks;