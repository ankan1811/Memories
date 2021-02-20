import axios from 'axios';  //To make API calls

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
//A POST request can be made using Axios to “post” data to an endpoint. 
//This endpoint may then use this POST request to perform a certain task or trigger an event.
// The HTTP post request is performed by calling axios.post().
//After we get the post we have to specify the url and data we are sending
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost); //We receive the id and the updated post and do a patch request to the backend 
// and the backend is connected to the database
export const deletePost = (id) => axios.delete(`${url}/${id}`);
