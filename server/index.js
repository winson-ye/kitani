import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import animeListRoutes from './routes/animeList.js';
import followingRoutes from './routes/following.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);
app.use('/animelist', animeListRoutes);
app.use('/following', followingRoutes);

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
});

const CONNECTION_URL = 'mongodb+srv://winson-ye:tripter908@cluster0.nzdnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
