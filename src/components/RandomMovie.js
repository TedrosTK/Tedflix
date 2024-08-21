
import React, { useState, useEffect } from 'react';

function RandomMovie() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Replace this URL with your movie API endpoint
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
            .then(response => response.json())
            .then(data => {
                const randomMovie = data.results[Math.floor(Math.random() * data.results.length)];
                setMovie(randomMovie);
            });
    }, []);

    return (
        <div className="random-movie">
            {movie ? (
                <>
                    <h2>Random Movie</h2>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RandomMovie;
