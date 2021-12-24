import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/NavBar/NavBar';
import AnimeListPage from './components/AnimeListPage/AnimeListPage';
import Profile from './components/Profile/Profile';
import View from './components/View/View';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar user={user} setUser={setUser}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route 
          path="/signin" 
          exact 
          render={(props) => (
            <SignIn {...props} setUser={setUser} />
          )} 
        />
        <Route path="/animelist" exact component={AnimeListPage} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/view/:userId" exact component={View} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;