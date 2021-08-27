import React, { useState } from 'react';
import { Avatar, List, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from './styles';
import AnimeListForm from '../AnimeListForm/AnimeListForm';

export default function CheckboxListSecondary() {
  const classes = useStyles();
  const sampleAnime = [{
    name: "Naruto"
  }, {
    name: "One Piece"
  }, {
    name: "Bleach"
  }];
  const [anime, setAnime] = useState(sampleAnime);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(anime);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAnime(items);
  }

  const addAnime = (userInput) => {
    let copy = [...anime];
    copy = [...copy, {name: userInput}];
    setAnime(copy);
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <AnimeListForm addAnime={addAnime} />
      </Grid>
      <Grid item className={classes.list}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="anime">
            {(provided) => (
              <List {...provided.droppableProps} ref={provided.innerRef}>
              {anime.map((value, index) => {
                return (
                  <Draggable key={value.name} draggableId={value.name} index={index}>
                    {(provided) => (
                      <ListItem button ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${value + 1}`}
                            src={`/static/images/avatar/${value + 1}.jpg`}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={`${value.name} - Rank #${index + 1}`} />
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