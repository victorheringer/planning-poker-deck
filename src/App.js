import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './containers/Home';
import Navbar from './components/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faMugHot,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons';

library.add(faEdit);
library.add(faMugHot);
library.add(faLongArrowAltLeft);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
