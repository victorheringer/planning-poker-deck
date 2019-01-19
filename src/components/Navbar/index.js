import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import githubIcon from './../../assets/img/github.svg';
import deckIcon from './../../assets/img/icon.png';
import './index.css';

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

  share = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Planning Poker Deck',
        text: 'This planning poker app rocks!',
        url: 'http://planning-poker.victorheringer.com.br',
      });
    }
  }

  render( ) {

    return (
        <div className="navbarWrapper">
        {false &&   <div className="navbar">
          <div className="container">
          <div className='logo'>Planning Poker Deck</div>
            <div></div>
            <div>
              <nav className="nav" ref={this.nav}>
                <ul>
                  <li>
                    <div className="center" onClick={this.handleClick}>
                      <FontAwesomeIcon icon={"ellipsis-v"} size="lg" />
                    </div>
                    <ul>
                      <li onClick={this.handleClick}>
                        <Link to="/">
                          <img
                            className="icon"
                            src={deckIcon}
                            alt="icon"
                          />
                          {this.props.text.nav.play}
                        </Link>
                      </li>
                      <li onClick={this.handleClick}>
                        <Link to="/decks">
                          <FontAwesomeIcon icon={"list-ul"} size="lg" />
                          &nbsp; Decks
                        </Link>
                      </li>
                      <li onClick={this.handleClick}>
                        <Link to="/config">
                          <FontAwesomeIcon icon={"cog"} size="lg" />
                          &nbsp; {this.props.text.nav.config}
                        </Link>
                      </li>
                      { this.props.canShare && <li onClick={this.share}>
                        <Link to="/">
                          <FontAwesomeIcon icon={"share-alt"} size="lg" />
                          &nbsp; {this.props.text.nav.share}
                        </Link>
                        </li> 
                      } 
                      <li>
                        <a 
                          href="https://github.com/VictorHeringer/planning-poker-deck" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <img 
                            className="icon" 
                            src={githubIcon} 
                            alt="icon" 
                          />
                          Github
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div> }
        <div className="navTab">
          <div style={{ borderBottom: '3px solid #1565c0' }}>
            <Link to="/">
              <img
                className="icon"
                src={deckIcon}
                alt="icon"
              />
            </Link>
          </div>
          <div>
            <Link to="/decks">
              <FontAwesomeIcon icon={"list-ul"} size="lg" />
              &nbsp;
            </Link>
          </div>
          <div>
            <Link to="/config">
              <FontAwesomeIcon icon={"cog"} size="lg" />
              &nbsp;
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/VictorHeringer/planning-poker-deck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon"
                src={githubIcon}
                alt="icon"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;