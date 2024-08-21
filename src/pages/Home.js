
import React from 'react';
import SearchBar from '../components/SearchBar';
import RandomMovie from '../components/RandomMovie';

function Home() {
    const handleSearch = (query) => {
        console.log("Searching for:", query);
        // Implement search logic here
    };

    return (
        <div className="home">
            <SearchBar onSearch={handleSearch} />
            <RandomMovie />
        </div>
    );
}

export default Home;
