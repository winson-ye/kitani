import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

import auth from '../middleware/auth.js';

//need auth middleware to update any user actions

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;