import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js'; //In nodejs we absolutely have to do it (posts.js) use js

const router = express.Router();

router.get('/', getPosts); //To simplify the logic is written in controllers of post.js
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost); //For updating we need to know the id of the existing post
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
