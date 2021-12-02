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
// export const fetchPlaylists = () => API.get(`/musicPlaylists`);
export const fetchPlaylists = (id) => API.get(`/musicPlaylists/${id || ""}`); // changing this one talk about how this code help.
export const addToGallery = (id, picture) =>
  API.patch(`/musicPlaylists/${id}`, picture);

export const addContributor = (creator_id, playlist_id, new_user) =>
  API.post(`/musicPlaylists/${playlist_id}/Contributor`, {
    creator_id,
    new_user,
  });

export const deletePlaylist = (id) => API.delete(`/musicPlaylists/${id}`);
export const likePlaylist = (id) =>
  API.patch(`/musicPlaylists/${id}/likePlaylist`);
export const commentPlaylist = (value, id) =>
  API.post(`/musicPlaylists/${id}/commentPlaylist`, { value });

export const addSong = (id, addedsong) =>
  API.post(`/musicPlaylists/${id}`, addedsong);
export const fetchSonglists = (id) => API.get(`/musicPlaylists/${id}/songlist`);

export const fetchUser = (id) => API.get(`/users/${id}`);
export const updateUser = (id, updatedUser) =>
  API.patch(`/musicPlaylists/${id}/update`, updatedUser) ||
  API.patch(`/users/${id}`, updatedUser);
export const getUser = (id) =>
  API.get(`/users/${id}`) || API.get(`/musicPlaylists/${id}/user`);
export const getUsers = (id) => API.get(`/musicPlaylists/${id}/users`);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
