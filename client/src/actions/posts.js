import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';//This file contains details of all the actions which will be exprted and used somewhere else
////All actions towards our backend are going to be done using redux!!! We need to dispatch those actions.This is great due to scalability.
import * as api from '../api/index.js'; //* means import everything from api We have to import alot of calls from api

export const getPosts = () => async (dispatch) => { //Action creator is a function that returns an action
  try {
    const { data } = await api.fetchPosts();// tries to fetch data from api (we first get a response from the api.we get data object from backend which represents the post)
    //redux uses async and await as asynchronous

    dispatch({ type: FETCH_ALL, payload: data }); //payload is the entire data ,in this case,posts
  } catch (error) { //Using redux thunk instead of returning the action we dispatch the action
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);//api request is returning the updated post

    dispatch({ type: UPDATE, payload: data }); //dispatch the action to the backend
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
