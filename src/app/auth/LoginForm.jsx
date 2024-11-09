import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LoginForm = () => {
    return (
        <form className="space-y-4">
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
    );
};

export default LoginForm;
