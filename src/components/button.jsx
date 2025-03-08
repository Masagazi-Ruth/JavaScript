import React from 'react';

const Button = ({ onClick, children, color = 'blue' }) => {
  const colorVariants = {
    blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500',
    gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-500',
    green: 'bg-green-500 hover:bg-green-600 focus:ring-green-500',
    red: 'bg-red-500 hover:bg-red-600 focus:ring-red-500',
  };

  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 text-white ${colorVariants[color]} rounded focus:outline-none focus:ring-2 focus:ring-opacity-50`}
    >
      {children}
    </button>
  );
};

export default Button;