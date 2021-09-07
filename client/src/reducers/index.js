import { combineReducers } from "redux";

import posts from './posts';
import auth from './auth';
import animeList from './animeList';
import following from './following';

export const reducers = combineReducers({ posts, auth, animeList, following });