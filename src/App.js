import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import 'font-awesome/css/font-awesome.min.css';
import Popup from './components/Popup';

import './App.css';
import axios from 'axios';

const App = ()=> {

  const apiurl =  "http://www.omdbapi.com/?apikey=41ed672f";

  const [moviesearch,setMoviesearch] = useState('');
  const [moviequry,setMoviequery] = useState('batman');
  const [movies,setMovies] = useState([]);
  const [selected,setSelected] = useState({});

  
 useEffect(() => {
  getMovies();

  },[moviequry]);

  const getMovies = async() => {
    const response = await fetch(apiurl+"&s="+moviequry)
    const data =  await response.json();
    console.log(data.Search);
    setMovies(data.Search);

  }

  const handleinput = (e)=>{
    e.preventDefault();
    setMoviesearch(e.target.value);
    console.log(e.target.value);


  }

  const search = (e) => {
    e.preventDefault();
    setMoviequery(moviesearch);
    console.log('searched movie is ' +moviesearch);
    setMoviesearch('');
    

  }

  const searchbyenter = (e) => {
    if (e.key  === 'Enter'){
      setMoviequery(moviesearch);
      console.log('searched movie is ' +moviesearch);
      setMoviesearch('');
      
    }
  }
  

  const openpopup = async(id) => {
    const response = await fetch(apiurl+"&i="+id)
    const data =  await response.json();

      console.log(data);
      setSelected(data);


  

  }

  const closepopup = () => {
    setSelected({});
    
  }
  


  return (
    <div className="outerContainer">
        <div className="container">
        <Header search={search} handleinput={handleinput} moviesearch={moviesearch} searchbyenter={searchbyenter}/>
        <Movies movies={movies} openpopup={openpopup}/>
        {(typeof selected.Title != 'undefined' )? <Popup selected={selected} closepopup={closepopup}/> : null}

        </div>  
    </div>
  )
}

export default App;
