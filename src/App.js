import React, {useEffect} from "react";
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1faa1330';

const movie1 = {
        "Title": "Batman & Robin",
        "Year": "1997",
        "imdbID": "tt0118688",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Batman')
    }, []);
    return (
        <div className="app">
            <h1>Movie Land</h1> 

            <div className="search">
                <input 
                placeholder="Search for movies" 
                value="" 
                onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movie1.Year}</p>
                    </div>
                    <div>
                        <img src={movie1.Poster} alt={movie1.Title}/>
                    </div>
                </div>
            </div>
        </div>
          
    )
}

export default App;