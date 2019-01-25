import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Radio from './../../components/Radio';
import DeckList from './../../components/DeckList';
import DeckItem from './../../components/DeckList/DeckItem';
import DeckListSubItem from './../../components/DeckList/DeckSubItem';
import ButtonLink from './../../components/ButtonLink';
import ButtonInput from './../../components/ButtonInput';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Container component to manage decks
 */
class Decks extends Component {

  render() {
    return (
      <div className="decks">
        <ButtonInput 
          placeholder={this.props.text.input.placeholder.deck}
          value={this.props.deckNameInput}
          onClick={event => this.props.createDeck(event, this.props.deckNameInput)}
          onChange={this.props.handleChange}
          type='text'
          name='deckNameInput'
        >
          {this.props.text.btn.add}
        </ButtonInput>
        <DeckList>
          { this.props.decks.map(deck => 
            <DeckItem key={deck.id} title={deck.description}>
              <Radio active={deck.favorite} id={deck.id} onClick={this.props.favorite} />
              <DeckListSubItem>
                <h4 onClick={this.props.shareDeck}>
                  <FontAwesomeIcon icon={"share-alt"} /> 
                  &nbsp; {this.props.text.deckList.share}
                </h4>
              </DeckListSubItem>
              <DeckListSubItem>
                <h4 onClick={ () => this.props.deleteDeck( deck.id ) }>
                  <FontAwesomeIcon icon={"trash"} /> 
                  &nbsp; {this.props.text.deckList.delete}
                </h4>
              </DeckListSubItem>
            </DeckItem>
          )}
        </DeckList>
        <ButtonLink theme="danger" onClick={this.props.handleConfirmBoxResetDeck}>
            <FontAwesomeIcon icon="sync-alt" />
            &nbsp; {this.props.text.btn.refresh}
        </ButtonLink>
      </div>
    );
  }
}

export default Decks;