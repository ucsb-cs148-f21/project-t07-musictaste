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
import useStyles from "./styles";
import { CardMedia } from "@mui/material";
import memories from "../../../../images/memories.png";
import FormCreateSonglist from "../../../Form/FormCreateSonglist";
import FormAddPicture from "../../../Form/FormAddPicture";
import { useSelector, useDispatch } from "react-redux";
import CommentSection from "./CommentSection";
import { useParams, useHistory } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { getUser } from "../../../../actions/userProfile";
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
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(user?.result?._id));
  }, [id, dispatch]);

  const classes = useStyles();
  const [pageSize, setPageSize] = useState(5);
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

  // useEffect(() => {
  //   window.addEventListener("beforeunload", getSonglists(id));
  //   return () => {
  //     console.log("This is working rn");
  //     window.removeEventListener("beforeunload", getSonglists(id));
  //   };
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("beforeunload", getPlaylists(id));
  //   return () => {
  //     window.removeEventListener("beforeunload", getPlaylists(id));
  //   };
  // }, []);
  const songlists = useSelector((state) => state.songlist);
  const playlist = id ? playlists.find((p) => p._id === id) : null;
  const users = useSelector((state) => state.users);
  // const playlist = useSelector((state) => state.musicPlaylists.playlists);

  // const songlists = useSelector((state) => state.songlist);
  // // const playlist = useSelector((state) => state.musicPlaylists);
  // const playlist = useSelector(
  // (state) => state.musicPlaylists
  // id ? state.musicPlaylists.find((p) => p._id === id) : null
  // );
  // const playlist = [];
  // const gallery = playlist.selectedFiles.map((pics) => {
  //   return {
  //     picture: pics,
  //   };
  // });
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
  // const handleAddUser = () => {
  //   dispatch(addContributor(users.id, id, 123));
  // };
  return (
    <Paper>
      {/* <Button onClick={handleAddUser}> ADD USER </Button> */}
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
        {console.log(users)}
        <CommentSection playlist={playlist} />
        <FormCreateSonglist playlist={playlist} users={users} id={id} />
        <FormAddPicture playlist={playlist} id={id} />
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
              {/* <Item>
            <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" />
          </Item> */}
            </Grid>
          ))}
        </Grid>
        {/* <Stack spacing={2} alignItems="center">
        <Pagination
          align="center"
          count={10}
          renderItem={(item) => (
            <PaginationItem
              // component={Link}
              to={`/posts?page=${1}`}
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack> */}
      </div>
    </Paper>
  );
};

export default MusicPlaylist;
