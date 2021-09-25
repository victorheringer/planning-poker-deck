import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Logo } from "components";
import { useRouteMatch } from "react-router-dom";
import { Screens } from "enums";

const Nav = styled.div`
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.lineColor};
  border-top: 1px solid ${(props) => props.theme.lineColor};
  background-color: ${(props) => props.theme.backgroundColor};

  @media only screen and (max-width: 600px) {
    bottom: 0;
  }
`;

const List = styled.div`
  margin: 0 auto;
  max-width: 575.98px;
  display: flex;
  list-style: none;
  justify-content: space-around;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  margin-top: 5px;
`;

const LogoWrapper = styled.div`
  margin-top: 5px;
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.menuIconsColor};
  position: relative;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.successColor};
  position: absolute;
  top: 16px;
  left: 16px;
  border-radius: 50%;
`;

export default function Navbar({ theme }: { theme: Theme }) {
  const { primaryColor, menuIconsColor } = theme;
  const matchHome = useRouteMatch("/home");
  const matchOnline = useRouteMatch("/online");
  const logo = matchHome && matchHome.isExact ? primaryColor : menuIconsColor;
  const active = { color: primaryColor };

  return (
    <Nav>
      <List>
        <ListItem>
          <StyledLink to={Screens.HOME}>
            <LogoWrapper>
              <Logo aria-label="Home" color={logo} width="29px" height="29px" />
            </LogoWrapper>
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            aria-label="Decks"
            activeStyle={active}
            to={Screens.DECKS}
          >
            <FontAwesomeIcon icon="th" />
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            aria-label="Online"
            activeStyle={active}
            to={Screens.LOBBY}
          >
            <FontAwesomeIcon icon="globe-americas" />
            {matchOnline && matchOnline.isExact && <Dot />}
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            aria-label="Settings"
            activeStyle={active}
            to={Screens.SETTINGS}
          >
            <FontAwesomeIcon icon="cog" />
          </StyledLink>
        </ListItem>
      </List>
    </Nav>
  );
}
