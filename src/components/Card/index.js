import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardFactory from './../../factories/CardFactory';
import FrontFace from './FrontFace';
import BackFace from './BackFace';
import './index.css';

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
 * @props {String} className
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

    const { value, up, editing, icon, className } = this.props;
    const flipped = up ? ' flipped' : '';

    return (
      <div className={"cardWrapper " + className} >
        <div className="cardContainer">
          <div className="close">
            {editing && <button onClick={this.handleClickRemove}>X</button>}
          </div>
          <div className={"card" + flipped} onClick={this.handleClick}>
            <FrontFace />
            <BackFace icon={icon} value={value} pattern={"tech-pattern"} />
          </div>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  className: ""
};

export default Card;