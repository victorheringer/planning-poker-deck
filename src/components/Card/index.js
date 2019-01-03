import React, { Component } from 'react';
import CardFactory from './../../factories/CardFactory';
import FrontFace from './FrontFace';
import BackFace from './FrontFace';
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
            <FrontFace />
            <BackFace icon={icon} value={value} pattern={"tech-pattern"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;