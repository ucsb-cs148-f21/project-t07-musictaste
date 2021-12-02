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

// const columns = [
//   // { field: "id", headerName: "ID", width: 150 },
//   { field: "artist", headerName: "Artist", width: 250, editable: true },
//   { field: "title", headerName: "Title", width: 250, editable: true },
//   { field: "duration", headerName: "Duration", width: 300, editable: true },
//   { field: "genre", headerName: "Genre", width: 200, editable: true },
//   {
//     field: "contributor",
//     headerName: "Contributor",
//     width: 250,
//     editable: false,
//   },
// ];

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

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
  // const [personName, setPersonName] = React.useState([]);
  // const [pageSize, setPageSize] = useState(5);
  // const [editRowsModel, setEditRowsModel] = useState({});
  // const handleEditRowsModelChange = React.useCallback((model) => {
  //   setEditRowsModel(model);
  // }, []);

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
  // const rows1 = songlists.map((songlist) => {
  //   return {
  //     id: songlist._id,
  //     artist: songlist.artist,
  //     title: songlist.title,
  //     duration: songlist.duration,
  //     genre: songlist.genre,
  //     contributor: songlist.contributor,
  //   };
  // });

  // const name_vals = users.map((one_user) => {
  //   return {
  //     label: one_user.name,
  //     id: one_user._id,
  //   };
  // });
  // const handleAddUser = (newValue) => {
  //   dispatch(addContributor(my_user?.result?._id, id, newValue.id));
  // };
  return (
    <Paper>
      {/*This whole segment from lines 124-135 should only show if playlist.creator is equal to my_user?.result?._id created on line 60*/}
      {playlist.name === my_user?.result?.name && (
        <MusicPlaylistAddUser users={users} id={id} my_user={my_user} />
      )}
      <div style={{ height: 400, width: props.width }}>
        <MusicPlaylistDataGrid songlists={songlists} />
        {/* <DataGrid
          rows={rows1}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
        /> */}
        <CommentSection playlist={playlist} />
        {/*Need need to map playlist.contributors here and see if 'user' created on line 85 is in the contributors. 
        If they are, ONLY then should we show the FORMCREATESONGLIST and FORM ADD PICTURE divs */}
        {userPermissionValid && (
          <div>
            <FormCreateSonglist playlist={playlist} user={user} id={id} />
            <FormAddPicture playlist={playlist} id={id} />
          </div>
        )}
        <MusicPlaylistGallery playlists={playlists} id={id} />
        {/* <Grid
          className={classes.mainContainer}
          container
          spacing={3}
          alignItems="stretch"
        >
          {Array.from(playlist.selectedFiles).map((_, index) => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
              <Card className={classes.card} raised elevation={6}>
                <CardMedia className={classes.media} image={_} />
              </Card>
            </Grid>
          ))}
        </Grid> */}
      </div>
    </Paper>
  );
};

export default MusicPlaylist;
