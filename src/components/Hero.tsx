import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
            Simplifiez vos
            <span className="block font-medium text-indigo-600">démarches administratives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Accompagnement professionnel pour toutes vos démarches préfectorales. 
            Gagnez du temps et évitez les complications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg transition duration-200 flex items-center space-x-2 font-medium"
            >
              <span>Nous contacter</span>
              <ArrowRight size={18} />
            </a>
            <a 
              href="#services" 
              className="text-indigo-600 hover:text-indigo-700 px-8 py-4 font-medium transition duration-200"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;