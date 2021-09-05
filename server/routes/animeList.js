import express from 'express';
import { getAnime, addAnime } from '../controllers/animeList.js';

const router = express.Router();

router.get('/', getAnime);
router.post('/', addAnime);

export default router;