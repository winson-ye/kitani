import React, { useState, useEffect } from 'react';
import { Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';
import { getPosts } from '../../actions/posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Grid container className={classes.grid} direction="column">
        <Grid item sm={12}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
        <Grid item>
          <Posts setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Grow>
  );
};

export default Home;