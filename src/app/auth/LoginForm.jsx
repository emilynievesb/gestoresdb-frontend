'use client';
import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import AuthErrorModal from './AuthErrorModal';

const LoginForm = () => {
    const router = useRouter();
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aquí puedes añadir la lógica de autenticación real
        const authenticationSuccessful = true; // Simulación de error --> true: No acciona modal de error, false: Acciona modal de error

        if (authenticationSuccessful) {
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
                    <Label>Correo electrónico</Label>
                    <Input type="email" placeholder="nombre@ejemplo.com" required />
                </div>

                <div>
                    <Label>Contraseña</Label>
                    <Input type="password" required />
                </div>

                <Button type="submit" className="w-full">
                    Ingresar
                </Button>
            </form>

            {/* Modal de Error */}
            <AuthErrorModal isOpen={isErrorModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default LoginForm;
