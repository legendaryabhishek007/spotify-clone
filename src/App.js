import SpotifyWebApi from "spotify-web-api-js"
import React, {useEffect, useState} from 'react';
import Player from "./Player"
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();



function App() {
  // Run code based on a given condition
  // const [token, setToken] = useState(null);
  const [{user, token},dispatch] =  useDataLayerValue();


  useEffect(() =>{
    //code....
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token =  hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      // setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        // console.log('person',user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist('5O0lR7LiAE5kPqw0XEDKRn').then(response =>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }


    // console.log('I have a token',token);
  },[]);
  // console.log("Datauser", user);
  // console.log("token",token);
  return (
    <div className="app">
      {/* Spotify Logo*/}
      {/* Login with spotify button*/}
      {
        token ?<Player spotify ={spotify}/>:<Login />
      }
      
    </div>
  );
}

export default App;
