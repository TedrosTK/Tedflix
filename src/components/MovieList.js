
import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item">
                    <h3>{movie.title}</h3>
                    <Link to={`/movie/${movie.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
