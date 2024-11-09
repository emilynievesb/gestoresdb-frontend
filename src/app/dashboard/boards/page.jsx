'use client';
import React, { useState } from 'react';
import BoardCard from './BoardCard';
import NewBoardCard from './NewBoardCard';
import NewBoardModal from './NewBoardModal';
import EditBoardModal from './[id]/EditBoardModal';

const BoardList = () => {
    // !! Recuerda que estos datos deben ser cambiados por los que se trae la petición a la base de datos
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

    const [isNewBoardModalOpen, setIsNewBoardModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedBoard, setSelectedBoard] = useState(null);

    // Abrir el modal para crear un nuevo tablero
    const handleOpenNewBoardModal = () => {
        setIsNewBoardModalOpen(true);
    };

    const handleCloseNewBoardModal = () => {
        setIsNewBoardModalOpen(false);
    };

    // Abrir el modal para editar un tablero existente
    const handleOpenEditModal = (board) => {
        setSelectedBoard(board);
        setIsEditModalOpen(true);
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setSelectedBoard(null);
    };

    // Guardar los cambios al editar un tablero
    const handleSaveChanges = (updatedData) => {
        setBoards(boards.map((board) => (board.id === selectedBoard.id ? { ...board, ...updatedData, updatedAt: new Date().toISOString() } : board)));
        handleCloseEditModal();
    };

    // Crear un nuevo tablero
    const handleCreateBoard = (newBoardData) => {
        const newBoard = {
            ...newBoardData,
            id: boards.length + 1, //!! Genera un ID único (en un entorno real usarías un ID generado por el servidor, es decir que no es necesario que envies esto a la base de datos porque mongo ya te lo proporciona)
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isActive: true,
        };
        setBoards([...boards, newBoard]);
        handleCloseNewBoardModal();
    };

    // Alternar el estado activo/inactivo de un tablero
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
                        onEdit={() => handleOpenEditModal(board)}
                    />
                ))}
                <NewBoardCard onClick={handleOpenNewBoardModal} />
            </div>

            {/* Modal para crear un nuevo tablero */}
            <NewBoardModal isOpen={isNewBoardModalOpen} onClose={handleCloseNewBoardModal} onCreate={handleCreateBoard} />

            {/* Modal para editar un tablero existente */}
            <EditBoardModal isOpen={isEditModalOpen} onClose={handleCloseEditModal} onSave={handleSaveChanges} board={selectedBoard} />
        </div>
    );
};

export default BoardList;
