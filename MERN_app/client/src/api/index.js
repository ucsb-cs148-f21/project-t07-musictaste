import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:3000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const commentPost = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value });

export const createPlaylist = (newPlaylist) =>
  API.post("/musicPlaylists", newPlaylist);
export const fetchPlaylists = () => API.get(`/musicPlaylists`);
export const fetchPlaylist = (id) => API.get(`/musicPlaylists/${id}/gallery`);
export const addToGallery = (id, picture) =>
  API.patch(`/musicPlaylists/${id}`, picture);

export const deletePlaylist = (id) => API.delete(`/musicPlaylists/${id}`);
export const likePlaylist = (id) =>
  API.patch(`/musicPlaylists/${id}/likePlaylist`);
export const commentPlaylist = (value, id) =>
  API.post(`/musicPlaylists/${id}/commentPlaylist`, { value });

export const addSong = (id, addedsong) =>
  API.post(`/musicPlaylists/${id}`, addedsong);
export const fetchSonglists = (id) => API.get(`/musicPlaylists/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
