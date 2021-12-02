import React, { useState, useEffect } from "react";
import { addSong, addToGallery } from "../../actions/musicPlaylist";
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
import { updateUser } from "../../actions/userProfile";
import { useDispatch, useSelector } from "react-redux";

const FormCreateSonglist = ({ playlist, users, id }) => {
  const [currentId, setCurrentId] = useState(id);
  const [myFlag, setmyFlag] = useState(false);
  const [createMySonglist, setCreateMySonglist] = useState({
    artist: "",
    title: "",
    genre: "",
    duration: "",
    contributor: "",
    associatedPlaylist: "",
  });

  const [playlistContributor, setPlaylistContributor] = useState({
    contributor: [],
  });

  useEffect(() => {
    if (playlist) setPlaylistContributor(playlist);
  }, [playlist]);

  const [myContributedPlaylists, setMyContributedPlaylists] = useState({
    contributedPlaylists: [],
  });

  useEffect(() => {
    if (users) setMyContributedPlaylists(users);
  }, [users]);

  useEffect(() => {
    // console.log(myFlag);
  }, [myFlag]);

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

  const handleSubmit = () => {
    // e.preventDefault();
    dispatch(
      addSong(currentId, {
        ...createMySonglist,
        contributor: users.name,
        associatedPlaylist: currentId,
      })
    );
    // RIght here is the code for the current contributed playlists. RN I was just checking if it will update
    // Once the user adds a song. But I need to make it so it only updates once the user inputs to a playlist they haven't contributed
    // to before.
    const alreadyContributed = 
      myContributedPlaylists.contributedPlaylists.find(p => p == playlist._id);
    if (!alreadyContributed) {
      dispatch(
        updateUser(users._id, {
          ...myContributedPlaylists,
          contributedPlaylists: [
            ...myContributedPlaylists.contributedPlaylists,
            currentId,
          ],
        })
      );
    }
    
    // clear(e);
  };
  // console.log(users)
    // console.log(users.contributedPlaylists);
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
                size="medium"
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
                {/* {console.log(myContributedPlaylists)} */}
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
                  // type="submit"
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
