import React from 'react';

const PostIt = ({ content, color }) => {
    return (
        <div
            className={`${color} rounded-lg p-4 shadow-md w-48 text-gray-700`}
            style={{
                transform: 'rotate(2deg)',
            }}
        >
            {content}
        </div>
    );
};

export default PostIt;
