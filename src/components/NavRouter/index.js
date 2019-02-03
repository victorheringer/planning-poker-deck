import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from './../Navbar';

const NavRouter = ({ location }) => {
  return <Navbar route={location.pathname} />
}

export default withRouter(NavRouter);