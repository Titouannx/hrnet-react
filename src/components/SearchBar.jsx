import React from 'react';

function SearchBar({ globalFilter, setGlobalFilter }) {
    return (
        <div id="search-container">
            <input
                value={globalFilter || ''}
                onChange={e => setGlobalFilter(e.target.value)}
                placeholder="Search..."
            />
        </div>
    );
}

export default SearchBar;
