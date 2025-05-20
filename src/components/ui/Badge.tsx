import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'new' | 'sale' | 'sold-out';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'new',
  className = '',
}) => {
  const variantStyles = {
    'new': 'bg-black text-white',
    'sale': 'bg-red-600 text-white',
    'sold-out': 'bg-gray-700 text-white'
  };
  
  return (
    <span className={`inline-block px-2 py-1 text-xs font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;