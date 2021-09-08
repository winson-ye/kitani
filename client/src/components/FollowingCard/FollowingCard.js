import React, { useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowing } from '../../actions/following';
import ListSubheader from '@material-ui/core/ListSubheader';
import { List, Grid, ListItem, ListItemText } from '@material-ui/core';

const FollowingCard = ({ userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const followingList = useSelector((state) => (state.following.follower === userId ? state.following : { follower: '', followees: [] }));

  useEffect(() => {
    dispatch(getFollowing(userId));
  }, [dispatch, userId]);

  return (
    <Grid item className={classes.root}>
      <List subheader={<ListSubheader>Following</ListSubheader>} className={classes.root}>
        {followingList.followees.map((value) => {
          return (
            <ListItem key={value.followeeId} button>
              <ListItemText primary={value.followeeName}/>
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}

export default FollowingCard;
