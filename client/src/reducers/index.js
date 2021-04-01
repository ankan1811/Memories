import { combineReducers } from 'redux';

import posts from './posts'; //reducers will be used in posts

export const reducers = combineReducers(
    //The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore . 
  //The resulting reducer calls every child reducer, and gathers their results into a single state object
  
  //We will use all individual reducers that we have
  { posts } //posts:posts 
);
