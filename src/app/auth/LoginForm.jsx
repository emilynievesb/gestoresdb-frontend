import React from 'react';

const LoginForm = () => {
    return (
        <form className="flex flex-col">
            <label className="text-left text-gray-700">Correo electrónico</label>
            <input type="email" placeholder="nombre@ejemplo.com" required className="mt-1 p-2 border border-gray-300 rounded-lg" />

            <label className="text-left text-gray-700 mt-4">Contraseña</label>
            <input type="password" required className="mt-1 p-2 border border-gray-300 rounded-lg" />

            <button type="submit" className="mt-6 py-2 bg-black text-white rounded-lg font-semibold">
                Ingresar
            </button>
        </form>
    );
};

export default LoginForm;
