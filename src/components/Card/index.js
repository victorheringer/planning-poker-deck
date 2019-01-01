import React, { Component } from 'react';
import './index.css';
import './patterns.css';

/**
 * @author Victor Heringer
 * 
 * Renders a card component
 * 
 * @props {Number} number 
 * @props {Bool} fliped
 * @props {Bool} static
 * @props {String} pattern
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
    !this.props.static && event.currentTarget.classList.toggle('flipped');
  }

  render() {

    const { number, up } = this.props;
    const flipped = up ? ' flipped' : '';

    return (
      <div className="cardWrapper">
        <div className="cardContainer">
          <div className="close">
            <button>X</button>
          </div>
          <div className={'card' + flipped} onClick={this.handleClick}>
            <div className="front">
            </div>
            <div className="back tech-pattern">
              <h3 className="cardTitle cardNumber">{number}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;