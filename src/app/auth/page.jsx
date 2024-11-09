'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TabSelector from './TabSelector';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Acceso a la cuenta</CardTitle>
                    <p className="text-gray-500">Ingresa o regístrate para continuar.</p>
                </CardHeader>
                <CardContent>
                    <TabSelector isLogin={isLogin} setIsLogin={setIsLogin} />
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthForm;
