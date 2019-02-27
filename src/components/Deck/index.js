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
      card, () => this.props.history.push('/played')
    );
  }

  render() {

    const gridDeckContainer = this.props.gridSize === '4' ? 'gridDeckContainerFour' : 'gridDeckContainerThree';
    const cardSize = this.props.gridSize === '4' ? 'sm' : 'md';

    return (
      <React.Fragment>
        <div className={gridDeckContainer}>
          {
            this.props.cards.map(card => {
              return (
                <Card
                  value={card.value}
                  key={card.id}
                  id={card.id}
                  up={true}
                  color={card.color}
                  icon={card.icon}
                  fixed={true}
                  editing={false}
                  onClickRemove={this.handleClickRemoveCard}
                  onClick={this.handleClickShowCard}
                  size={cardSize}
                />
              );
            })
          }
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter( Deck );