import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';//Posts.js will use post.js
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  //We retrieve the data from within our components i.e. we fetch the data from the global redux store
  const posts = useSelector((state) => state.posts); //state=whole global redux store It is state.posts 
  //because in reducers/index.js we have exported posts
  const classes = useStyles();

  return (
    //If posts.length=0 i.e. there are no posts we will show a circular progress else we will display the posts themselves
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          //We will loop over the posts and then for each post we will return a grid of type item .
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} //We are mapping with our real post now not generic post
              //We will send individual value of post to each post component
              setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
