import Anime from "../models/anime.js";
import mongoose from 'mongoose';

export const getAnime = async (req, res) => {
    try {
        const { id } = req.params;
        const anime = await Anime.findOne({ creator: id });

        if (!anime) {
            res.status(200).json({ creator: '', shows: [] });
        } else {
            res.status(200).json(anime);
        }

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addAnime = async (req, res) => {
    const { id } = req.params;
    const { newShow } = req.body;

    const animeList = await Anime.findOne({ creator: id });

    if (!animeList) {
        const newAnimeList = new Anime({ creator: id, shows: [newShow] });
        await newAnimeList.save();
        res.status(201).json(newAnimeList);
    } else {
        animeList.shows.push(newShow);
        const updatedAnimeList = await Anime.findOneAndUpdate({ creator: id }, { shows: animeList.shows }, { new: true });
        res.status(200).json(updatedAnimeList);
    }

}

export const updateAnimeList = async (req, res) => {
    const { id } = req.params;
    const newAnimeList = req.body;

    const updatedAnimeList = await Anime.findOneAndUpdate({ creator: id }, { shows: newAnimeList }, { new: true });

    res.status(200).json(updatedAnimeList);
}