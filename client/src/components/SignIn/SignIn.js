import React, { useState } from 'react';
import { Avatar, Button, TextField, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Paper, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

export default function SignIn({ setUser }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const history = useHistory();
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);

  const switchMode = () => {
    setForm(initialState);
    setIsSignUp((prevIsSignup) => !prevIsSignup);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(signup(form, history, setUser));
    } else {
      dispatch(signin(form, history, setUser));
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });
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
        <form className={classes.form} onSubmit={handleSubmit}>
          { isSignUp && (
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="First Name"
                name="firstName"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Last Name"
                name="lastName"
                onChange={handleChange}
              />
            </>
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label = "Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          { isSignUp && <TextField variant="outlined" margin="normal" required fullWidth label="Confirm Password" name="confirmPassword" type="password" onChange={handleChange} /> }
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