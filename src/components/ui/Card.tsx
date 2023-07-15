import React from 'react';

const Card = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="bg-gray-50 rounded-lg p-5 gap-4 flex flex-col">
            {children}
        </div>
    );
};

export default Card;
