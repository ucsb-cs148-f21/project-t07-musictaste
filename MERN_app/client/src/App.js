import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PostsHome from "./components/Posts/Post/PostsHome/Home";
import Auth from "./components/Auth/Auth";
import User from "./components/User/User";
import PostDetails from "./components/PostDetails/PostDetails";
import musicPlaylists from "./components/musicPlaylists/musicPlaylists";
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
          <Route path="/user" exact component={User}></Route>
          <Route path="/musicPlaylist" exact component={musicPlaylist} />
          <Route path="/musicPlaylists" exact component={musicPlaylists} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
