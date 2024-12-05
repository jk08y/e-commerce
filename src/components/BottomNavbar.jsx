import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, User, Layers } from 'lucide-react';

function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-dark-secondary border-t dark:border-gray-700 md:hidden z-50">
      <div className="flex justify-around py-3">
        <Link 
          to="/" 
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-brand-blue"
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          to="/products" 
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-brand-blue"
        >
          <Layers size={24} />
          <span className="text-xs mt-1">Products</span>
        </Link>
        <Link 
          to="/cart" 
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-brand-blue"
        >
          <ShoppingCart size={24} />
          <span className="text-xs mt-1">Cart</span>
        </Link>
        <Link 
          to="/profile" 
          className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-brand-blue"
        >
          <User size={24} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
}

export default BottomNavbar;