import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/NavBar/NavBar';
import AnimeList from './components/AnimeList/AnimeList';

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  if (!user) {
    return <SignIn setUser={setUser} />
  }

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/animelist" exact component={AnimeList} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;