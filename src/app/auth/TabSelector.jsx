import React from 'react';

const TabSelector = ({ isLogin, setIsLogin }) => {
    return (
        <div className="flex gap-4 mb-4">
            <button
                className={`flex-1 py-2 font-semibold ${isLogin ? 'bg-gray-100 text-black' : 'bg-gray-200 text-gray-500'} rounded-lg`}
                onClick={() => setIsLogin(true)}
            >
                Ingreso
            </button>
            <button
                className={`flex-1 py-2 font-semibold ${!isLogin ? 'bg-gray-100 text-black' : 'bg-gray-200 text-gray-500'} rounded-lg`}
                onClick={() => setIsLogin(false)}
            >
                Registro
            </button>
        </div>
    );
};

export default TabSelector;
