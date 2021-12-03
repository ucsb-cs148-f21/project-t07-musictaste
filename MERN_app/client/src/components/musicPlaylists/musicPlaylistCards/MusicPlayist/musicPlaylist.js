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
    <Paper>
      {/*This whole segment from lines 124-135 should only show if playlist.creator is equal to my_user?.result?._id created on line 60*/}
      {playlist.name === my_user?.result?.name && (
        <MusicPlaylistAddUser users={users} id={id} my_user={my_user} />
      )}

      <div style={{ height: 400, width: props.width }}>
        <MusicPlaylistDataGrid songlists={songlists} />
        <CommentSection playlist={playlist} />
        {/*Need need to map playlist.contributors here and see if 'user' created on line 85 is in the contributors. 
        If they are, ONLY then should we show the FORMCREATESONGLIST and FORM ADD PICTURE divs */}
        {userPermissionValid && (
          <div>

            <FormCreateSonglist playlist={playlist} user={user} id={id} />
            <FormAddPicture playlist={playlist} id={id} />
          </div>
        )}
        <MusicPlaylistGallery playlists={playlists} id={id}
          className={classes.mainContainer}
          container
          spacing={3}
          alignItems="stretch"
        />
          {Array.from(playlist.selectedFiles).map((_, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card className={classes.card} raised elevation={6}>
                <CardMedia className={classes.media} image={_} />
              </Card>
            </Grid>
          ))}
      </div>
    </Paper>
  );
};

export default MusicPlaylist;
