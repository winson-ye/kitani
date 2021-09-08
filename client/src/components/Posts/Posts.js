import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container direction="column" alignItems="center">
        {posts.map((post) => (
          <Grid key={post._id} item>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
        {/* <App /> */}
      </Grid>
    )
  );
};

export default Posts;