import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-2'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Urban Bino Logo" 
                className="h-10 w-10 md:h-14 md:w-14"
              />
              <span className="text-xl md:text-2xl font-bold text-black -mt-1">Urban Bino</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="/" className="text-black hover:text-gray-600 transition-colors">Home</a></li>
              <li><a href="/mens" className="text-black hover:text-gray-600 transition-colors">Mens</a></li>
              <li><a href="/womens" className="text-black hover:text-gray-600 transition-colors">Womens</a></li>
              <li><a href="/new-arrivals" className="text-black hover:text-gray-600 transition-colors">New Arrivals</a></li>
              <li><a href="/bestsellers" className="text-black hover:text-gray-600 transition-colors">Bestsellers</a></li>
            </ul>
          </nav>
          
          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="p-1 text-black hover:text-gray-600">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="p-1 text-black hover:text-gray-600">
              <User size={20} />
            </button>
            <a href="/cart" className="p-1 text-black hover:text-gray-600 relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </a>
            <button 
              className="md:hidden p-1 text-black"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;