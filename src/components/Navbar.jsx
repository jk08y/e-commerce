import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Menu, 
  User, 
  Sun, 
  Moon 
} from 'lucide-react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage or system preference
    return localStorage.getItem('theme') === 'dark' || 
           (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Add this state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Apply dark mode class to html element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-primary/90 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          JK <span className="text-brand-blue">Store</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/products" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition">
            Products
          </Link>
          <Link to="/cart" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition">
            Cart
          </Link>
          <Link to="/profile" className="text-gray-600 dark:text-gray-300 hover:text-brand-blue transition">
            Profile
          </Link>
          <button 
            onClick={toggleDarkMode} 
            className="text-gray-600 dark:text-gray-300 hover:text-brand-blue"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 dark:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-secondary shadow-lg">
          <Link 
            to="/products" 
            className="block px-4 py-3 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Products
          </Link>
          <Link 
            to="/cart" 
            className="block px-4 py-3 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Cart
          </Link>
          <Link 
            to="/profile" 
            className="block px-4 py-3 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Profile
          </Link>
          <button 
            onClick={toggleDarkMode}
            className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center"
          >
            {isDarkMode ? <Sun className="mr-2" size={20} /> : <Moon className="mr-2" size={20} />}
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;