import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPlaylists } from "../../../actions/musicPlaylist";
import MusicPlaylists from "../musicPlaylists";

const HomeMusicPlaylist = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylists());
  }, [currentId, dispatch]);

  // useEffect(() => {
  //   window.addEventListener("beforeunload", getPlaylists());
  //   return () => {
  //     window.removeEventListener("beforeunload", getPlaylists());
  //   };
  // }, []);

  return (
    //   console.log("Hello");
      <Container>
        <Grid container spacing={4} justify="space-between" alignItems="stretch">
          <MusicPlaylists setCurrentId={setCurrentId} />
        </Grid>
      </Container>

  );
};

export default HomeMusicPlaylist;
