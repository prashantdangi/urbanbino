import React from 'react';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="p-1">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-6 text-lg">
            <li>
              <a href="/" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                New Arrivals
              </a>
            </li>
            <li>
              <a href="/products" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                Bestsellers
              </a>
            </li>
            <li>
              <a href="/products" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                Collections
              </a>
            </li>
            <li>
              <a href="/products" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                Sale
              </a>
            </li>
            <li className="border-t pt-4 mt-4">
              <a href="/account" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                My Account
              </a>
            </li>
            <li>
              <a href="/cart" className="block py-2 text-black hover:text-gray-600 transition-colors" onClick={onClose}>
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;