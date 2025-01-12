import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  const shapeClass = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  }[shape];

  return (
    <button
      onClick={onClick}
      className={`${sizeClass} ${shapeClass} bg-blue-500 text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
