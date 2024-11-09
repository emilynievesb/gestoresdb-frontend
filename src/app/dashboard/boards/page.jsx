'use client';
import React, { useState } from 'react';
import BoardCard from './BoardCard';
import NewBoardCard from './NewBoardCard';
import NewBoardModal from './NewBoardModal';

const BoardList = () => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: 'Proyecto A',
            createdAt: '2023-01-15',
            updatedAt: '2023-02-10',
            description: 'Este tablero es para el proyecto A',
            isActive: true,
        },
        {
            id: 2,
            title: 'Ideas de Marketing',
            createdAt: '2023-03-01',
            updatedAt: '2023-03-15',
            description: 'Tablero para ideas de marketing y campañas publicitarias',
            isActive: true,
        },
        {
            id: 3,
            title: 'Planificación Semanal',
            createdAt: '2023-04-05',
            updatedAt: '2023-04-10',
            description: 'Planificación semanal de tareas y eventos importantes',
            isActive: false,
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleCreateBoard = (newBoard) => {
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;
        setBoards([...boards, { ...newBoard, id: boards.length + 1, createdAt, updatedAt, isActive: true }]);
    };

    const toggleBoardStatus = (id) => {
        setBoards(boards.map((board) => (board.id === id ? { ...board, isActive: !board.isActive } : board)));
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Mis Tableros</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {boards.map((board) => (
                    <BoardCard
                        key={board.id}
                        title={board.title}
                        createdAt={board.createdAt}
                        updatedAt={board.updatedAt}
                        description={board.description}
                        isActive={board.isActive}
                        onToggle={() => toggleBoardStatus(board.id)}
                    />
                ))}
                <NewBoardCard onClick={handleOpenModal} />
            </div>
            <NewBoardModal isOpen={isModalOpen} onClose={handleCloseModal} onCreate={handleCreateBoard} />
        </div>
    );
};

export default BoardList;
