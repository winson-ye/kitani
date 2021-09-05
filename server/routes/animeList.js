import express from 'express';
import { getAnime, addAnime, replaceAnimeList } from '../controllers/animeList.js';

const router = express.Router();

router.get('/', getAnime);
router.post('/', addAnime);
router.put('/', replaceAnimeList);

export default router;