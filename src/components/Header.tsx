import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MODIFICATION 1: Réduire py-2 à py-1 */}
        <div className="flex justify-between items-center py-2">

          <div className="flex items-center space-x-3">

            {/* MODIFICATION 2: Réduire la taille du logo */}
            <div className="flex items-center justify-center w-12 sm:w-14 md:w-16">
              <img
                src="/src/assets/logo.png"
                alt="Logo Drancy Démarches"
                className="h-full w-full object-contain drop-shadow-sm rounded-md"
              />
            </div>

            {/* MODIFICATION 3: Réduire les tailles de police et line-height */}
            <div className="flex flex-col justify-center">
              <h1 className="text-sm sm:text-base leading-tight">
                <div className="text-white flex flex-col items-center">
                  <div className="flex space-x-1.5">
                    <span className="font-bold text-base sm:text-lg">DRANCY</span>
                    <span className="font-bold text-base sm:text-lg">DÉMARCHES</span>
                  </div>
                  <span className="font-bold text-base sm:text-lg">PRÉFECTURE</span>
                </div>
              </h1>
            </div>

          </div>

          {/* MODIFICATION 4: Réduire le padding des liens de navigation */}
          {/* Navigation avec effet de soulignement */}
          <nav className="hidden md:flex space-x-6">
            <a href="#accueil" className="text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-200 transition-all duration-200 font-medium py-1 border-b-2 border-transparent">
              Accueil
            </a>
            
            <a href="#services" className="text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-200 transition-all duration-200 font-medium py-1 border-b-2 border-transparent">
              Services
            </a>
            
            <a href="#tarifs" className="text-white hover:text-blue-200 hover:border-b-2 hover:border-blue-200 transition-all duration-200 font-medium py-1 border-b-2 border-transparent">
              Tarifs
            </a>
            
            <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition duration-200 font-medium rounded-md shadow-md px-3 py-1.5">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 transition duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-500">
            <div className="py-2 space-y-1">
              <a href="#accueil" className="block py-1.5 text-white hover:text-gray-300 transition duration-200 font-medium">Accueil</a>
              <a href="#services" className="block py-1.5 text-white hover:text-gray-300 transition duration-200 font-medium">Services</a>
              <a href="#tarifs" className="block py-1.5 text-white hover:text-gray-300 transition duration-200 font-medium">Tarifs</a>
              <a href="#contact" className="block py-1.5 text-white hover:text-gray-300 transition duration-200 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;