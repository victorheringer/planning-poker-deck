import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeckCollection from './../../helpers/DeckCollection';
import ButtonLink from './../../components/ButtonLink';
import Card from './../Card';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Renders a card deck component
 * 
 * @prop {String} numbers
 */
class Deck extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      editing: false, 
      isSelected: false,
      cardSelected: null
    };
  }

  /**
   * @author Victor Heringer
   * 
   * Toggle the deck edition
   * 
   * @param {Object} event
   */
  handleClickEdit = event => {
    this.setState({editing: !this.state.editing});
  }

  /**
   * @author Victor Heringer
   * 
   * Removes a card from current deck and updates at localstorages
   * 
   * @param {Object} event
   * @param {Object} card
   */
  handleClickRemoveCard = (event, card) => {
    const cards = this.props.cards.filter(cards => cards.value !== card);
    let deck = { ...this.props.initialDeck};
    deck.cards = cards;
    DeckCollection.update(deck);
    this.props.loadDecks();
  }

  /**
   * @author Victor Heringer
   * 
   * Removes a card from current deck and updates at localstorages
   * 
   * @param {Object} event
   * @param {Object} card
   */
  handleClickShowCard = (event, card) => {
    if(!this.state.editing){
      this.setState({ 
        isSelected: !this.isSelected,
        cardSelected: card
      });
    }
  }

  /**
   * @author Victor Heringer
   * 
   * Goes back to the cards list after deselect current selected card
   * 
   * @param {Object} event
   * @param {Object} card
   */
  handleClickDeselectCard = event => {
    this.setState({
      isSelected: false,
      cardSelected: null
    });
  }

  render() {

    const { editing } = this.state;
    const gridDeckContainer = this.props.gridSize === '4' ? 'gridDeckContainerFour' : 'gridDeckContainerThree';
    const cardSize = this.props.gridSize === 4 ? 'sm' : 'md';
    let time = 0.05;

    return (
      <React.Fragment>
        <div className={ gridDeckContainer }>
          {!this.state.isSelected &&
            this.props.cards.map(card => {
              time = time * 1.15;
              return(
                <Card
                  value={card.value}
                  key={card.value}
                  up={true}
                  icon={card.icon}
                  fixed={true}
                  editing={editing}
                  onClickRemove={this.handleClickRemoveCard}
                  onClick={this.handleClickShowCard}
                  time={time}
                  size={cardSize}
                />
              );
            } )
          }
          {
            !this.state.isSelected && editing && <Card
              value={'+'}
              pattern={'none'}
              up={true}
              icon={false}
              fixed={true}
              editing={false}
              onClick={this.props.addCard}
              size={cardSize}
            />
          }
        </div>
        <div>
          {this.state.isSelected &&
            <Card
              value={this.state.cardSelected.value}
              key={this.state.cardSelected.value}
              up={false}
              icon={this.state.cardSelected.icon}
              fixed={false}
              editing={editing}
              onClickRemove={this.handleClickRemoveCard}
              onClick={this.handleClickShowCard}
              className={'big'}
            />
          }
        </div>
        <div className="deckActions">
          {!this.state.isSelected &&
            <button onClick={this.handleClickEdit}>
            {editing ? 
              <FontAwesomeIcon icon="times" /> : 
              <FontAwesomeIcon icon="edit" /> 
            } 
              &nbsp; {this.props.text.btn.edit}
            </button>
          }
          {this.state.isSelected &&
            <ButtonLink theme="default" onClick={this.handleClickDeselectCard}>
              <FontAwesomeIcon icon="long-arrow-alt-left" /> 
              &nbsp; {this.props.text.btn.back}
            </ButtonLink>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Deck;