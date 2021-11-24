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

  return (
    //   console.log("Hello");
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <MusicPlaylists setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default HomeMusicPlaylist;
