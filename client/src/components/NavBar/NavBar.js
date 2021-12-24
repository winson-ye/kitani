import React, { useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = ({ user, setUser }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
  };

  const signin = () => {
    history.push('/signin');
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  });

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Kitani</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        <div className={classes.profile}>
          <Avatar component={Link} to="/profile" className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.firstName.charAt(0)}</Avatar>
          {user &&
            <Typography className={classes.userName} variant="h6">
              {`${user?.result.firstName} ${user?.result.lastName}`}
            </Typography>
          }
        </div>
        {user 
        ? <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>Logout</Button>
        : <Button variant="contained" className={classes.logout} color="primary" onClick={signin}>Sign In</Button>  
        }
        <Button variant="contained" className={classes.anilist} color="secondary" href="/animelist">My Anime List</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;