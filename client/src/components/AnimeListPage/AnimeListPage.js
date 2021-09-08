import AnimeList from '../AnimeList/AnimeList';
import AnimeListForm from '../AnimeListForm/AnimeListForm';
import { Grid } from '@material-ui/core';

const AnimeListPage = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <Grid container direction="column" alignItems="center">
            <AnimeListForm />
            <AnimeList userId={user?.result?._id} />
        </Grid>
    );
};

export default AnimeListPage;