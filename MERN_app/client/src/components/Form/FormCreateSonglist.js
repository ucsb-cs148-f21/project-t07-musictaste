import React, { useState } from "react";
import { addSong } from "../../actions/musicPlaylist";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
} from "@material-ui/core";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const FormCreateSonglist = ({ id }) => {
  const [currentId, setCurrentId] = useState(id);
  const [createMySonglist, setCreateMySonglist] = useState({
    artist: "",
    title: "",
    genre: "",
    duration: "",
    contributor: "",
    associatedPlaylist: "",
  });

  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const clear = () => {
    setCurrentId(null);
    setCreateMySonglist({
      artist: "",
      title: "",
      genre: "",
      duration: "",
      associatedPlaylist: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCreateMySonglist({
    //   ...createMySonglist,
    //   associatedPlaylist: currentId,
    // });
    // setCreateMySonglist({
    //   ...createMySonglist,
    //   contributor: user?.result?.name,
    // });
    console.log(user?.result?.name);
    dispatch(
      addSong(currentId, {
        ...createMySonglist,
        contributor: user?.result?.name,
        associatedPlaylist: currentId,
      })
    );
    clear();
    history.push(`/musicPlaylists/${currentId}`);
  };
  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                {...bindTrigger(popupState)}
              >
                ADD SONG
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <TextField
                  name="ArtistName"
                  variant="outlined"
                  label="ArtistName"
                  fullWidth
                  value={createMySonglist.artist}
                  onChange={(e) =>
                    setCreateMySonglist({
                      ...createMySonglist,
                      artist: e.target.value,
                    })
                  }
                ></TextField>
                <TextField
                  name="Song Title"
                  variant="outlined"
                  label="song title"
                  fullWidth
                  value={createMySonglist.title}
                  onChange={(e) =>
                    setCreateMySonglist({
                      ...createMySonglist,
                      title: e.target.value,
                    })
                  }
                ></TextField>
                <TextField
                  name="Song Genre"
                  variant="outlined"
                  label="song genre"
                  fullWidth
                  value={createMySonglist.genre}
                  onChange={(e) =>
                    setCreateMySonglist({
                      ...createMySonglist,
                      genre: e.target.value,
                    })
                  }
                ></TextField>
                <TextField
                  name="Song Duration"
                  variant="outlined"
                  label="song duration"
                  fullWidth
                  value={createMySonglist.duration}
                  onChange={(e) =>
                    setCreateMySonglist({
                      ...createMySonglist,
                      duration: e.target.value,
                    })
                  }
                ></TextField>
                <Button
                  className={classes.buttonSubmit}
                  variant="contained"
                  // color="primary"
                  size="large"
                  type="submit"
                  onClick={handleSubmit}
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
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </form>

      {/* <Paper className={classes.paper} elevation={6}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6" className="temporary">
            Add a Song to the Playlist
          </Typography>
          <TextField
            name="ArtistName"
            variant="outlined"
            label="ArtistName"
            fullWidth
            value={createMySonglist.artist}
            onChange={(e) =>
              setCreateMySonglist({
                ...createMySonglist,
                artist: e.target.value,
              })
            }
          ></TextField>
          <TextField
            name="Song Title"
            variant="outlined"
            label="song title"
            fullWidth
            value={createMySonglist.title}
            onChange={(e) =>
              setCreateMySonglist({
                ...createMySonglist,
                title: e.target.value,
              })
            }
          ></TextField>
          <TextField
            name="Song Genre"
            variant="outlined"
            label="song genre"
            fullWidth
            value={createMySonglist.genre}
            onChange={(e) =>
              setCreateMySonglist({
                ...createMySonglist,
                genre: e.target.value,
              })
            }
          ></TextField>
          <TextField
            name="Song Duration"
            variant="outlined"
            label="song duration"
            fullWidth
            value={createMySonglist.duration}
            onChange={(e) =>
              setCreateMySonglist({
                ...createMySonglist,
                duration: e.target.value,
              })
            }
          ></TextField>
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
      </Paper> */}
    </>
  );
};

export default FormCreateSonglist;
