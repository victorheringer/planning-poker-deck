import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';
import Radio from './../../components/Radio';
import DeckList from './../../components/DeckList';
import DeckItem from './../../components/DeckList/DeckItem';
import DeckListSubItem from './../../components/DeckList/DeckSubItem';

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
              placeholder={this.props.text.input.placeholder.deck}
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
            {this.props.text.btn.add}
          </button>
          </div>
        </div>
        <ul>
          { this.props.decks.map(deck => 
            <li key={deck.id}>
              <span onClick={ () => this.props.share( deck.id ) }>  
                <FontAwesomeIcon icon={"angle-right"}/> &nbsp;
                {deck.description}
              </span>
              <Radio active={deck.favorite} id={deck.id} onClick={this.props.favorite} />
            </li>
          )}
        </ul>
        <div className="resetButtonWrapper">
          <button className="resetButton" onClick={this.props.handleConfirmBoxResetDeck}>
            <FontAwesomeIcon icon="sync-alt" /> &nbsp;
            {this.props.text.btn.refresh}
          </button>
        </div>
      </div>
    );
  }
}

export default Decks;