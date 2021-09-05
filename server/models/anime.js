import mongoose from 'mongoose';

const animeSchema = mongoose.Schema({
    title: String,
    rank: Number
});

const Anime = mongoose.model('anime', animeSchema);

export default Anime;