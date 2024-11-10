import React, { useState } from 'react';
import SearchResultItem from './SearchResultItem';

const SearchInput = ({ onSearch, results }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    };

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Buscar tableros..."
                value={query}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {results.length > 0 && (
                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                    {results.map((board) => (
                        <SearchResultItem key={board.id} board={board} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchInput;
