import react, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { createPost } from "../../actions/posts";
import PictureUploader from "../User-profile/PictureUploader";
import PlaylistPreview from "../User-profile/PlaylistPreview";
const Form = () => {
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
        <Typography variant="h5">@brandonwrson</Typography>
        <br />
        <PictureUploader />
        <br />
        <Typography variant="body2"> 34 groups contributed to</Typography>
        <br />
        <Typography variant="body1">Most active playlists</Typography>
        <PlaylistPreview />

        <form2 className={classes.form2}>
          <PlaylistPreview className={classes.fileInput}></PlaylistPreview>
          <PlaylistPreview className={classes.fileInput}></PlaylistPreview>
        </form2>
        <br />
        <br />
        <br />
      </form>
    </Paper>
  );
};

export default Form;
