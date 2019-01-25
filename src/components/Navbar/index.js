import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import { NavTab, NavTabItem } from './../NavTab';

import githubIcon from './../../assets/img/github.svg';
import deckIcon from './../../assets/img/icon.png';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Component for navbar
 */
const Navbar = ({ location }) => {

  const route = location.pathname;
  const githubURL = "https://github.com/VictorHeringer/planning-poker-deck";

  return (
    <div className="navbar">
      <NavTab className={"wrapper"}>
        <NavTabItem className={route == "/" ? "active" : ""}>
          <Link to="/">
            <img className="icon" src={deckIcon} alt="icon" />
          </Link>
        </NavTabItem>
        <NavTabItem className={route == "/decks" ? "active" : ""}>
          <Link to="/decks" aria-label="Deck List">
            <FontAwesomeIcon className="icon" icon={"folder-open"} />
          </Link>
        </NavTabItem>
        <NavTabItem className={route == "/config" ? "active" : ""}>
          <Link to="/config" aria-label="Configurations">
            <FontAwesomeIcon className="icon" icon={"cog"} />
          </Link>
        </NavTabItem>
        <NavTabItem>
          <a aria-label="Github" href={githubURL} target="_blank" rel="noopener noreferrer">
            <img className="icon" src={githubIcon} alt="icon" />
          </a>
        </NavTabItem>
      </NavTab>
    </div>
  );
}

export default withRouter(Navbar);