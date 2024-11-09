import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const NewBoardModal = ({ isOpen, onClose, onCreate }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreate = () => {
        if (title.trim() === '') return;
        onCreate({ title, description });
        onClose();
        setTitle('');
        setDescription('');
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Crear Nuevo Tablero</DialogTitle>
                    <DialogDescription>Ingrese el nombre y una descripción para el nuevo tablero.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <Input placeholder="Título del tablero" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <DialogFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button onClick={handleCreate} className="bg-black text-white">
                        Crear
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default NewBoardModal;
