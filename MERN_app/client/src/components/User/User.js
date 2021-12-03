import {
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
// import Form from "../Form/Form";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormUserProfile from "./FormUserProfile";
// import musicDiary from "./musicDiary";
import PictureUploader from "./PictureUploader";
import MusicPlaylist from "../musicPlaylists/musicPlaylistCards/MusicPlayist/musicPlaylist";
import PlaylistPreview from "./PlaylistPreview";
import useStyles from "./styles";
import { ClassNames } from "@emotion/react";
import { getUser, getUsers } from "../../actions/userProfile";
import { getPost, getPostsBySearch } from "../../actions/posts";
import { getPlaylists } from "../../actions/musicPlaylist";
import PostsHome from "../Posts/Post/PostsHome/Home";
import Posts from "../Posts/Post/Post";
import useStyles2 from "../Form/styles";
import { useHistory } from "react-router-dom";

const User = () => {
  const history = useHistory();
  const classes2 = useStyles2();
  const my_user = JSON.parse(localStorage.getItem("profile"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    console.log("In dispatch get Users");
    dispatch(getUsers(id));
  }, [id, dispatch]);
  useEffect(() => {
    console.log("In dispatch get Playlists");
    dispatch(getPlaylists());
  }, [id, dispatch]);
  
  // useEffect(() => {
  //   console.log("This is working rn");
  //   window.addEventListener("beforeunload", getUser(id));
  //   return () => {
  //     console.log("This is working rn");
  //     window.removeEventListener("beforeunload", getUser(id));
  //   };
  // }, []);

  const { users, isLoadingU } = useSelector((state) => state.users);
  const user = my_user?.result?._id
    ? users.find((i) => i._id === my_user?.result?._id)
    : null;
  
  useEffect(() => {
    console.log("In dispatch get Posts"); 
    dispatch(getPostsBySearch({search: my_user?.result?.name, tags: []}));
  }, [id, dispatch]);
  const playlists = useSelector((state) => state.musicPlaylists);
  const posts = useSelector((state) => state.posts);
  if (isLoadingU) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  const elements = [];
  for (let i = 0; i < 9; i++) {
    if (posts.posts[i]) {
      
      elements.push(
        <PlaylistPreview
          className={classes2.fileInput}
          playlistname={posts.posts[i].message}
          imagesource={posts.posts[i].selectedFile}
          click={(e) => {
            history.push(`/posts/${posts.posts[i]._id}`);
          }}
        />
      );
    }
  }
  console.log(posts.posts);

  return (
    <Container>
      <div class="blocks">
        <Grid
          container
          className={ClassNames.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item container direction="column" xs={12} md={8} spacing={1}>
            <Grid item>
              <Typography variant="h4">My Blog Posts</Typography>
            </Grid>
            <Grid item>
                {elements}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormUserProfile user={user} playlists={playlists} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default User;
