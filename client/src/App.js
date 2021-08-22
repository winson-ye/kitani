import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/NavBar/NavBar';

const App = () => (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={SignIn} />
        </Switch>
      </Container>
    </BrowserRouter>
  );

export default App;