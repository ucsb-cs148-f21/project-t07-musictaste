import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Card,
  CircularProgress,
} from "@material-ui/core";
import { CardMedia } from "@mui/material";
import useStyles from "./styles";

const MusicPlaylistGallery = ({ playlists, id }) => {
  console.log(playlists);
  const classes = useStyles();
  const playlist = id ? playlists.find((p) => p._id === id) : null;
  return (
    <Grid
      className={classes.mainContainer}
      container
      spacing={3}
      alignItems="stretch"
    >
      {Array.from(playlist.selectedFiles).map((_, index) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
          <Card className={classes.card} raised elevation={6}>
            <CardMedia className={classes.media} image={_} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MusicPlaylistGallery;
