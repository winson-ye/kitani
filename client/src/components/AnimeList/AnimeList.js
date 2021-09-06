import React, { useState, useEffect } from 'react';
import { Avatar, List, Grid, ListItem, ListItemAvatar, ListItemText, CircularProgress } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAnime, updateAnimeList } from '../../actions/animeList';
import memories from '../../images/memories.png';

const AnimeList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));

  const animeList = useSelector((state) => (state.animeList.creator === user?.result?._id ? state.animeList : { creator: '', shows: [] }));

  const [animeListOrdered, updateAnimeListOrdered] = useState(animeList.shows);

  useEffect(() => {
    dispatch(getAnime(user?.result?._id));
  }, [dispatch, user?.result?._id]);

  useEffect(() => {
    if (animeList.length !== 0) {
      updateAnimeListOrdered(animeList.shows);
    }
  }, [animeList]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(animeListOrdered);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(updateAnimeList(user?.result?._id, items));
    updateAnimeListOrdered(items);
  }

  return (
    !animeListOrdered.length ? <CircularProgress /> : (
      <Grid item className={classes.list}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="anime">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
              {
              animeListOrdered.map((value, index) => {
                return (
                  <Draggable key={value.showId} draggableId={value.showId} index={index}>
                    {(provided) => (
                      <ListItem button ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${value + 1}`}
                            src={memories}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={`${value.showName} - Rank #${index + 1}`} />
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
    )
  );
};

export default AnimeList;