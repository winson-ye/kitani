import express from 'express';

import { getPosts, createPost, likePost, deletePost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

//need auth middleware to update any user actions

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id/likePost', auth, likePost);
router.delete('/:id', auth, deletePost);

export default router;