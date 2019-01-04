import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './../Card';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Renders a card deck component
 * 
 * @props String numbers
 */
class CardsDeck extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      cards: [], 
      editing: false, 
      isSelected: false,
      cardSelected: null
    };
  }

  componentDidMount() {
    this.setState({ cards: this.props.cards });
  }

  handleClickEdit = event => {
    this.setState({editing: !this.state.editing});
  }

  handleClickRemoveCard = (event, card) => {
    const cards = this.state.cards.filter(cards => cards.value !== card);
    this.setState({cards: cards});
  }

  handleClickShowCard = (event, card) => {
    if(!this.state.editing){
      this.setState({ 
        isSelected: !this.isSelected,
        cardSelected: card
      });
    }
  }

  handleClickDiselectCard = event => {
    this.setState({
      isSelected: false,
      cardSelected: null
    });
  }

  render() {

    const { editing, cards } = this.state;

    return (
      <React.Fragment>
        <div className='gridDeckContainer'>
          {!this.state.isSelected &&
            cards.map(card =>
              <Card
                value={card.value}
                key={card.value}
                up={true}
                icon={card.icon}
                fixed={true}
                editing={editing}
                onClickRemove={this.handleClickRemoveCard}
                onClick={this.handleClickShowCard}
              />
            )
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
              Editar
            </button>
          }
          {this.state.isSelected &&
            <button onClick={this.handleClickDiselectCard}>
              <FontAwesomeIcon icon="long-arrow-alt-left" /> &nbsp;
              Voltar
            </button>
          }
        </div>
      </React.Fragment>
    );
  }
}

export default CardsDeck;