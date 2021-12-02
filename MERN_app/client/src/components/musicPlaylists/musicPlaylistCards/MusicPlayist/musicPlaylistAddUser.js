import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Button } from "@material-ui/core";
import { addContributor } from "../../../../actions/musicPlaylist";
const MusicPlaylistAddUser = ({ users, id, my_user }) => {
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState([]);
  const handleAddUser = (newValue) => {
    dispatch(addContributor(my_user?.result?._id, id, newValue.id));
  };
  const name_vals = users.map((one_user) => {
    return {
      label: one_user.name,
      id: one_user._id,
    };
  });
  return (
    <>
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
      <Button onClick={() => handleAddUser(personName)}> Add User</Button>
    </>
  );
};
export default MusicPlaylistAddUser;
