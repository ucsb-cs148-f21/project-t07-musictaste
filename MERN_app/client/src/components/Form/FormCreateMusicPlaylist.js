import React, { useState } from "react";
import { createPlaylist } from "../../actions/musicPlaylist";
import { useHistory } from "react-router-dom";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const FormCreateMusicPlaylist = () => {
  const [currentId, setCurrentId] = useState(null);
  const [createMyPlaylist, setCreateMyPlaylist] = useState({
    title: "",
    message: "",
    selectedMainFile: "",
  });

  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const clear = () => {
    setCurrentId(null);
    setCreateMyPlaylist({
      creator: "",
      title: "",
      message: "",
      selectedMainFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPlaylist({ ...createMyPlaylist, name: user?.result?.name }));
    clear();
    history.push("/");
  };
  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6" className="temporary">
          Create Music Playlist
        </Typography>
        <TextField
          name="playlist name"
          variant="outlined"
          label="Playlist Name"
          fullWidth
          value={createMyPlaylist.title}
          onChange={(e) =>
            setCreateMyPlaylist({ ...createMyPlaylist, title: e.target.value })
          }
        ></TextField>
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={createMyPlaylist.message}
          onChange={(e) =>
            setCreateMyPlaylist({
              ...createMyPlaylist,
              message: e.target.value,
            })
          }
        ></TextField>
        <div className={classes.fileinput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setCreateMyPlaylist({
                ...createMyPlaylist,
                selectedMainFile: base64,
              })
            }
          ></FileBase>
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          // color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          className={classes.buttonClear}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default FormCreateMusicPlaylist;
