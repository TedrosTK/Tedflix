// src/pages/SearchResults.js
import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

function SearchResults() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example value

    useEffect(() => {
        // Fetch movies based on search query
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=query&page=${currentPage}`)
            .then(response => response.json())
            .then(data => setMovies(data.results));
    }, [currentPage]);

    return (
        <div className="search-results">
            <MovieList movies={movies} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default SearchResults;
