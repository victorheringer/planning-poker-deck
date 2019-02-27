import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeckCollection from './../../helpers/DeckCollection';
import ButtonLink from './../../components/ButtonLink';
import { ThemeContext } from './../../Contexts';
import { withRouter } from 'react-router-dom';
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
  handleClickRemoveCard = (event, id) => {
    const cards = this.props.cards.filter(cards => cards.id !== id);
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
    this.props.handleSelectCard( 
      card, 
      () => this.props.history.push('/played') 
    );
  }

  render() {

    const { editing } = this.state;
    const gridDeckContainer = this.props.gridSize === '4' ? 'gridDeckContainerFour' : 'gridDeckContainerThree';
    const cardSize = this.props.gridSize === '4' ? 'sm' : 'md';
    let time = 0.05;

    return (
      <ThemeContext.Consumer>
        {theme => (
          <React.Fragment>
          <div className={gridDeckContainer}>
            {!this.state.isSelected &&
              this.props.cards.map(card => {
                time = time * 1.15;
                return (
                  <Card
                    value={card.value}
                    key={card.id}
                    id={card.id}
                    up={true}
                    color={card.color}
                    icon={card.icon}
                    fixed={true}
                    editing={editing}
                    onClickRemove={this.handleClickRemoveCard}
                    onClick={this.handleClickShowCard}
                    time={time}
                    size={cardSize}
                  />
                );
              })
            }
            {
              !this.state.isSelected && editing && <Card
                value={'+'}
                pattern={'none'}
                up={true}
                color={''}
                id={0}
                icon={false}
                fixed={true}
                editing={false}
                onClick={this.props.addCard}
                size={cardSize}
              />
            }
          </div>
            <div className="deckActions">
              {!this.state.isSelected &&
                <ButtonLink onClick={this.handleClickEdit} type="default">
                  {editing ?
                    <FontAwesomeIcon icon="times" /> :
                    <FontAwesomeIcon icon="edit" />
                  }
                  &nbsp; {this.props.text.btn.edit}
                </ButtonLink>
              }
            </div>
          </React.Fragment>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default withRouter( Deck );