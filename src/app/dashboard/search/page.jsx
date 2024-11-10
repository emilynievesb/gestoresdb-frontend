'use client';
import React, { useState } from 'react';
import SearchInput from './SearchInput';

const SearchBoardsPage = () => {
    // !! Recuerda que estos datos deben ser cambiados por los que se trae la petición a la base de datos
    const [boards] = useState([
        { id: 1, title: 'Proyecto A', author: 'Juan Pérez' },
        { id: 2, title: 'Ideas de Marketing', author: 'María López' },
        { id: 3, title: 'Planificación Semanal', author: 'Carlos Martínez' },
        { id: 4, title: 'Desarrollo Web', author: 'Ana González' },
    ]);

    const [filteredBoards, setFilteredBoards] = useState([]);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredBoards([]);
            return;
        }
        // !! Este filto de coincidencias parciales, provisionalmente está hecho así, pero no debería, esto se hace desde el backend, lo único que se hace desde el frontend es mandarle lo que la persona va tecleando, a la respectiva consulta que tiene el método específico
        const results = boards.filter((board) => board.title.toLowerCase().includes(query.toLowerCase()));
        setFilteredBoards(results);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Buscar Tableros</h1>
            <SearchInput onSearch={handleSearch} results={filteredBoards} />
        </div>
    );
};

export default SearchBoardsPage;
