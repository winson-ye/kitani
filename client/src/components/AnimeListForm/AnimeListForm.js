import { TextField, Button, Paper, Typography, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addAnime } from '../../actions/animeList';

const AnimeListForm = () => {
    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    const [ userInput, setUserInput ] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));


    const handleChange = (e) => {
        setUserInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAnime(user?.result?._id, { showName: userInput, showId: generateKey(userInput) }));
        setUserInput(''); 
    }
    
    return (
        <Grid item>
            <Paper className={classes.paper}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Typography className={classes.caption} gutterBottom={true} variant="h6">Add An Anime</Typography>
                    <TextField className={classes.textField} name="userInput" variant="outlined" label="Anime Title" fullWidth value={userInput} onChange={handleChange} />
                    <Button className={classes.submit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default AnimeListForm;