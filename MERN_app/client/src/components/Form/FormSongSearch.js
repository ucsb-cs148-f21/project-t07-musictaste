import React, { useEffect, useState } from "react";
import { Credentials } from "../../Credentials.js";

// https://github.com/awicks44/Spotify-React/blob/main/App.js

/* Add Song Dialog Select */
import Box from '@mui/material/Box';
/* import Button from '@mui/material/Button'; */
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

import FormSongSearchDropdown from "./FormSongSearchDropdown";

/* {querySong, queryArtist, handleSongSelect} */

const FormSongSearch = (props) => {

    const spotify = Credentials();

  const results = [
    {value: 1, name: 'A', artist: '1', album: 'X'},
    {value: 2, name: 'B', artist: '2', album: 'Y'},
    {value: 3, name: 'C', artist: '3', album: 'Z'},
  ]

  const [token, setToken] = useState('');
  const [songSearchResults, setSongSearchResults] = useState({selectedResult: '', listOfSongSearchResults: []});


//   useEffect(() => {
//         axios('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             data: 'grant_type=client_credentials',
//             headers: {
//                 'Content-Type' : 'application/x-www-form-urlencoded',
//                 'Authorization' : 'Basic' + btoa('a39abe0974fa4a8283a3d0ba39db7be0:07075b9be29c4b98b232f8d8e20aa5c0'),
//             }
//         }).then(tokenResponse => {
//             setToken(tokenResponse.data.access_token);
//             console.log('token 1: ' + tokenResponse.data.access_token)
//         })
//         console.log('token 2: ' + token)
//   }, [])

  useEffect(() => {
    // searchSpotify();
    console.log(props);
    console.log('Searching Spotify');
    console.log('Client ID: ' + spotify.ClientId);
    console.log('Client Secret: ' + spotify.ClientSecret);
    axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        }).then(tokenResponse => {
            // setToken(tokenResponse.data.access_token); not working for some reason
            console.log('token 1: ' + tokenResponse.data.access_token);
            console.log('querySong: ' + props.querySong);
            console.log('queryArtist: ' + props.queryArtist);

            axios(`https://api.spotify.com/v1/search?q=track%3A${props.querySong}%2Bartist%3A${props.queryArtist}&type=track%2Cartist&limit=10`, {
                headers: {
                    'Authorization' : 'Bearer ' + tokenResponse.data.access_token,
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                },
                method: 'GET',
            }).then(searchResponse => {
                console.log('searchRespons: ' + searchResponse);
                console.log('tracks: ' + searchResponse.data.tracks.items);

                setSongSearchResults({
                    selectedResult: songSearchResults.selectedResult,
                    listOfSongSearchResults: searchResponse.data.tracks.items
                });
            });

        }).catch(err => {
            if(err.request){ console.log(err.request) }
            if(err.response){ console.log(err.response) } 
        });
        // console.log('token 2: ' + token)
  }, [props.querySong, props.queryArtist]);

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="SelectResult">Select Result</InputLabel>
          <Select
            labelId="SelectResult"
            id="SelectResult"
            value={''}
            onChange={e => props.handleSongSelect(e.target.value)}
            input={<OutlinedInput label="SelectResult" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* songSearchResults.listOfSongSearchResults */}
            {songSearchResults.listOfSongSearchResults.map((item, idx) => <MenuItem id={idx} value={item.value}>Song: {item.song} Artist: {item.artist} Album: {item.album}</MenuItem>)}
          </Select>
        </FormControl>
    );
}

export default FormSongSearch;