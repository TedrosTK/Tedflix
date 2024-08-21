
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/MovieDetails';

function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    return (
        <div className="movie-details-page">
            <MovieDetails movie={movie} />
        </div>
    );
}

export default MovieDetailsPage;
