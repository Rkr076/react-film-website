import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard';


const API_URL='https://www.omdbapi.com?apikey=31c53211';

function App() {

  const[movie, setMovie] = useState([]);
  const[searchTerm, setsearchTerm] = useState('');

  // 31c53211
  const searchMovies = async (title) =>
  {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovie(data.Search);
  }

  useEffect(()=>
  {
    searchMovies('spiderman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input
         placeholder='Search for movies'
         value={searchTerm}
         onChange={(e)=>{
          setsearchTerm(e.target.value);
         }}
        
        />
        <img src={SearchIcon}
        alt="searchIcon"
        onClick={()=>{
          searchMovies(searchTerm);
        }}
        />

      </div>

      <div className='container'>
        {movie.map((element)=>{
          return(
            <Moviecard element={element} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
