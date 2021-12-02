import React, { useEffect, useState } from "react";
import { Credentials } from "../../Credentials.js";

// https://github.com/awicks44/Spotify-React/blob/main/App.js

import {TextField, Typography} from "@material-ui/core";

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
import {Button} from "@material-ui/core";

/* {querySong, queryArtist, handleSongSelect} */

const FormSongSearch = (props) => {

  const spotify = Credentials();
  const [token, setToken] = useState('');

  const [searchQuery, setSearchQuery] = useState({
    title: '',
    artist: '',
  });

  const [results, setResults] = useState({selectedResult: '', listOfResults: []});
  const [songInfo, setSongInfo] = useState(null);

  // const sample = [
  //   {value: 1, name: 'A', artist: '1', album: 'X'},
  //   {value: 2, name: 'B', artist: '2', album: 'Y'},
  //   {value: 3, name: 'C', artist: '3', album: 'Z'},
  // ]
  // const [selectedSong, setSelectedSong] = useState('');

  const selection = val => {
    const options = [...results.listOfResults];
    // console.log('selected: ' + JSON.stringify(options));
    // console.log('val: ' + JSON.stringify(val));
    const detail = options.filter(s => s.id === val);
    console.log(detail[0]);
    setSongInfo(detail[0]);
  }

  /* End Add Song Dialog Select */

  // const [songSearchResults, setSongSearchResults] = useState({selectedResult: '', listOfSongSearchResults: []});


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
            setToken(tokenResponse.data.access_token);
            // console.log('token 1: ' + tokenResponse.data.access_token);
            // console.log('querySong: ' + props.querySong);
            // console.log('queryArtist: ' + props.queryArtist);
        }).catch(err => {
            if(err.request){ console.log(err.request) }
            if(err.response){ console.log(err.response) } 
        });
  }, []);

  const runSearch = query => {
    setSearchQuery({
      title: query.song,
      artist: query.artist
    });

    // console.log('running search');
    // console.log('song: ' + query.song);
    // console.log('artist: ' + query.artist);
    // console.log('token: ' + token);
    // console.log(`https://api.spotify.com/v1/search?q=track%3A${query.song}%20artist%3A${query.artist}&type=track&limit=10`)

    axios(`https://api.spotify.com/v1/search?q=track%3A${query.song}%20artist%3A${query.artist}&type=track&limit=10`, {
        headers: {
            'Authorization' : 'Bearer ' + token,
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        },
        method: 'GET',
    }).then(searchResponse => {
        // console.log('testing: ' + JSON.stringify(searchResponse));
        // console.log('testing: ' + JSON.stringify(searchResponse.data));
        // console.log('testing: ' + JSON.stringify(searchResponse.data.tracks.items[0]));
        // console.log('testing: ' + JSON.stringify(searchResponse.data.tracks && searchResponse.data.tracks.items[0] && searchResponse.data.tracks.items[0].album && searchResponse.data.tracks.items[0].album.album_type));
        // console.log('testing: ' + JSON.stringify(searchResponse.data?.tracks?.items[0]?.album?.album_type));
        setResults({
          results: results.selectedResult,
          listOfResults: searchResponse.data?.tracks?.items
        })
    });

    console.log(results);
  }

  // useEffect(() => {
  //   // searchSpotify();
  //   console.log(props);
  //   console.log('Searching Spotify');
  //   console.log('Client ID: ' + spotify.ClientId);
  //   console.log('Client Secret: ' + spotify.ClientSecret);
  //   axios('https://accounts.spotify.com/api/token', {
  //           headers: {
  //               'Content-Type' : 'application/x-www-form-urlencoded',
  //               'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
  //           },
  //           data: 'grant_type=client_credentials',
  //           method: 'POST'
  //       }).then(tokenResponse => {
  //           // setToken(tokenResponse.data.access_token); not working for some reason
  //           console.log('token 1: ' + tokenResponse.data.access_token);
  //           console.log('querySong: ' + props.querySong);
  //           console.log('queryArtist: ' + props.queryArtist);

  //           axios(`https://api.spotify.com/v1/search?q=track%3A${props.querySong}%2Bartist%3A${props.queryArtist}&type=track%2Cartist&limit=10`, {
  //               headers: {
  //                   'Authorization' : 'Bearer ' + tokenResponse.data.access_token,
  //                   'Accept' : 'application/json',
  //                   'Content-Type' : 'application/json',
  //               },
  //               method: 'GET',
  //           }).then(searchResponse => {
  //               console.log('searchRespons: ' + searchResponse);
  //               console.log('tracks: ' + searchResponse.data.tracks.items);

  //               setSongSearchResults({
  //                   selectedResult: songSearchResults.selectedResult,
  //                   listOfSongSearchResults: searchResponse.data.tracks.items
  //               });
  //           });

  //       }).catch(err => {
  //           if(err.request){ console.log(err.request) }
  //           if(err.response){ console.log(err.response) } 
  //       });
  //       // console.log('token 2: ' + token)
  // }, [props.querySong, props.queryArtist]);

    return (
      <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
          <TextField
            name="Artist"
            variant="outlined"
            label="Artist"
            value={searchQuery.artist}
            onChange={(e) =>
              // setSearchQuery({
              //   ...searchQuery,
              //   artist: e.target.value,
              // })
              runSearch({
                song: searchQuery.title,
                artist: e.target.value
              })
          }
          ></TextField>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <TextField
            name="SongTitle"
            variant="outlined"
            label="Song Title"
            value={searchQuery.title}
            onChange={(e) => 
              // setSearchQuery({
              //   ...searchQuery,
              //   title: e.target.value,
              // });
              runSearch({
                song: e.target.value,
                artist: searchQuery.artist
              })
            }
          ></TextField>
        </FormControl>
        <FormSongSearchDropdown options={results.listOfResults} changed={selection}/>
        {/*<Button variant="contained" onClick={props.handleSubmit(songInfo)}>Add Song</Button>*/}
      </Box>
    );
}

export default FormSongSearch;