import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Paper, Grid, Typography, Card } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import useStyles from "./styles";
import { CardMedia } from "@mui/material";
import memories from "../../../../images/memories.png";
import Alert from "@mui/material/Alert";

import { Pagination, PaginationItem } from "@material-ui/lab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "artist", headerName: "Artist", width: 250, editable: true },
  { field: "title", headerName: "Title", width: 250, editable: true },
  { field: "duration", headerName: "Duration", width: 300, editable: true },
  { field: "genre", headerName: "Genre", width: 200, editable: true },
];

const rows = [
  {
    id: 1,
    artist: "Kanye West",
    title: "Runaway",
    duration: "9:08",
    genre: "Hip-Hop",
  },
  {
    id: 2,
    artist: "Kanye West",
    title: "Ghost Town",
    duration: "4:31",
    genre: "Hip-Hop",
  },
  {
    id: 3,
    artist: "Kendrick Lamar",
    title: "LOYALTY",
    duration: "3:47",
    genre: "Hip-Hop",
  },
  {
    id: 4,
    artist: "Silk Sonic",
    title: "Blast Off",
    duration: "4:45",
    genre: "R&B",
  },
  {
    id: 5,
    artist: "Ohio Players",
    title: "Sweet Sticky Thing",
    duration: "6:13",
    genre: "FUNK",
  },
  {
    id: 6,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 7,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 8,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 9,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 10,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 11,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 12,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 13,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 14,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
  {
    id: 15,
    artist: "",
    title: "",
    duration: "",
    genre: "",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MusicPlaylist = (props) => {
  const classes = useStyles();
  const [pageSize, setPageSize] = useState(5);
  const [editRowsModel, setEditRowsModel] = useState({});
  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);
  return (
    <Paper>
    <div style={{ height: 400, width: props.width }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        editRowsModel={editRowsModel}
        onEditRowsModelChange={handleEditRowsModelChange}
      />
      {/* <Typography variant="h1" color="text.secondary" align="center">
        FlashBack
      </Typography> */}
      <Grid
        className={classes.mainContainer}
        container
        spacing={3}
        alignItems="stretch"
      >
        {Array.from(Array(12)).map((_, index) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
            {/* <Card className={classes.card} raised elevation={6}>
              <CardMedia className={classes.media} image={memories} />
            </Card> */}
            {/* <Item> */}
            {/* <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png" /> */}
            {/* </Item> */}
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
