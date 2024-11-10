import React, { useState } from 'react';
import PostIt from './PostIt';
import AddPostItButton from './AddPostItButton';
import AddPostItModal from './AddPostItModal';

const BoardView = () => {
    // !! Cambiar estos datos, por los datos reales que corresponden a este tablero con id específico
    const [postIts, setPostIts] = useState([
        { id: 1, content: 'Comprar leche', color: 'bg-yellow-200' },
        { id: 2, content: 'Llamar a mamá', color: 'bg-green-200' },
        { id: 3, content: 'Reunión a las 3pm', color: 'bg-blue-200' },
        { id: 4, content: 'Hacer ejercicio', color: 'bg-pink-200' },
        { id: 5, content: 'Leer un libro', color: 'bg-purple-200' },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAddPostIt = (content, color) => {
        setPostIts([...postIts, { id: postIts.length + 1, content, color }]);
    };

    return (
        <div>
            {/* TAMBIÉN CAMBIAR EL TÍTULO DEL TABLERO POR EL QUE ESTÁ GUARDADO EN LA BASE DE DATOS */}
            <h1 className="text-3xl font-bold mb-4">Mi Pizarra de Ideas</h1>
            <AddPostItButton onClick={handleOpenModal} />
            <div className="flex flex-wrap gap-4 mt-4">
                {postIts.map((postIt) => (
                    <PostIt key={postIt.id} content={postIt.content} color={postIt.color} />
                ))}
            </div>
            <AddPostItModal isOpen={isModalOpen} onClose={handleCloseModal} onAddPostIt={handleAddPostIt} />
        </div>
    );
};

export default BoardView;
