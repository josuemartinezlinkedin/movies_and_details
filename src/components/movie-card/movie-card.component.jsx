import React from 'react'
import './movie-card.component.css'

//props destructuring so that we don't write props.movie1 each time
const MovieCard = ({id, movie}) => {
    id = movie.imdbID;
    return (
<div key={id} className="movie">
    <div>
        <p>{movie.Year}</p>
    </div>
    <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster :
            'https://via.placeholder.com/400'} alt={movie.Title} />
    </div>
    <div>
        <span>
            {movie.Type}
            <h3>{movie.Title}</h3>
        </span>
    </div>
</div>
)
}

export default MovieCard;