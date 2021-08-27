import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, setUser) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    setUser(JSON.parse(localStorage.getItem('profile')));
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, setUser) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    setUser(JSON.parse(localStorage.getItem('profile')));
  } catch (error) {
    console.log(error);
  }
};