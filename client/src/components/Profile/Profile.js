import AnimeList from '../AnimeList/AnimeList';
import { Grid } from '@material-ui/core';

const Profile = () => {
    return (
        <Grid container direction="column" alignItems="center">
            <AnimeList />
        </Grid>
    );
};

export default Profile;