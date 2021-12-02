import React, { useDebugValue, useEffect, useState } from "react";

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

    // const [currentSelection, setCurrentSelection] = useState('');
    const [val, setVal] = useState('');

    const dropdownChanged = e => {
        // e.preventDefault();
        // console.log('this is e: ' + e);
        // console.log('this is stringified e: ' + JSON.stringify(e));
        // console.log('this is newValue: ' + JSON.stringify(newValue));
        // console.log('this is e.target.value: ' )
        //// console.log('item value?' + e.target.value);
        // console.log(`BACKTICK Song: ${e.target.title} Artist: ${e.target.artist} Album: ${e.target.album}`)
        //// setCurrentSelection(`Song: ${e.target.title} Artist: ${e.target.artist} Album: ${e.target.album}`);
        // console.log("Space Dog: Song: " + e.target.name + " Artist: " + e.target.artists[0]?.name + " Album: " + e.target.album.name);
        // setCurrentSelection(`Song: ${e.target.name} Artist: ${e.target.artists[0].name} Album: ${e.target.album.name}`);
        setVal(e.target.value);
        props.changed(e.target.value);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="SelectResult">Select Result</InputLabel>
          <Select
            labelId="SelectResult"
            id="SelectResult"
            value={val}
            onChange={dropdownChanged}
            input={<OutlinedInput label="SelectResult" />}
            // renderValue={() => `Song: ${e.target.title} Artist: ${e.target.artist} Album: ${e.target.album}`}
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
                {props.options.map((item, idx) => <MenuItem key={idx+1} value={item.id}>Song: {item.name} Artist: {item.artists[0].name} Album: {item.album.name} </MenuItem>)}
            {/*</Menu>*/}
          </Select>
        </FormControl>
    );
}

export default FormSongSearchDropdown;