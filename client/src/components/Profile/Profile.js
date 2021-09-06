import AnimeList from '../AnimeList/AnimeList';
import FollowingCard from '../FollowingCard/FollowingCard';
import { Grid, Typography, Container, Paper } from '@material-ui/core';
import useStyles from './styles';

const Profile = ({ user }) => {
    const classes = useStyles();

    return (
        <Container>
            <Paper className={classes.paperHeading}>
                <Typography className={classes.heading}>{`${user?.result?.firstName}'s Profile`}</Typography>
            </Paper>
            <Grid container alignItems="flex-start" justifyContent="space-evenly">
                <AnimeList />
                <Grid item>
                    <FollowingCard />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;