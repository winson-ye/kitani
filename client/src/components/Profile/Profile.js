import AnimeList from '../AnimeList/AnimeList';
import FollowingCard from '../FollowingCard/FollowingCard';
import { Grid } from '@material-ui/core';

const Profile = () => {
    return (
        <Grid container direction="column" alignItems="center">
            <AnimeList />
            <Grid item>
                <FollowingCard />
            </Grid>
        </Grid>
    );
};

export default Profile;