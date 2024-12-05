import { ArrowRight, ShoppingCart } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-dark-primary text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Hero Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Elevate Your <span className="text-brand-blue">Developer Style</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Unique merchandise designed for passionate developers and tech enthusiasts.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to="/products" 
              className="flex items-center bg-brand-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Shop Now <ShoppingCart className="ml-2" size={20} />
            </Link>
            <Link 
              to="/auth" 
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-brand-blue transition"
            >
              Create Account <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>

        {/* Hero Image/Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <img 
              src="/placeholder-dev-merch.png" 
              alt="Developer Merchandise" 
              className="max-w-full h-auto rounded-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;