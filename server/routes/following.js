import express from 'express';
import { addFollowee, getFollowing } from '../controllers/following.js';

const router = express.Router();

router.post('/:id', addFollowee);
router.get('/:id', getFollowing);

export default router;