import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';//VVI
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => { //we are accepting them as props here
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  //This hook is only used in this file only because here we are only concerned with the data present in the post We are not performing any action
  //At the beginning everything will be an empty string.
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  //We only want to fetch the new updated post so that we get all the information about it.
  //Same thing in case of the post we want to update by clicking the edit button as in that case too we will get the id as soon AS SOON AS WE CLICK THE EDIT BUTTON and 
  //hence we will get the information here too and post will not be null and hence useEffect will run.
  //if we have a currentid(i.e. not null) we will loop over state.posts and we want to find a post that has the same id as our current id else
  //if we do not have current id return null

  const dispatch = useDispatch();
  const classes = useStyles();

  // when we click on edit button we have to update the fields of the form with the values already present which we now want to update.
  useEffect(() => { //If the updated post exists
    if (post) setPostData(post); //To populate the values of the post into the form. when we click on the edit button 
    //all information will come onto
    // the form to be able to edit once again.
    //Just the final updated state
  }, [post]); //post is the dependency array when it changes from nothing to the actual post we want to run this useEffect

  const clear = () => { //once form is submitted we want to clear all the fields
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });//simply update the state
  };

  //The form will send a post request to our backend application then the backend coimmunicated it to our database
  //MERN done in the first video itself
  const handleSubmit = async (e) => {
    //We will dispatch the action of CREATE i.e createPost only when user has submitted the form 
    //Look we imported CreatePost from actions
    e.preventDefault(); //not to get the referesh iun the browser.
    //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    if (currentId === 0) { //For creating we do not need an id because we will just add the new id but for updating we need the id of the post
      dispatch(createPost(postData));
      clear();
    } else {
      //if we have a current id i.e. it is not null or 0 we will update the post
      //Creating a memory will change to editing a memory on clicking the edit button and then we need to pass over the id of this specific post 
      dispatch(updatePost(currentId, postData));
      clear(); //After submitting the form all fields will be cleared
    }
  };

  return ( // paper,root and form are present in styles.js  We need to have multiple classes so use dollar symbol below inside quotes
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> //If current id exists that is we are updating the post
  // then change creating a post to editing a post
        <TextField name="creator"
          variant="outlined"
          label="Creator"
          fullWidth value={postData.creator} //whole data from our post will be stored in the postData object in the state 
          // and then each object key will be a specific text field like postData.creator
          onChange={(e) => //Later on if we add a second text field we would always override everything and simply have the creator,so
            //spread the previous state
            setPostData({ ...postData, creator: e.target.value })} />

        <TextField name="title"
          variant="outlined" label="Title"
          fullWidth value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

        <TextField name="message"
          variant="outlined" label="Message"
          fullWidth multiline rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })} />

        <TextField name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}>
          <FileBase //We had installed package filebase
            type="file"
            multiple={false}
            onDone={({ base64 }) => //set the selected file as base64 to upload it
              setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained"
          color="secondary"
          size="small"  //Button for clearing all the data
          onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
