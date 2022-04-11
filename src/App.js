import React, { useEffect, useState } from 'react';
import MovieCard from './components/movie-card/movie-card.component.jsx'
import './App.css'
//svg from https://www.svgrepo.com/svg/76804/search
import SearchIcon from './search.svg'
const axios = require("axios");

const App = () => {
    //setting to an empty array 
    const [movies, setMovies] = useState([]);
    const [searchFor, setSearchFor] = useState('');
    //calls searchMovies on launch and refresh
    
    const searchMovies = (word) => {
        const options = {
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}`,
            params: { s: word },
            headers: {
                'X-RapidAPI-Host': `${process.env.REACT_APP_API_HOST}`,
                'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`
            }
        };

        axios.request(options).then((res) => {
            // let uniqueMovies = res.data.Search.filter((diffMovies, idx) => 
            // idx === res.data.Search.findIndex(diffMovies2 =>
            //      diffMovies2.imdbID === diffMovies.imdbID));
            //creating Map object and only including unique imdbID's
            let uniqueMovies = [...new Map(res.data.Search.map((item) => [item.imdbID, item])).values()]
            setMovies(uniqueMovies)
        }).catch((err) => {
            console.error(err);
        });
    }
    useEffect(() => {
        searchMovies('king')
    }, [])

    //TODO
    // title: t=some%20title%20here
    // keyword: s=word
    // movie ID: i=id

    // sample body of response
    // const movie1 = {
    //     "Title": "The Lord of the Rings: The Return of the King",
    //     "Year": "2003",
    //     "imdbID": "tt0167260",
    //     "Type": "movie",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    // }

    return (
        <div className="app">
            <h1>Movies and Details</h1>
            <div className="search">
                <input 
                placeholder='search for movies'
                value={searchFor}
                onChange={(e) => setSearchFor(e.target.value)}
                />
                <img
                alt="search"
                src={SearchIcon}
                onClick={()=>searchMovies(searchFor)}
                />
                {/* TODO onClick change letter in Params to searhc for titles instead of keywords */}
                {/* <button onClick={() => alert('Have more to do here')}>search by title</button> */}
                {/* <button onClick={() => alert('Have more to do here')}>search by keywork</button> */}
            </div>
            { 
            movies.length > 0
            ? (
            <div className="container">
                {movies.map((res)=>
                <MovieCard key={res.imdbID} movie={res}/>
                )}
            </div>
            ) : (<div className="empty">
                <h2>No movies found</h2>
            </div>)
            }
        </div>
    );
}

export default App;
