'use client';
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import AuthErrorModal from './AuthErrorModal';

const RegisterForm = () => {
    const router = useRouter();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simula el proceso de registro (lógica de autenticación real debería estar aquí)
        const registrationSuccessful = true; // Simulación de error --> true: No acciona modal de error, false: Acciona modal de error

        if (registrationSuccessful) {
            router.push('/dashboard');
        } else {
            setIsErrorModalOpen(true); // Muestra la modal de error
        }
    };

    const handleCloseModal = () => {
        setIsErrorModalOpen(false); // Cierra la modal de error
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label>Nombre</Label>
                    <Input type="text" placeholder="Tu nombre" required />
                </div>

                <div>
                    <Label>Correo electrónico</Label>
                    <Input type="email" placeholder="nombre@ejemplo.com" required />
                </div>

                <div>
                    <Label>Contraseña</Label>
                    <Input type="password" required />
                </div>

                <Button type="submit" className="w-full">
                    Registrarse
                </Button>
            </form>

            {/* Modal de Error */}
            <AuthErrorModal isOpen={isErrorModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default RegisterForm;
