import React, { Component } from 'react';
import './index.css';

import navIcon from './../../assets/img/menu.svg';
import githubIcon from './../../assets/img/github.svg';
import deckIcon from './../../assets/img/deck.svg';

/**
 * @author Victor Heringer
 * 
 * Component for navbar
 */
class Navbar extends Component {

  constructor(props) {
    super(props);
    this.nav = React.createRef();
  }

  /**
   * @author Victor Heringer
   *
   * Shows and hide menu
   *
   * @param {Object} event
   */
  handleClick = event => {
    event.preventDefault();
    this.nav.current.classList.toggle("active");
  }

  render( ) {

    const links = [
      {
        name: "Github",
        url: "https://github.com/VictorHeringer/planning-poker-deck",
        icon: githubIcon
      }
    ];
    const deckIcon = <img className="navIcon" src={deckIcon} alt="menu" />;
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="container">
            <div className='logo'>Planning Poker Deck</div>
            <div>
              <a className="center">
                
              </a>
            </div>
            <div>
              <nav className="nav" ref={this.nav}>
                <ul>
                  <li>
                    <a className="center" onClick={this.handleClick}>
                      <img className="navIcon" src={navIcon} alt="menu" />
                    </a>
                    <ul>
                      <div className="navContainer">
                      {
                        links.map(link => {
                          return (
                            <li key={link.name}>
                              <a href={link.url} target="_blank" rel="noopener noreferrer">
                                <img 
                                  className="icon" 
                                  src={link.icon} 
                                  alt="icon" 
                                />
                                {link.name}
                              </a>
                            </li>
                          );
                        })
                      }
                      </div>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;