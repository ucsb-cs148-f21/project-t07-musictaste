import React, { useEffect, useState } from "react";

/* Add Song Dialog Select */
import Box from '@mui/material/Box';
/* import Button from '@mui/material/Button'; */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

const FormSongSearchDropdown = (props) => {

    const dropdownChanged = e => {
        props.changed(e.target.value);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="SelectResult">Select Result</InputLabel>
          <Select
            labelId="SelectResult"
            id="SelectResult"
            value={''}
            onChange={dropdownChanged}
            input={<OutlinedInput label="SelectResult" />}
            // width={700}
            MenuProps={{
                getContentAnchorEl: null,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center"
                },
                transformOrigin: {
                    vertical: 'top', 
                    horizontal: 'center'},
              }}

          >
            {/* <Menu
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: 'top', 
                    horizontal: 'center'}}
            > */}
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                {props.options.map((item, idx) => <MenuItem id={idx+1} value={item.id}>Song: {item.name} Artist: {item.artists[0].name} Album: {item.album.name} </MenuItem>)}
            {/*</Menu>*/}
          </Select>
        </FormControl>
    );
}

export default FormSongSearchDropdown;