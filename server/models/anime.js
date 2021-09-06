import mongoose from 'mongoose';

const animeSchema = mongoose.Schema({
    creator: String,
    shows: [String]
});

const Anime = mongoose.model('anime', animeSchema);

export default Anime;