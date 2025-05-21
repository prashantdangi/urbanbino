import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiSearch, FiShoppingBag, FiUser } from 'react-icons/fi';

const BottomNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-black' : 'text-gray-500'}`}>
          <FiHome className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link to="/search" className={`flex flex-col items-center ${isActive('/search') ? 'text-black' : 'text-gray-500'}`}>
          <FiSearch className="w-6 h-6" />
          <span className="text-xs mt-1">Search</span>
        </Link>

        <Link to="/new-arrivals" className="flex flex-col items-center">
          <div className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">N</div>
          <span className="text-xs mt-1 text-black">NEW</span>
        </Link>

        <Link to="/cart" className={`flex flex-col items-center ${isActive('/cart') ? 'text-black' : 'text-gray-500'}`}>
          <FiShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1">Cart</span>
        </Link>

        <Link to="/profile" className={`flex flex-col items-center ${isActive('/profile') ? 'text-black' : 'text-gray-500'}`}>
          <FiUser className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav; 