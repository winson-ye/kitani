import React, { useEffect } from 'react';
import { Avatar, List, Grid, ListItem, ListItemAvatar, ListItemText, CircularProgress } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getAnime, updateAnimeList } from '../../actions/animeList';
import memories from '../../images/memories.png';

const AnimeList = ({ userId }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const animeList = useSelector((state) => (state.animeList.creator === userId ? state.animeList : { creator: '', shows: [] }));

  useEffect(() => {
    dispatch(getAnime(userId));
  }, [dispatch, userId]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(animeList.shows);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    animeList.shows = items;
    dispatch(updateAnimeList(userId, items));
  }

  return (
    !animeList.shows.length ? <CircularProgress /> : (
      <Grid item className={classes.list}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="anime">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
              {
              animeList.shows.map((value, index) => {
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