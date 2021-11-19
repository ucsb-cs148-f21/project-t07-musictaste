<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import FormUserProfile from "./components/Form/FormUserProfile";
import memories from "./images/memories.png";
import useStyles from "./styles";
import PictureUploader from "./components/User-profile/PictureUploader";
import { Route, Switch, Router } from "react-router";
import musicDiary from "./components/User-profile/musicDiary";

>>>>>>> eea87762f272d32411b2529f7f4b2aa4a08edae4
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
<<<<<<< HEAD
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
          <Route path="/musicPlaylist" exact component={musicPlaylist} />
          <Route path="/musicPlaylists" exact component={musicPlaylists} />
        </Switch>
      </Container>
    </BrowserRouter>
=======
    <Container maxidth="lg">
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Container className={classes.user}></Container>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {" "}
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              {" "}
              <FormUserProfile />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
>>>>>>> eea87762f272d32411b2529f7f4b2aa4a08edae4
  );
};

export default App;
