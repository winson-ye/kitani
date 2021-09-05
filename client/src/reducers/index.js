import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';
import animeList from './animeList';

export const reducers = combineReducers({ posts, auth, animeList });