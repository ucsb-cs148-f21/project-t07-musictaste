import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import useStyles from "../Form/styles";
import { createPost } from "../../actions/posts";
import PictureUploader from "./PictureUploader";
import PlaylistPreview from "./PlaylistPreview";
import { getUser } from "../../actions/userProfile";
import { useHistory } from "react-router-dom";
import { fabClasses } from "@mui/material";
const FormUserProfile = ({ user, playlists }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const intersection = playlists.playlists.filter((element) =>
    user.contributedPlaylists.includes(element._id)
  );
  const elements = [];
  const history = useHistory();

  console.log(playlists.playlists);
  for (let i = 0; i < 4; i++) {
    if (intersection[i]) {
      elements.push(
        <PlaylistPreview
          isPlaylist="true"
          className={classes.fileInput}
          playlistname={intersection[i].title}
          imagesource={intersection[i].selectedMainFile}
          click={(e) => {
            history.push(`/musicPlaylists/${intersection[i]._id}`);
          }}
        />
      );
    }
  }
  return (
    <Paper className={classes.paper}>
      {/* <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      > */}
      <Typography variant="h4" align="center">
        {user.name}
      </Typography>
      <img src={user.profilePicture} height="200" width="280" />
      <br /> <br />
      <PictureUploader
        // user={user?.result}
        // id={user?.result?._id}
        // pic={user?.result?.profilePicture}
        user={user}
        id={user._id}
        pic={user.profilePicture}
      />
      <br />
      {/* <Typography variant="body1"> 34 groups contributed to</Typography> */}
      <br />
      <Typography variant="h5" align="center">
        Recently Contributed Playlists
      </Typography>
      {/* <PlaylistPreview /> */}
      <form2 className={classes.form2}>
        {elements}
      </form2>
      <br />
      <br />
      <br />
      {/* </form> */}
    </Paper>
  );
};

export default FormUserProfile;
