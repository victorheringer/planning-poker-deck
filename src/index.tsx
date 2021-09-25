import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft,
  faTrash,
  faSyncAlt,
  faShareAlt,
  faAngleRight,
  faCog,
  faInfinity,
  faBoxOpen,
  faTimes,
  faServer,
  faTh,
  faGlobeAmericas,
  faCrown,
  faUsers,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { StorageService } from "services";
import { decks, preferences } from "static";
import { generateId } from "helpers";
import { IdScopes } from "enums";

library.add(faEdit);
library.add(faBoxOpen);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faTrash);
library.add(faSyncAlt);
library.add(faShareAlt);
library.add(faAngleRight);
library.add(faCog);
library.add(faInfinity);
library.add(faTimes);
library.add(faServer);
library.add(faGlobeAmericas);
library.add(faTh);
library.add(faCrown);
library.add(faUsers);
library.add(faSpinner);

StorageService.setup({
  id: generateId(IdScopes.USER),
  decks,
  preferences,
  online: { rooms: [] },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
