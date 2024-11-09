import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AddPostItButton = ({ onClick }) => {
    return (
        <Button onClick={onClick} className="bg-black text-white flex items-center gap-2 px-4 py-2">
            <Plus className="w-4 h-4" />
            Añadir Post-it
        </Button>
    );
};

export default AddPostItButton;
