import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import CreateNote from './pages/CreateNote/CreateNote';

const Routes = () => {
  return(
    <Router>
      <Route exact path="/" component={CreateNote} />
    </Router>
  );
}

export default Routes;
