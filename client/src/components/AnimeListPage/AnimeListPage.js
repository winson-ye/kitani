import AnimeList from '../AnimeList/AnimeList';
import AnimeListForm from '../AnimeListForm/AnimeListForm';
import { Grid } from '@material-ui/core';

const AnimeListPage = () => {
    return (
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <AnimeListForm />
            </Grid>
            <AnimeList />
        </Grid>
    );
};

export default AnimeListPage;