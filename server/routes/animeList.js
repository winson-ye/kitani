import express from 'express';
import { getAnime, addAnime, updateAnimeList } from '../controllers/animeList.js';
import auth from "../middleware/auth.js";

const router = express.Router();

router.get('/:id', getAnime);
router.post('/:id', addAnime);
router.patch('/:id', updateAnimeList);

export default router;