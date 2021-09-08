import { Typography, Paper, Grid, Button } from '@material-ui/core';
import useStyles from './styles';
import AnimeList from '../AnimeList/AnimeList';
import FollowingCard from '../FollowingCard/FollowingCard';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { addFollowee } from '../../actions/following';

const View = (props) => {

    const { userId } = props.match.params;
    const { name } = props.location.state;
    const classes = useStyles();
    const dispatch = useDispatch();
    const signedInUser = JSON.parse(localStorage.getItem('profile'))

    const handleFollow = () => {
        dispatch(addFollowee(signedInUser?.result?._id, { followeeName: name, followeeId: userId }))
    };

    return (
        userId === signedInUser?.result?._id ? null : (
            <div>
                <Paper className={classes.paperHeading}>
                    <Typography>{`${name}'s Profile`}</Typography>
                    <Button className={classes.followButton} onClick={handleFollow}>
                        <AddIcon />
                    </Button>
                </Paper>
                <Grid container alignItems="flex-start" justifyContent="space-evenly">
                    <AnimeList userId={userId} />
                    <FollowingCard userId={userId} />
                </Grid>
            </div>
        )
    );
};

export default View;