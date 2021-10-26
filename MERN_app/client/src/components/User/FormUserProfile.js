import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import useStyles from "../Form/styles";
import { createPost } from "../../actions/posts";
import PictureUploader from "./PictureUploader";
import PlaylistPreview from "./PlaylistPreview";
const FormUserProfile = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4">@brandonwrson</Typography>
        <br />
        <PictureUploader />
        <br />
        <Typography variant="body1"> 34 groups contributed to</Typography>
        <br />
        <Typography variant="h5">Most active playlists</Typography>
        <PlaylistPreview />

        <form2 className={classes.form2}>
          <PlaylistPreview
            className={classes.fileInput}
            playlistname={"Keshi"}
            imagesource={"https://m.buro247.my/images/keshi-album-cover.jpg"}
          ></PlaylistPreview>
          <PlaylistPreview
            className={classes.fileInput}
            playlistname={"Glass Animals"}
            imagesource={
              "https://i1.sndcdn.com/avatars-JeZfqirMgzo5m1TX-DuFvMQ-t500x500.jpg"
            }
          ></PlaylistPreview>
          <PlaylistPreview
            className={classes.fileInput}
            playlistname={"Kanye"}
            imagesource={
              "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU0OTkwNDUxOTQ5MDUzNDQ3/kanye-west-attends-the-christian-dior-show-as-part-of-the-paris-fashion-week-womenswear-fall-winter-2015-2016-on-march-6-2015-in-paris-france-photo-by-dominique-charriau-wireimage-square.jpg"
            }
          ></PlaylistPreview>
          <PlaylistPreview
            className={classes.fileInput}
            playlistname={"BAEKHYUN"}
            imagesource={
              "https://img.discogs.com/Bu0ITL9130yoosluJS0kXqD1_9E=/fit-in/577x772/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15842293-1598800791-5825.png.jpg"
            }
          ></PlaylistPreview>
        </form2>

        <br />
        <br />
        <br />
      </form>
    </Paper>
  );
};

export default FormUserProfile;
