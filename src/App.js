// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import MovieDetailsPage from './pages/MovieDetailsPage';
import BackToTopButton from './components/BackToTopButton';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/movie/:id" element={<MovieDetailsPage />} />
                </Routes>
                <BackToTopButton />
            </div>
        </Router>
    );
}

export default App;
