import * as api from '../api';

export const getAnime = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAnime();

        dispatch({ type: 'FETCH_ALL_ANIME', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const addAnime = (anime) => async (dispatch) => {
    try {
        const { data } = await api.createAnime(anime);

        dispatch({ type: 'ADD_TO_ANIME_LIST', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}