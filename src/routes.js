import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme, Arwes } from 'arwes';

import Background from './images/background.jpg'
import Glow from './images/glow.png'

import Header from './components/Header/Header';
import Container from './components/Container/Container';
import CreateNote from './pages/CreateNote/CreateNote';
import ShowNote from './pages/ShowNote/ShowNote';

const theme = createTheme({
  color: {
    primary: { base: '#00FFFF' }
  }
});

const Routes = () => {
  return(
    <ThemeProvider animate theme={theme}>
      <Arwes animate background={Background} pattern={Glow} >
        <Header />
        <Container>
          <Router>
            <Route exact path="/" component={CreateNote} />
            <Route exact path="/notes/:slug" component={ShowNote} />
          </Router>
        </Container>
      </Arwes>
    </ThemeProvider>
  );
}

export default Routes;
