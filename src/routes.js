import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme, Arwes } from 'arwes';

import Background from './images/background.jpg'
import Glow from './images/glow.png'

import Header from './components/Header/Header';
import CreateNote from './pages/CreateNote/CreateNote';

const theme = createTheme({
  color: {
    primary: { base: '#00FFFF' }
  }
});

const Routes = () => {
  return(
    <ThemeProvider animate theme={theme}>
      <Arwes animate background={Background} pattern={Glow}>
        <Header />
        <Router>
          <Route exact path="/" component={CreateNote} />
        </Router>
      </Arwes>
    </ThemeProvider>
  );
}

export default Routes;
