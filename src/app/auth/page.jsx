'use client';
import React, { useState } from 'react';
import TabSelector from './TabSelector';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold">Acceso a la cuenta</h2>
                <p className="text-gray-500 mb-4">Ingresa o regístrate para continuar.</p>
                <TabSelector isLogin={isLogin} setIsLogin={setIsLogin} />
                {isLogin ? <LoginForm /> : <RegisterForm />}
            </div>
        </div>
    );
};

export default AuthForm;
