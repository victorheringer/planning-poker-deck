import React from 'react';
import update from 'immutability-helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DeckItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

  handleToggleShow = () => {
    //this.setState( state => update(state, { show: { $set: !state.show } } ) );
  }

  render() {

    const { children, title } = this.props;
    const arrow = <FontAwesomeIcon icon={"angle-right"} className={this.state.show ? 'rotate-down' : 'rotate-up'} />;

    return (
      <li>
        <span onClick={this.handleToggleShow}>
          {title}
        </span>
        {children.filter(
          val => val && (!val.type || val.type.displayName !== 'DeckListSubItem' )
        )}
        <ul className={this.state.show ? 'show' : 'hidden'}>
          {children.filter(
            val => val && ( val.type && val.type.displayName === 'DeckListSubItem' )
          )}
        </ul>
      </li>
    );
  }
}

export default DeckItem;