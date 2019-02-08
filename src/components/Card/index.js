import React from 'react';
import PropTypes from 'prop-types';
import CardFactory from './../../helpers/CardFactory';
import FrontFace from './FrontFace';
import BackFace from './BackFace';
import ButtonEdit from './ButtonEdit';
import { ThemeContext } from './../../Contexts';
import classNames from 'classnames';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Renders a card component
 * 
 * @prop {Number} value 
 * @prop {Bool} fliped
 * @prop {Bool} fixed
 * @prop {String} pattern
 * @prop {Bool} editing
 * @prop {Bool} icon
 * @prop {Function} onClickRemove
 * @prop {Function} onClick
 * @prop {String} className
 * @prop {String} time
 */
const Card = ({ 
  value, 
  up,
  id, 
  editing, 
  icon,
  color,
  className, 
  fixed,
  onClick,
  onClickRemove,
  time,
  size,
  pattern
}) => {

  /**
   * @author Victor Heringer
   *
   * Shows and hide the card
   *
   * @param {Object} event
   */
  const handleClick = event => {
    event.preventDefault();
    if (fixed) {
      const card = CardFactory.create(id, color, value, icon);
      onClick(event, card);
    }
    else {
      !fixed && event.currentTarget.classList.toggle('flipped');
    }
  }

  /**
   * @author Victor Heringer
   *
   * Shows and hide the card
   *
   * @param {Object} event
   */
  const handleClickRemove = event => {
    onClickRemove(event, id);
  }

  const wrapperClasses = classNames(
    'cardWrapper', 
    className,
    { 
      'wrapperSm': size === 'sm', 
      'wrapperMd': size === 'md',
      'wrapperLg': size === 'lg' 
    }
  );

  const classes = classNames(
    'card',
    { 
      'flipped': up, 
      'cardSm': size === 'sm', 
      'cardMd': size === 'md',
      'cardLg': size === 'lg' 
    }
  );

  const closeBtnClass = editing ? 'visible' : 'hidden'; 

  return (
    <ThemeContext.Consumer>
      {theme => (
      <div className={wrapperClasses}>
        <div className="cardContainer">
          <ButtonEdit 
            className={closeBtnClass}
            handleClick={handleClickRemove} 
            time={time}
          />
          <div className={classNames(classes, theme)} onClick={handleClick}>
            <FrontFace />
              <BackFace icon={icon} color={color} value={value} pattern={'tech-pattern'} />
          </div>
        </div>
      </div>
      )}
    </ThemeContext.Consumer>
  );
}

Card.propTypes = {
  value: PropTypes.string,
  fliped: PropTypes.bool,
  fixed: PropTypes.bool,
  pattern: PropTypes.string,
  editing: PropTypes.bool,
  icon: PropTypes.bool,
  onClickRemove: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string
};

Card.defaultProps = {
  value: "", 
  fliped: false,
  time: 0,
  fixed: false,
  pattern: "dark-pattern",
  editing: false,
  icon: false,
  onClickRemove: null,
  onClick: null,
  className: ''
};

export default Card;