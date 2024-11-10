import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push('/dashboard'); // Redirige a /dashboard
    };

    return (
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
    );
};

export default RegisterForm;
