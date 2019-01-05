import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Home from './containers/Home';
import Rules from './containers/Rules';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft,
  faInfoCircle,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);
library.add(faMugHot);
library.add(faLongArrowAltLeft);
library.add(faInfoCircle);
library.add(faEllipsisV);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/rules" exact component={Rules} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
