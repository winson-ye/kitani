import * as api from '../api';

export const getFollowing = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchFollowing(id);

        dispatch({ type: 'FETCH_ALL_FOLLOWEES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const addFollowee = (id, followee) => async (dispatch) => {
    try {
        const { data } = await api.createFollowee(id, followee);

        dispatch({ type: 'ADD_TO_FOLLOWEES', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};