import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';
import UserInfo from './UserInfo';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col justify-between p-4">
            <div>
                <h2 className="text-xl font-semibold mb-6">Mi Dashboard</h2>
                <nav className="space-y-4">
                    <Button variant="ghost" className="w-full flex items-center gap-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100">
                        <Home className="w-5 h-5" />
                        <span>Mis tableros</span>
                    </Button>
                    <Button variant="ghost" className="w-full flex items-center gap-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100">
                        <Search className="w-5 h-5" />
                        <span>Buscar tablero</span>
                    </Button>
                </nav>
            </div>
            <UserInfo />
        </aside>
    );
};

export default Sidebar;
