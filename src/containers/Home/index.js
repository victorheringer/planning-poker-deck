import React, { Component } from 'react';
import CardsDeck from './../../components/CardsDeck';

/**
 * @author Victor Heringer
 * 
 * Container for home
 */
class Home extends Component {

  render() {
    
    const cards = [
      '0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '144', '∞', '?'
    ];

    return(
      <div className='app'>
        <CardsDeck numbers={cards} />
      </div>
    );
  }
}

export default Home;