import React, { Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Offline } from "./screens";
import { Page, Navbar, Container, ConnectionBanner } from "components";
import { Screens } from "enums";

import Preferences from "./screens/preferences";
import Lobby from "./screens/lobby";
import Online from "./screens/online";
import Decks from "./screens/decks";

type RoutesProps = {
  theme: Theme;
  initial: Screens;
  text: I18n.SharedScreen;
};

const FALLBACK_DEFAULT_ROUTE = "home";

export default function Routes({ theme, initial, text }: RoutesProps) {
  return (
    <Container>
      <Router basename="/planning-poker-deck">
        <Navbar theme={theme} />
        <Page>
          <ConnectionBanner text={text.offline} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to={`/${initial || FALLBACK_DEFAULT_ROUTE}`} />
              </Route>
              <Route exact path={`/${Screens.HOME}`} component={Offline} />
              <Route exact path={`/${Screens.DECKS}`} component={Decks} />
              <Route path={`/${Screens.SETTINGS}`} component={Preferences} />
              <Route path={`/${Screens.LOBBY}`} component={Lobby} />
              <Route path={`/${Screens.ONLINE}`} component={Online} />
            </Switch>
          </Suspense>
        </Page>
      </Router>
    </Container>
  );
}
