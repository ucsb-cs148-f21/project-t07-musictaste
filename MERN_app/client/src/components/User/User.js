import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
// import Form from "../Form/Form";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FormUserProfile from "./FormUserProfile";
// import musicDiary from "./musicDiary";
import PictureUploader from "./PictureUploader";
import MusicPlaylist from "../musicPlaylists/musicPlaylistCards/MusicPlayist/musicPlaylist";
import PlaylistPreview from "./PlaylistPreview";
import { ClassNames } from "@emotion/react";
import { getUser } from "../../actions/userProfile";
import { getPlaylists } from "../../actions/musicPlaylist";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(id));
  }, [id, dispatch]);
  useEffect(() => {
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

  const users = useSelector((state) => state.users);
  const playlists = useSelector((state) => state.musicPlaylists)
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
              <Typography variant="h4">Music Diary</Typography>
            </Grid>
            <Grid item>
              <Paper>{/* <MusicPlaylist /> */}</Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormUserProfile users={users} playlists={playlists} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default User;
