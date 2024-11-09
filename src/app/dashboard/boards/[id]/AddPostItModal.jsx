import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const colors = ['bg-yellow-200', 'bg-green-200', 'bg-blue-200', 'bg-pink-200', 'bg-purple-200'];

const AddPostItModal = ({ isOpen, onClose, onAddPostIt }) => {
    const [content, setContent] = useState('');
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleAdd = () => {
        if (!content.trim()) return;
        onAddPostIt(content, selectedColor);
        setContent('');
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Agregar un nuevo Post-it</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input placeholder="Escribe aquí..." value={content} onChange={(e) => setContent(e.target.value)} />
                    <div className="flex gap-2">
                        {colors.map((color) => (
                            <div
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`${color} w-8 h-8 rounded-full cursor-pointer ${selectedColor === color ? 'ring-2 ring-black' : ''}`}
                            />
                        ))}
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button onClick={handleAdd} className="bg-black text-white">
                        Añadir
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddPostItModal;
