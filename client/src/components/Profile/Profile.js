import AnimeList from '../AnimeList/AnimeList';
import FollowingCard from '../FollowingCard/FollowingCard';
import { Grid, Typography, Container, Paper } from '@material-ui/core';
import useStyles from './styles';

const Profile = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Container>
            <Paper className={classes.paperHeading}>
                <Typography className={classes.heading}>{`${user?.result?.firstName}'s Profile`}</Typography>
            </Paper>
            <Grid container alignItems="flex-start" justifyContent="space-evenly">
                <AnimeList userId={user?.result?._id} />
                <FollowingCard userId={user?.result?._id} />
            </Grid>
        </Container>
    );
};

export default Profile;