import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Offline } from "./screens";
import { Page, Navbar, Container, ConnectionBanner } from "components";
import { Screens } from "enums";

const Preferences = lazy(() => import("./screens/preferences"));
const Lobby = lazy(() => import("./screens/lobby"));
const Online = lazy(() => import("./screens/online"));
const Decks = lazy(() => import("./screens/decks"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to={`/${initial}`} />
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
