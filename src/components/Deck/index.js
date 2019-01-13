import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeckCollection from './../../helpers/DeckCollection';
import update from 'immutability-helper';
import Card from './../Card';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Renders a card deck component
 * 
 * @props String numbers
 */
class Deck extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      cards: [],
      deck: {},
      editing: false, 
      isSelected: false,
      cardSelected: null
    };
  }

  /**
   * @author Victor Heringer
   * 
   * Lifecycle method to set some initial states
   */
  componentDidMount() {
    this.setState({ cards: this.props.cards });
    this.setState({ deck: this.props.initialDeck });
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
    const cards = this.state.cards.filter(cards => cards.value !== card);
    this.setState(update(this.state, {
      cards: { $set: cards }, deck: { cards: { $set: cards } } 
    }), () => DeckCollection.update(this.state.deck));
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

    const { editing, cards } = this.state;
    let time = 0.05;

    return (
      <React.Fragment>
        <div className='gridDeckContainer'>
          {!this.state.isSelected &&
            cards.map(card => {
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
                />
              );
            } )
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
              <FontAwesomeIcon icon="edit" /> &nbsp;
              {this.props.text.btn.edit}
            </button>
          }
          {this.state.isSelected &&
            <button onClick={this.handleClickDeselectCard}>
              <FontAwesomeIcon icon="long-arrow-alt-left" /> &nbsp;
              {this.props.text.btn.back}
            </button>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Deck;