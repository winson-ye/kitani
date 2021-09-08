import AnimeList from '../AnimeList/AnimeList';
import FollowingCard from '../FollowingCard/FollowingCard';
import { Grid, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Profile = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <div>
            <Paper className={classes.paperHeading}>
                <Typography>My Profile</Typography>
            </Paper>
            <Grid container alignItems="flex-start" justifyContent="space-evenly">
                <AnimeList userId={user?.result?._id} />
                <FollowingCard userId={user?.result?._id} />
            </Grid>
        </div>
    );
};

export default Profile;