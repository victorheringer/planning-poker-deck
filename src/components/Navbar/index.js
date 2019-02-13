import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoonTabs, MoonTabsItem } from 'minimoon';
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
          <MoonTabs className={"wrapper"}>
            <MoonTabsItem className={route === "/" ? "active" : ""}>
              <Link to="/">
                <img className="icon" src={deckIcon} alt="icon" />
              </Link>
            </MoonTabsItem>
            <MoonTabsItem className={route === "/decks" ? "active" : ""}>
              <Link to="/decks" aria-label="Deck List">
                <FontAwesomeIcon className="icon" icon={"folder-open"} />
              </Link>
            </MoonTabsItem>
            <MoonTabsItem className={route === "/config" ? "active" : ""}>
              <Link to="/config" aria-label="Configurations">
                <FontAwesomeIcon className="icon" icon={"cog"} />
              </Link>
            </MoonTabsItem>
            <MoonTabsItem>
              <a aria-label="Github" href={githubURL} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
              </a>
            </MoonTabsItem>
          </MoonTabs>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default Navbar;