import React, { Component } from 'react';
import Deck from './../../components/Deck';
import CardFactory from './../../factories/CardFactory';

/**
 * @author Victor Heringer
 * 
 * Container for home
 */
class Home extends Component {

  render() {
    
    const cards = [
      CardFactory.create('0'),
      CardFactory.create('1'),
      CardFactory.create('2'),
      CardFactory.create('3'),
      CardFactory.create('5'),
      CardFactory.create('8'),
      CardFactory.create('13'),
      CardFactory.create('21'),
      CardFactory.create('34'),
      CardFactory.create('55'),
      CardFactory.create('89'),
      CardFactory.create('144'),
      CardFactory.create('∞'),
      CardFactory.create('?'),
      CardFactory.create('mug-hot', true)
    ];

    return(
      <div className='app'>
        <Deck cards={cards} />
      </div>
    );
  }
}

export default Home;