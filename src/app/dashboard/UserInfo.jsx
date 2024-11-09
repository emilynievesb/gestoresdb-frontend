import React from 'react';
import { User } from 'lucide-react';

const UserInfo = () => {
    return (
        <div className="flex items-center gap-3 p-4 border-t border-gray-700 mt-4">
            <User className="w-10 h-10 rounded-full bg-gray-700 p-2 text-gray-300" />
            <div>
                {/* Debes poner estos valores dependiendo de el usuario que inicie sesión */}
                <p className="font-medium">Usuario</p>
                <p className="text-gray-400 text-sm">usuario@ejemplo.com</p>
            </div>
        </div>
    );
};

export default UserInfo;
