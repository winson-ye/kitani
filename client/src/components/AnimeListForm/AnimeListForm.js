import { TextField, Button, Paper } from '@material-ui/core';
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
        dispatch(addAnime(user?.result?._id, { showName: userInput, showId: generateKey(userInput )}));
        setUserInput(''); 
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <Paper className={classes.paper}>
                <TextField name="userInput" variant="outlined" label="Anime To Add" fullWidth value={userInput} onChange={handleChange} />
                <Button className={classes.submit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </Paper>
        </form>
    );
};

export default AnimeListForm;