import React, { useEffect, useState } from "react";

const FormSongSearchDropdown = (props) => {

    const dropdownChanged = e => {
        props.changed(e.target.value);
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="SelectResult">Select Result</InputLabel>
          <Select
            labelId="SelectResult"
            id="SelectResult"
            value={''}
            onChange={dropdownChanged}
            input={<OutlinedInput label="SelectResult" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* songSearchResults.listOfSongSearchResults */}
            {props.results.map((item, idx) => <MenuItem id={idx+1} value={item.value}>Song: {item.song} Artist: {item.artist} Album: {item.album}</MenuItem>)}
          </Select>
        </FormControl>
    );
}