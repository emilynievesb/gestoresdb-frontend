import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const AuthErrorModal = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Error de Autenticación</DialogTitle>
                </DialogHeader>
                <p className="text-gray-600">Ocurrió un error al intentar autenticarse. Por favor, verifica tus credenciales e intenta nuevamente.</p>
                <DialogFooter>
                    <Button onClick={onClose} className="bg-red-500 text-white hover:bg-red-600">
                        Cerrar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AuthErrorModal;
