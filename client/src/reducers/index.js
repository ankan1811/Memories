import { combineReducers } from 'redux';

import posts from './posts'; //reducers will be used in posts

export const reducers = combineReducers(
  //We will use all individual reducers that we have
  { posts } //posts:posts 
);
