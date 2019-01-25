import React from 'react';
import update from 'immutability-helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          val => !val.type || val.type.name != 'DeckListSubItem'
        )}
        <ul className={this.state.show ? 'show' : 'hidden'}>
          {children.filter(
            val => val.type && val.type.name == 'DeckListSubItem'
          )}
        </ul>
      </li>
    );
  }
}

export default DeckItem;