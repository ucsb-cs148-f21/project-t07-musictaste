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

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
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
  );
};

export default App;
