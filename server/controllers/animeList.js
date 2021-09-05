import Anime from "../models/anime.js";

export const getAnime = async (req, res) => {
    try {
        const anime = await Anime.find();

        res.status(200).json(anime);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addAnime = async (req, res) => {
    const anime = req.body;

    const newAnime = new Anime(anime);

    try {
        await newAnime.save();

        res.status(201).json(newAnime);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }


}