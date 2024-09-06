// SearchBar.jsx
import React, { useState } from 'react';
import "../cssfolder/SearchBar.css";

const SearchBar = ({ setFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        setFilter(value.toLowerCase()); // Convertir a minúsculas
    };

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <button type="submit" onClick={() => setFilter(searchTerm.toLowerCase())}>Buscar</button>
        </div>
    );
};

export default SearchBar;
