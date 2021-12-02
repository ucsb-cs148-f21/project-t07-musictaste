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

const columns = [
  // { field: "id", headerName: "ID", width: 150 },
  { field: "artist", headerName: "Artist", width: 250, editable: true },
  { field: "title", headerName: "Title", width: 250, editable: true },
  { field: "duration", headerName: "Duration", width: 300, editable: true },
  { field: "genre", headerName: "Genre", width: 200, editable: true },
  {
    field: "contributor",
    headerName: "Contributor",
    width: 250,
    editable: false,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MusicPlaylist = (props) => {
  const { id } = useParams();
  const { playlists, isLoading } = useSelector((state) => state.musicPlaylists);
  const my_user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [id, dispatch]);

  const classes = useStyles();
  const [pageSize, setPageSize] = useState(5);
  const [personName, setPersonName] = React.useState([]);
  const [editRowsModel, setEditRowsModel] = useState({});
  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);

  useEffect(() => {
    dispatch(getSonglists(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getPlaylists(id));
  }, [id, dispatch]);

  const songlists = useSelector((state) => state.songlist);
  const playlist = id ? playlists.find((p) => p._id === id) : null;
  const users = useSelector((state) => state.users);
  const user = my_user?.result?._id
    ? users.find((i) => i._id === my_user?.result?._id)
    : null;
  
  const handleChange = (value) => {
    console.log(value);
  };

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }
  const rows1 = songlists.map((songlist) => {
    return {
      id: songlist._id,
      artist: songlist.artist,
      title: songlist.title,
      duration: songlist.duration,
      genre: songlist.genre,
      contributor: songlist.contributor,
    };
  });

  const name_vals = users.map((one_user) => {
    return {
      label: one_user.name,
      id: one_user._id,
    };
  });
  const handleAddUser = (newValue) => {
    dispatch(addContributor(my_user?.result?._id, id, newValue.id));
  };

  const permissionValid = users.filter(element => playlist.contributor.includes(element._id));
  const userPermissionValid = permissionValid.find(p => p._id == my_user?.result?._id);
  console.log(permissionValid)
  console.log(my_user?.result?._id)
  console.log(userPermissionValid);
  return (
    <Paper>
      {/*This has to be changed to work on unique ids but rn it only works on names */}
      {playlist.name === my_user?.result?.name && (
        <Autocomplete
        value={personName}
        onChange={(event, newValue) => {
          setPersonName(newValue);
          // handleAddUser(newValue);
        }}
        id="controllable-states-demo"
        options={name_vals}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Name" />}
      />
      )
      }
      <Button onClick={() => handleAddUser(personName)}> Add User</Button>
      <div style={{ height: 400, width: props.width }}>
        <DataGrid
          rows={rows1}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          editRowsModel={editRowsModel}
          onEditRowsModelChange={handleEditRowsModelChange}
        />
        <CommentSection playlist={playlist} />
        {/*Need need to map playlist.contributors here and see if 'user' created on line 85 is in the contributors. 
        If they are, ONLY then should we show the FORMCREATESONGLIST and FORM ADD PICTURE divs */}
        {userPermissionValid && (
          <div>
            <FormCreateSonglist playlist={playlist} users={user} id={id} />
            <FormAddPicture playlist={playlist} id={id} />
          </div>
        )}
        
        <Grid
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
        </Grid>
      </div>
    </Paper>
  );
};

export default MusicPlaylist;
