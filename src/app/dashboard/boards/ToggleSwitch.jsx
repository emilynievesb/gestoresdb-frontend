// app/dashboard/boards/ToggleSwitch.jsx
import React from 'react';

const ToggleSwitch = ({ isActive, onToggle }) => {
    return (
        <div className="flex items-center justify-between">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isActive} onChange={onToggle} className="sr-only" />
                <div className={`w-10 h-6 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300'}`} />
                <div className={`absolute w-4 h-4 bg-white rounded-full transform transition-transform ${isActive ? 'translate-x-5' : 'translate-x-1'}`} />
            </label>
        </div>
    );
};

export default ToggleSwitch;
