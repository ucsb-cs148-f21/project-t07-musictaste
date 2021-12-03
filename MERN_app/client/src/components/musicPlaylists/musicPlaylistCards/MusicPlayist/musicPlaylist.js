import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Card,
  CircularProgress,
} from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import useStyles from "./styles";
import { CardMedia } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import memories from "../../../../images/memories.png";
import FormCreateSonglist from "../../../Form/FormCreateSonglist";
import FormAddPicture from "../../../Form/FormAddPicture";
import { useSelector, useDispatch } from "react-redux";
import CommentSection from "./CommentSection";
import TextField from "@mui/material/TextField";
import { useParams, useHistory } from "react-router-dom";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { getUser, getUsers } from "../../../../actions/userProfile";
import {
  addContributor,
  getPlaylist,
  getPlaylists,
  getSonglists,
} from "../../../../actions/musicPlaylist";
import MusicPlaylistAddUser from "./musicPlaylistAddUser";
import MusicPlaylistDataGrid from "./musicPlaylistDataGrid";
import MusicPlaylistGallery from "./musicPlaylistGallery";


const MusicPlaylist = (props) => {
  const { id } = useParams();
  const my_user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("In dispatch getSonglists");
    dispatch(getSonglists(id));
  }, [id, dispatch]);

  useEffect(() => {
    console.log("In dispatch get Playlists");
    dispatch(getPlaylists());
  }, [id, dispatch]);

  useEffect(() => {
    console.log("In dispatch get Users");
    dispatch(getUsers(id));
  }, [id, dispatch]);

  const classes = useStyles();

  const { playlists, isLoading } = useSelector((state) => state.musicPlaylists);
  const { users, isLoadingU } = useSelector((state) => state.users);
  const songlists = useSelector((state) => state.songlist);
  const playlist = id ? playlists.find((p) => p._id === id) : null;

  const user = my_user?.result?._id
    ? users.find((i) => i._id === my_user?.result?._id)
    : null;

  if (isLoading || isLoadingU) {

    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  const permissionValid = users.filter((element) =>
    playlist.contributor.includes(element._id)
  );
  const userPermissionValid = permissionValid.find(
    (p) => p._id == my_user?.result?._id
  );

  return (
    <React.Fragment>
      {(userPermissionValid || playlist.name === my_user?.result?.name) && (
        <Paper className={classes.segment}>
            <Grid container>
              <Grid item xs={8} sm={8} md={8} lg={8}>
            {/*This whole segment from lines 124-135 should only show if playlist.creator is equal to my_user?.result?._id created on line 60*/}
            {playlist.name === my_user?.result?.name && (
              <MusicPlaylistAddUser users={users} id={id} my_user={my_user} />
            )}
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4}>
            {(userPermissionValid || playlist.name === my_user?.result?.name) && (
              <FormCreateSonglist playlist={playlist} user={user} id={id} />
            )}
            </Grid>
          </Grid>
        </Paper>
      )}
  <Paper className={classes.segment}>
      <div style={{ height: 400, width: props.width }}>
        <MusicPlaylistDataGrid songlists={songlists} />
        /> */}
       </div>
   </Paper>
        
      <CommentSection playlist={playlist} />

      {(userPermissionValid || playlist.name === my_user?.result?.name) && (
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.segment}>
              <FormAddPicture playlist={playlist} id={id} />
            </Paper>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8}>
          <MusicPlaylistGallery playlists={playlists} id={id}
          className={classes.mainContainer}
          container
          spacing={3}
          alignItems="stretch"
          />
          </Grid>
          </Grid>
      )}

      {!(userPermissionValid || playlist.name === my_user?.result?.name) && (
        <MusicPlaylistGallery playlists={playlists} id={id}
        className={classes.mainContainer}
        container
        spacing={3}
        alignItems="stretch"
      />
      )}
    </React.Fragment>
  );
};

export default MusicPlaylist;
