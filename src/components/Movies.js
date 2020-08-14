import React from 'react';
import Movie from './Movie';

const Movies = ({movies,openpopup}) => {
    return (
        <div className="moviescontainer">
            {movies.map(movie => (
                <Movie key={movie.imdbID} movie ={movie} openpopup={openpopup}/>
            ))}            
        </div>
    )
}

export default Movies;
