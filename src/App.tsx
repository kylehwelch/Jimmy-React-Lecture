import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TopAppBar from './TopAppBar';
import ButtonAppBar from './TopAppBar';
import ClipLoader from "react-spinners/ClipLoader";


interface MovieDb {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection?: boolean,
  budget: number,
  genres: Genres[]
}

interface Genres {
  id: number,
  name: string
}

function App() {


  const [loading, setLoading] = useState<boolean>(false);
  const [movieData, setMovieData] = useState<MovieDb>({} as MovieDb);

  window.setTimeout(() => setLoading(true), 10000);


    useEffect(() => {
      setLoading(true);
      async function fetchMyAPI() {
        setMovieData( await fetch("https://api.themoviedb.org/3/movie/10116?api_key={apikey}")
        .then(res => res.json())
        .then((data) => data as MovieDb))
      }
      fetchMyAPI();
      setLoading(false);
}, [])
  
  return (
    <div className="App">
       <ClipLoader color={"blue"} loading={loading} size={150} />
      <header className="App-header">
        <ButtonAppBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
      <p>
        {JSON.stringify(movieData.adult)}
      </p>
    </div>
  );
}

export default App;
