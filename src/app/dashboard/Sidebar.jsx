'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import UserInfo from './UserInfo';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col justify-between p-4">
            <div>
                <h2 className="text-xl font-semibold mb-6">Mi Dashboard</h2>
                <nav className="space-y-4">
                    <Link
                        href="/dashboard/boards"
                        className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg 
              ${pathname === '/dashboard/boards' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
            `}
                    >
                        <Home className="w-5 h-5" />
                        <span>Mis tableros</span>
                    </Link>

                    <Link
                        href="/dashboard/search"
                        className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg 
              ${pathname === '/dashboard/search' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}
            `}
                    >
                        <Search className="w-5 h-5" />
                        <span>Buscar tablero</span>
                    </Link>
                </nav>
            </div>
            <UserInfo />
        </aside>
    );
};

export default Sidebar;
