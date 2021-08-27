import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useStyles from './styles';

export default function CheckboxListSecondary() {
  const classes = useStyles();
  const [anime, setAnime] = useState([0, 1, 2, 3]);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(anime);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setAnime(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="anime">
        {(provided) => (
          <List className={classes.root} {...provided.droppableProps} ref={provided.innerRef}>
          {anime.map((value, index) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <Draggable key={value} draggableId={`${value}`} index={index}>
                {(provided) => (
                  <ListItem button ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
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
  );
}