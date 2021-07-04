import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Preferences, Offline, Lobby, Online, Decks } from "./screens";
import { Page, Navbar, Container, Banner } from "components";
import { Screens } from "enums";
import { useStorage } from "hooks";

export default function Routes({
  theme,
  initial,
  connected,
  text,
}: {
  theme: Theme;
  initial: Screens;
  connected: boolean;
  text: I18n.SharedScreen;
}) {
  const [hideBanner, setHideBanner] = useState(connected);

  useEffect(() => {
    setHideBanner(connected);
  }, [connected]);

  function handleCloseBanner() {
    setHideBanner(true);
  }

  return (
    <Container>
      <Router>
        <Navbar theme={theme} />
        <Page>
          {!hideBanner && (
            <Banner text={text.offline} onClose={handleCloseBanner} />
          )}
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
