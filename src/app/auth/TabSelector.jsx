// app/auth/TabSelector.jsx
import React from 'react';
import { Button } from '@/components/ui/button';

const TabSelector = ({ isLogin, setIsLogin }) => {
    return (
        <div className="flex gap-4 mb-4">
            <Button variant={isLogin ? 'default' : 'ghost'} className="flex-1" onClick={() => setIsLogin(true)}>
                Ingreso
            </Button>
            <Button variant={!isLogin ? 'default' : 'ghost'} className="flex-1" onClick={() => setIsLogin(false)}>
                Registro
            </Button>
        </div>
    );
};

export default TabSelector;
