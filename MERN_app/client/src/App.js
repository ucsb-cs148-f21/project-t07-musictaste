import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PostsHome from "./components/Posts/Post/PostsHome/Home";
import Auth from "./components/Auth/Auth";
import User from "./components/User/User";
import FormCreateMusicPlaylist from "./components/Form/FormCreateMusicPlaylist";
import PostDetails from "./components/PostDetails/PostDetails";
import HomeMusicPlaylist from "./components/musicPlaylists/HomeMusicPlaylist/HomeMusicPlaylist";
import musicPlaylist from "./components/musicPlaylists/musicPlaylistCards/MusicPlayist/musicPlaylist";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Container maxidth="xl">
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Redirect to="/musicPlaylists" />}
          />
          <Route path="/posts" exact component={PostsHome} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
          <Route path="/posts/search" exact component={PostsHome} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route path="/users/:id" exact component={User}></Route>
          <Route path="/musicPlaylists" exact component={HomeMusicPlaylist} />
          <Route path="/musicPlaylists/:id" exact component={musicPlaylist} />
          <Route
            path="/musicPlaylists/Form"
            exact
            component={FormCreateMusicPlaylist}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
