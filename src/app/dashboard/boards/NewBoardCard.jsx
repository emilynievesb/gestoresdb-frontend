import React from 'react';
import { Plus } from 'lucide-react';

const NewBoardCard = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50"
        >
            <Plus className="w-10 h-10 mb-2" />
            <span className="text-lg font-semibold">Crear Nuevo Tablero</span>
        </div>
    );
};

export default NewBoardCard;
