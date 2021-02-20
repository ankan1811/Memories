import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
////All actions towards our backend are going to be done using redux!!! We need to dispatch those actions.This is great due to scalability.
export default (posts = [], action) => { //posts will be an empty array by default..
  switch (action.type) {
    case FETCH_ALL:  //We are using this in index.js of reducers
      return action.payload; //actio.payload are our actual posts
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case CREATE:
      return [...posts, action.payload];//we have an array of posts So spread all the posts already present 
    // and then add the new post which is action.payload
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post)); //action.payload is the updated post so we will loop through the posts if id
      //matches then return the updtaed post else return the post as it was without any updates
      //map returns an array 
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

