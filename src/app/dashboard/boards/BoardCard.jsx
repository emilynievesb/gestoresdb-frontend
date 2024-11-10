import React from 'react';
import { Button } from '@/components/ui/button';
import ToggleSwitch from './ToggleSwitch';
import { format } from 'date-fns';
import { Edit2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BoardCard = ({ id, title, createdAt, updatedAt, description, isActive, onToggle, onEdit }) => {
    const router = useRouter();

    const handleViewBoard = () => {
        router.push(`/dashboard/boards/${id}`); // Redirige a la página del tablero según su id
    };

    return (
        <div className={`relative border rounded-lg p-4 flex flex-col ${isActive ? 'border-gray-200 bg-white' : 'border-gray-300 bg-gray-100 text-gray-400'}`}>
            <button onClick={onEdit} className="absolute top-2 right-2 text-gray-500 hover:text-black" aria-label="Editar tablero">
                <Edit2 className="w-5 h-5" />
            </button>

            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm mb-4">{description}</p>

            <div className="text-xs text-gray-500 mb-4">
                <p>Creado: {format(new Date(createdAt), 'dd MMM yyyy')}</p>
                <p>Última edición: {format(new Date(updatedAt), 'dd MMM yyyy')}</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <span>{isActive ? 'Activo' : 'Inactivo'}</span>
                <ToggleSwitch isActive={isActive} onToggle={onToggle} />
            </div>

            <Button
                onClick={handleViewBoard}
                className={`mt-4 ${isActive ? 'bg-black text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
                disabled={!isActive}
            >
                Ver Tablero
            </Button>
        </div>
    );
};

export default BoardCard;
