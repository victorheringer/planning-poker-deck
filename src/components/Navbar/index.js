import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavTab, NavTabItem } from './../NavTab';
import { ThemeContext } from './../../Contexts';

import deckIcon from './../../assets/img/icon.png';
import './index.css';

/**
 * @author Victor Heringer
 * 
 * Component for navbar
 */
const Navbar = ({ route }) => {

  //const route = location.pathname;
  const githubURL = "https://github.com/VictorHeringer/planning-poker-deck";

  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className={"navbar " + theme}>
          <NavTab className={"wrapper"}>
            <NavTabItem className={route === "/" ? "active" : ""}>
              <Link to="/">
                <img className="icon" src={deckIcon} alt="icon" />
              </Link>
            </NavTabItem>
            <NavTabItem className={route === "/decks" ? "active" : ""}>
              <Link to="/decks" aria-label="Deck List">
                <FontAwesomeIcon className="icon" icon={"folder-open"} />
              </Link>
            </NavTabItem>
            <NavTabItem className={route === "/config" ? "active" : ""}>
              <Link to="/config" aria-label="Configurations">
                <FontAwesomeIcon className="icon" icon={"cog"} />
              </Link>
            </NavTabItem>
            <NavTabItem>
              <a aria-label="Github" href={githubURL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
              </a>
            </NavTabItem>
          </NavTab>
        </div>
    )}
  </ThemeContext.Consumer>
  );
}

export default Navbar;