import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-white text-gray-800">
            <Sidebar />
            <main className="flex-1 p-8 bg-white">{children}</main>
        </div>
    );
};

export default DashboardLayout;
