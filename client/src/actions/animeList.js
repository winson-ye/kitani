import * as api from '../api';

export const getAnime = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchAnime(id);

        dispatch({ type: 'FETCH_ALL_ANIME', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const addAnime = (id, anime) => async (dispatch) => {
    try {
        const { data } = await api.createAnime(id, anime);

        dispatch({ type: 'ADD_TO_ANIME_LIST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updateAnimeList = (id, newAnimeList) => async (dispatch) => {
    try {
        const { data } = await api.updateAnimeList(id, newAnimeList);

        dispatch({ type: 'UPDATE_ANIME_LIST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};