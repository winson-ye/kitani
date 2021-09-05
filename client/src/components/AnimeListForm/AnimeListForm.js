import { TextField, Button, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { addAnime } from '../../actions/animeList';

const AnimeListForm = () => {

    const [ userInput, setUserInput ] = useState({ title: '', rank: 1 });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUserInput({ ...userInput, title: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAnime(userInput));
        setUserInput({ title: '', rank: 1 });
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Paper className={classes.paper}>
                <TextField name="userInput" variant="outlined" label="Anime To Add" fullWidth value={userInput.title} onChange={handleChange} />
                <Button className={classes.submit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </Paper>
        </form>
    );
};

export default AnimeListForm;