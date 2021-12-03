import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

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
const MusicPlaylistDataGrid = ({ songlists }) => {
  const [pageSize, setPageSize] = useState(5);
  const [editRowsModel, setEditRowsModel] = useState({});
  const handleEditRowsModelChange = React.useCallback((model) => {
    setEditRowsModel(model);
  }, []);
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

  return (
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
  );
};

export default MusicPlaylistDataGrid;
