import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'; //Like button
import DeleteIcon from '@material-ui/icons/Delete'; //delete button
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; //material icons are not a part of material-ui/core install them separately
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => { //post represent the props and accept the setCurrenId prop
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}> //selectedFile is poresent in schema in backend
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
//moment has something called fromNow which means 5 secs from now or 5 mins from now like that
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
          //In post.js onclick we will call that setCurrentId 
          <MoreHorizIcon fontSize="default" /> //Edit Button has an icon of MoreHorizIcon
          </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    //we will look over our tags and for each tag just add a hashtag
      </div>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button> //Like post button
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button> //Delete post button
      </CardActions>
    </Card>
  );
};

export default Post;
