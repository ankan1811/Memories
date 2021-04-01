import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux'; //Allows us to dispatch an action

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch(); //get access to the useDispatch hook
  const classes = useStyles(); //To use the styles from styles.js

  useEffect(() => {//component that update
    dispatch(getPosts()); //The best way to dispatch an action
  }, [currentId, dispatch]); //When we submit a form in form.js we also change the current id to null again 
  //and as soon as  we  change the current id in app the app will dispoatch to getPost action (defined)

  return ( // Typography Used for h2 lines 
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>  
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} /> 
    //setter methods for id
    //Without redux we have to bring it all the way to app.js and send it to all the components
   
    //We have to share and keep track of that state of current id between the post and the form and app is the only parent component that is parent to both post and form
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} /> 
    //we pass currentId to the form and also the setter method setCurrentId
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;//In prehooks era redux was hard 
//We had to write some crazy syntax here

