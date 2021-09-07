import React, { useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import memories from '../../images/memories.png';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getFollowing} from '../../actions/following';

const FollowingCard = ({ userId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const followingList = useSelector((state) => (state.following.follower === userId ? state.following : { follower: '', followees: [] }));

  useEffect(() => {
    dispatch(getFollowing(userId));
  }, [dispatch, userId]);

  return (
    <List dense className={classes.root}>
      {followingList.followees.map((value) => {
        return (
          <ListItem key={value.followeeId} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={memories}
              />
            </ListItemAvatar>
            <ListItemText primary={value.followeeName}/>
          </ListItem>
        );
      })}
    </List>
  );
}

export default FollowingCard;
