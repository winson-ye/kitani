import React, { useState, useEffect } from 'react';
import { Avatar, List, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAnime, updateAnimeList } from '../../actions/animeList';
import memories from '../../images/memories.png';

const AnimeList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  const animeList = useSelector((state) => state.animeList);
  const [animeListOrdered, updateAnimeListOrdered] = useState(animeList);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (animeList && !isDragging) { 
      updateAnimeListOrdered(animeList);
    }
  }, [animeList, isDragging]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(animeListOrdered);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    for (let index = 0; index < items.length; index++) {
      items[index].rank = index + 1;
    }
    setIsDragging(true);
    dispatch(updateAnimeList(items));
    updateAnimeListOrdered(items);
  }

  return (
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
                        <ListItemText primary={`${value.title} - Rank #${value.rank}`} />
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
  );
}

export default AnimeList;