import React, { Component } from 'react';
import Card from './..//Card';

class CardsDeck extends Component {

  render() {

    const { numbers } = this.props;

    return (
      <div className='gridDeckContainer'>
        { numbers.map( value => 
            <Card number={value} key={value} up={true} static={true} />
          ) 
        }
      </div>
    );
  }
}

export default CardsDeck;