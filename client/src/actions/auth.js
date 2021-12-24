import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router, setUser) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    setUser(JSON.parse(localStorage.getItem('profile')));
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router, setUser) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    setUser(JSON.parse(localStorage.getItem('profile')));
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};