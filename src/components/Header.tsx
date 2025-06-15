import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
         
          {/* Logo*/}
          <div className="flex items-stretch space-x-4">
            <div className="flex items-center justify-center w-16 sm:w-20 md:w-24">
              <img
                src="/src/assets/logo.png"
                alt="Logo Drancy Démarches"
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>

            {/* Nom*/}
            <div className="flex flex-col justify-center">
              <h1 className="text-base sm:text-lg font-bold text-gray-600">
                <div className="flex flex-col">
                  <span><span className="text-primary font-serif text-lg sm:text-xl">D</span>RANCY</span>
                  <span><span className="text-primary font-serif text-lg sm:text-xl">D</span>ÉMARCHES</span>
                  <span><span className="text-primary font-serif text-lg sm:text-xl">P</span>RÉFECTURE</span>
                </div>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-600 hover:text-primary transition duration-200 font-medium">Accueil</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition duration-200 font-medium">Services</a>
            <a href="#tarifs" className="text-gray-600 hover:text-primary transition duration-200 font-medium">Tarifs</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition duration-200 font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary transition duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-2">
              <a href="#accueil" className="block py-2 text-gray-600 hover:text-primary transition duration-200 font-medium">Accueil</a>
              <a href="#services" className="block py-2 text-gray-600 hover:text-primary transition duration-200 font-medium">Services</a>
              <a href="#tarifs" className="block py-2 text-gray-600 hover:text-primary transition duration-200 font-medium">Tarifs</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-primary transition duration-200 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;