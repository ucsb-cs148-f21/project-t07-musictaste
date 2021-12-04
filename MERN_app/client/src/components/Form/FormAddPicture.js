import React, { useEffect, useState } from "react";
import { addToGallery } from "../../actions/musicPlaylist";
import { TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../../actions/musicPlaylist";
const FormAddPicture = ({ playlist, id }) => {
  const [currentId, setCurrentId] = useState(id);
  const [pictures, setPictures] = useState([]);
  const [createMyPlaylist, setCreateMyPlaylist] = useState({
    title: "",
    message: "",
    selectedMainFile: "",
    selectedFiles: [],
  });
  // const playlist = useSelector(
  //   // (state) => state.musicPlaylists
  //   (state) =>
  //     currentId ? state.musicPlaylists.find((p) => p._id === currentId) : null
  // );
  // console.log(playlist);
  const dispatch = useDispatch();
  useEffect(() => {
    if (playlist) setCreateMyPlaylist(playlist);
  }, [playlist]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlist) {
      dispatch(addToGallery(currentId, { ...createMyPlaylist }));
    }
  };
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) =>
          setCreateMyPlaylist({
            ...createMyPlaylist,
            selectedFiles: [...createMyPlaylist.selectedFiles, base64],
          })
        }
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></FileBase>
      <Button
        //   className={classes.buttonSubmit}
        variant="contained"
        // color="primary"
        // size="large"
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

export default FormAddPicture;
