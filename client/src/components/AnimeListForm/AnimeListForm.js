import { TextField, Button, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './styles';

const AnimeListForm = ({ addAnime }) => {

    const [ userInput, setUserInput ] = useState('');
    const classes = useStyles();

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addAnime(userInput);
        setUserInput("");
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