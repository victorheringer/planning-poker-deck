import React from 'react';
import update from 'immutability-helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeckSubItem from './DeckSubItem';

class DeckItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  handleToggleShow = () => {
    this.setState( state => update(state, { show: { $set: !state.show } } ) );
  }

  render() {

    const { children, title } = this.props;

    return (
      <li>
        <span onClick={this.handleToggleShow}>
          <FontAwesomeIcon icon={"angle-right"} className={this.state.show ? 'rotate-down' : 'rotate-up'} /> &nbsp;
          {title}
        </span>
        {children.filter(
          val => !val.type || val.type.displayName != 'DeckListSubItem'
        )}
        <ul className={this.state.show ? 'show' : 'hidden'}>
          {children.filter(
            val => val.type && val.type.displayName == 'DeckListSubItem'
          )}
        </ul>
      </li>
    );
  }
}

export default DeckItem;