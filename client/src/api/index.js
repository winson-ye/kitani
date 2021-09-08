import axios from 'axios';

// For testing
// const API = axios.create({ baseURL: 'http://localhost:5000' })

// For deployment
const API = axios.create({ baseURL: 'https://kitani.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const fetchAnime = (id) => API.get(`/animelist/${id}`);
export const fetchFollowing = (id) => API.get(`/following/${id}`)
export const createAnime = (id, newAnime) => API.post(`/animelist/${id}`, newAnime);
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const updateAnimeList = (id, updatedAnimeList) => API.patch(`/animelist/${id}`, updatedAnimeList);
export const createFollowee = (id, newFollowee) => API.post(`/following/${id}`, newFollowee);