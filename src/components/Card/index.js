import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardFactory from './../../factories/CardFactory';
import './index.css';
import './patterns.css';

/**
 * @author Victor Heringer
 * 
 * Renders a card component
 * 
 * @props {Number} value 
 * @props {Bool} fliped
 * @props {Bool} static
 * @props {String} pattern
 * @props {Bool} editing
 * @props {Bool} icon
 * @props {Function} onClickRemove
 * @props {Function} onClick
 */
class Card extends Component {

  /**
   * @author Victor Heringer
   *
   * Shows and hide the card
   *
   * @param {Object} event
   */
  handleClick = event => {
    event.preventDefault();
    if (this.props.static) {
      const card = CardFactory.create(this.props.value, this.props.icon);
      this.props.onClick(event, card);
    }
    else {
      !this.props.static && event.currentTarget.classList.toggle('flipped');
    }
  }

  handleClickRemove = event => {
    this.props.onClickRemove(event, this.props.value);
  }

  render() {

    const { value, up, editing, icon } = this.props;
    const flipped = up ? ' flipped' : '';

    return (
      <div className="cardWrapper">
        <div className="cardContainer">
          <div className="close">
            {editing && <button onClick={this.handleClickRemove}>X</button>}
          </div>
          <div className={'card' + flipped} onClick={this.handleClick}>
            <div className="front">
            </div>
            <div className="back tech-pattern">
              <h3 className="cardTitle cardNumber">
                {icon ? <FontAwesomeIcon icon={value} /> : value}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;