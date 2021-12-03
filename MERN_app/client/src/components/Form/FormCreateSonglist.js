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

/* Add Song Dialog Select */
import Box from "@mui/material/Box";
/* import Button from '@mui/material/Button'; */
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
/*import MenuItem from '@mui/material/MenuItem'; */
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

import { Credentials } from "../../Credentials.js";

/* Dynamic dropdown */
import FormSongSearch from "./FormSongSearch";

const FormCreateSonglist = ({ playlist, user, id }) => {
  console.log(user);
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
    if (user) setMyContributedPlaylists(user);
  }, [user]);

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
    console.log("current createmysonglist " + JSON.stringify(createMySonglist));
    dispatch(
      addSong(currentId, {
        ...createMySonglist,
        contributor: user.name,
        associatedPlaylist: currentId,
      })
    );
    // RIght here is the code for the current contributed playlists. RN I was just checking if it will update
    // Once the user adds a song. But I need to make it so it only updates once the user inputs to a playlist they haven't contributed
    // to before.
    const alreadyContributed = myContributedPlaylists.contributedPlaylists.find(
      (p) => p == playlist._id
    );
    if (!alreadyContributed) {
      dispatch(
        updateUser(user._id, {
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

  // const [createMySonglist, setCreateMySonglist] = useState({
  //   artist: "",
  //   title: "",
  //   genre: "",
  //   duration: "",
  //   contributor: "",
  //   associatedPlaylist: "",
  // });

  const spotify = Credentials();
  const [token, setToken] = useState("");

  useEffect(() => {
    // console.log('Client ID: ' + spotify.ClientId);
    // console.log('Client Secret: ' + spotify.ClientSecret);
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(spotify.ClientId + ":" + spotify.ClientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    })
      .then((tokenResponse) => {
        setToken(tokenResponse.data.access_token);
        // console.log('token 1: ' + tokenResponse.data.access_token);
        // console.log('querySong: ' + props.querySong);
        // console.log('queryArtist: ' + props.queryArtist);
      })
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        }
        if (err.response) {
          console.log(err.response);
        }
      });
  }, []);

  const handleSongSelect = (songDetail) => {
    console.log(songDetail);
    // console.log('token: ' + token);

    // let retrievedGenre = '';
    // console.log(retrievedGenre);

    axios(`https://api.spotify.com/v1/artists/${songDetail.artists[0].id}`, {
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((searchResponse) => {
      console.log("search response artist: " + JSON.stringify(searchResponse));
      // console.log('testing: ' + JSON.stringify(searchResponse));
      // console.log('testing: ' + JSON.stringify(searchResponse.data));
      // console.log('testing: ' + JSON.stringify(searchResponse.data.tracks.items[0]));
      // console.log('testing: ' + JSON.stringify(searchResponse.data.tracks && searchResponse.data.tracks.items[0] && searchResponse.data.tracks.items[0].album && searchResponse.data.tracks.items[0].album.album_type));
      // console.log('testing: ' + JSON.stringify(searchResponse.data?.tracks?.items[0]?.album?.album_type));
      let retrievedGenre = searchResponse.data.genres[0];

      console.log("retrieved genre: " + retrievedGenre);
      dispatch(
        addSong(currentId, {
          artist: songDetail.artists[0].name,
          title: songDetail.name,
          genre: retrievedGenre,
          duration: `${Math.floor(songDetail.duration_ms / 60000)}:${(
            "0" +
            Math.floor(
              (songDetail.duration_ms / 60000 -
                Math.floor(songDetail.duration_ms / 60000)) *
                60
            )
          ).slice(-2)}`,
          contributor: user.name,
          associatedPlaylist: currentId,
        })
      );
      // RIght here is the code for the current contributed playlists. RN I was just checking if it will update
      // Once the user adds a song. But I need to make it so it only updates once the user inputs to a playlist they haven't contributed
      // to before.
      const alreadyContributed =
        myContributedPlaylists.contributedPlaylists.find(
          (p) => p == playlist._id
        );
      if (!alreadyContributed) {
        dispatch(
          updateUser(user._id, {
            ...myContributedPlaylists,
            contributedPlaylists: [
              ...myContributedPlaylists.contributedPlaylists,
              currentId,
            ],
          })
        );
      }
    });

    // handleSubmit();
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <PopupState variant="popover" popupId="AddSongPopup">
          {(popupState) => (
            <React.Fragment>
              <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
                {...bindTrigger(popupState)}
                onClick={handleClickOpen}
              >
                ADD SONG
              </IconButton>
              <Dialog
                {...bindMenu(popupState)}
                open={open}
                onClose={handleClose}
              >
                <DialogTitle>Song Search</DialogTitle>
                <DialogContent>
                  <FormSongSearch
                    handleSubmit={handleSongSelect}
                    closeDialog={handleClose}
                  />
                </DialogContent>
              </Dialog>
              {/*
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
              */}
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
