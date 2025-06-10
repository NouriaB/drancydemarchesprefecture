import React, { useState } from 'react';
import { Menu, X, AtSign } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 rounded-lg p-2">
              <AtSign size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Drancy Démarches Préfecture
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Accueil</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Services</a>
            <a href="#tarifs" className="text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Tarifs</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-indigo-600 transition duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-2">
              <a href="#accueil" className="block py-2 text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Accueil</a>
              <a href="#services" className="block py-2 text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Services</a>
              <a href="#tarifs" className="block py-2 text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Tarifs</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-indigo-600 transition duration-200 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;