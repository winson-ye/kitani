import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Container, Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';
import useStyles from './styles';
import { Link } from 'react-router-dom';


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({ ...postData, creator: user?.result?._id, name: `${user?.result?.firstName} ${user?.result?.lastName}` }));
      clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, creator: user?.result?._id, name: `${user?.result?.firstName} ${user?.result?.lastName}`}));
      clear();
    }
  };

  if (!user?.result?.firstName) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Avatar component={Link} to="/profile" className={classes.avatar} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.firstName.charAt(0)}</Avatar>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography className={classes.caption} gutterBottom={true} variant="h6">{currentId ? `Editing "${post.title}"` : 'Share A Post'}</Typography>
          <TextField className={classes.textField} name="title" variant="outlined" label="Title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField className={classes.textField} name="message" variant="outlined" label="Message" multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <TextField className={classes.textField} name="tags" variant="outlined" label="Tags (coma separated)" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit">Submit</Button>
          <Button className={classes.buttonClear} variant="contained" color="secondary" size="small" onClick={clear}>Clear</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
