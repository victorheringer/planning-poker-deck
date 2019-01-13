import React from 'react';

class DeckListSubItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  render() {

    return( 
      <React.Fragment>
        <h3>SubItem</h3>
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default DeckListSubItem;