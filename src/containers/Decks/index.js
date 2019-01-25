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
      <React.Fragment>
        
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
        <DeckList>
          { this.props.decks.map(deck => 
            <DeckItem key={deck.id} title={deck.description}>
              <Radio active={deck.favorite} id={deck.id} onClick={this.props.favorite} />
              <DeckListSubItem>
                <h4><FontAwesomeIcon icon={"share-alt"} /> &nbsp; Share</h4>
              </DeckListSubItem>
              <DeckListSubItem>
                <h4><FontAwesomeIcon icon={"trash"} /> &nbsp; Delete</h4>
              </DeckListSubItem>
            </DeckItem>
          )}
        </DeckList>
        <div className="resetButtonWrapper">
          <button className="resetButton" onClick={this.props.handleConfirmBoxResetDeck}>
            <FontAwesomeIcon icon="sync-alt" /> &nbsp;
            {this.props.text.btn.refresh}
          </button>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Decks;