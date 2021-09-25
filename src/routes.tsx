import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Preferences, Offline, Lobby, Online, Decks } from "./screens";
import { Page, Navbar, Container, ConnectionBanner } from "components";
import { Screens } from "enums";

type RoutesProps = {
  theme: Theme;
  initial: Screens;
  text: I18n.SharedScreen;
};

export default function Routes({ theme, initial, text }: RoutesProps) {
  return (
    <Container>
      <Router>
        <Navbar theme={theme} />
        <Page>
          <ConnectionBanner text={text.offline} />
          <Switch>
            <Route exact path="/">
              <Redirect to={`/${initial}`} />
            </Route>
            <Route exact path={`/${Screens.HOME}`}>
              <Offline />
            </Route>
            <Route exact path={`/${Screens.DECKS}`}>
              <Decks />
            </Route>
            <Route path={`/${Screens.SETTINGS}`}>
              <Preferences />
            </Route>
            <Route path={`/${Screens.LOBBY}`}>
              <Lobby />
            </Route>
            <Route path={`/${Screens.ONLINE}`}>
              <Online />
            </Route>
          </Switch>
        </Page>
      </Router>
    </Container>
  );
}
