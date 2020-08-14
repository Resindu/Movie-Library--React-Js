import React from 'react';

const Movie = ({movie,openpopup}) => {
    return (
        <div className="moviebox" onClick={()=>openpopup(movie.imdbID)}>
            <img className="movieimg" src={movie.Poster} />
            <p className="movietitle">{movie.Title}</p>
                 
        </div>
    )
}

export default Movie
