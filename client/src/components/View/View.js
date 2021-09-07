import { Typography, Container, Paper, Grid, Button } from '@material-ui/core';
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
            <Container>
                <Paper className={classes.paperHeading}>
                    <Typography className={classes.heading}>{`${name}'s Profile`}</Typography>
                    <Button onClick={handleFollow}>
                        <AddIcon />
                    </Button>
                </Paper>
                <Grid container alignItems="flex-start" justifyContent="space-evenly">
                    <AnimeList userId={userId} />
                    <Grid item>
                        <FollowingCard userId={userId} />
                    </Grid>
                </Grid>
            </Container>
        )
    );
};

export default View;