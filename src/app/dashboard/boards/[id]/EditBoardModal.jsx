import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const EditBoardModal = ({ isOpen, onClose, onSave, board }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (board) {
            setTitle(board.title || '');
            setDescription(board.description || '');
        }
    }, [board]);

    const handleSave = () => {
        onSave({ title, description });
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Tablero</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input placeholder="Título del tablero" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <Input placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <DialogFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button onClick={handleSave} className="bg-black text-white">
                        Guardar Cambios
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditBoardModal;
