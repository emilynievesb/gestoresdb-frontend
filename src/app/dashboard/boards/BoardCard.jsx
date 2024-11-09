import React from 'react';
import { Button } from '@/components/ui/button';
import ToggleSwitch from './ToggleSwitch';
import { format } from 'date-fns';

const BoardCard = ({ title, createdAt, updatedAt, description, isActive, onToggle, onEdit }) => {
    return (
        <div className={`border rounded-lg p-4 flex flex-col ${isActive ? 'border-gray-200 bg-white' : 'border-gray-300 bg-gray-100 text-gray-400'}`}>
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

            <Button onClick={onEdit} className="bg-blue-500 text-white mb-2">
                Editar
            </Button>

            <Button className={`mt-4 ${isActive ? 'bg-black text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`} disabled={!isActive}>
                Ver Tablero
            </Button>
        </div>
    );
};

export default BoardCard;
