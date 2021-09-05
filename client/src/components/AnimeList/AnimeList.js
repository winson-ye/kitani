import React, { useState, useEffect } from 'react';
import { Avatar, List, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from './styles';
import AnimeListForm from '../AnimeListForm/AnimeListForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAnime } from '../../actions/animeList';
import memories from '../../images/memories.png';

export default function CheckboxListSecondary() {
  const classes = useStyles();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  const animeList = useSelector((state) => state.animeList);
  const [animeListOrdered, updateAnimeListOrdered] = useState(animeList);

  useEffect(() => {
    if (animeList) { updateAnimeListOrdered(animeList); }
  }, [animeList]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(animeListOrdered);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateAnimeListOrdered(items);
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <AnimeListForm />
      </Grid>
      <Grid item className={classes.list}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="anime">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
              {animeListOrdered.map((value, index) => {
                return (
                  <Draggable key={value._id} draggableId={value._id} index={index}>
                    {(provided) => (
                      <ListItem button ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${value + 1}`}
                            src={memories}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={`${value.title} - Rank #${index + 1}`} />
                      </ListItem>
                    )}
                  </Draggable>
                );
              })}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </DragDropContext>
      </Grid>
    </Grid>
  );
}