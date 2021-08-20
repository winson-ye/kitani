import React, { useState } from 'react';
import { Avatar, Button, TextField, Link, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Paper, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [isSignUp, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      //dispatch sign up action
    } else {
      //dispatch sign in action
    }
  }

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignUp ? 'Sign up' : 'Sign in'}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          { isSignUp && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="First Name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Last Name"
              />
            </>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label = "Password"
            type="password"
          />
          { isSignUp && <TextField variant="outlined" margin="normal" required fullWidth label="Confirm Password" type="password" /> }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            { isSignUp ? 'Sign up' : 'Sign in' }
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}