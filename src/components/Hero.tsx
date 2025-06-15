import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="accueil" className="bg-gradient-to-b from-primaryLight to-white py-20 lg:py-32 relative overflow-hidden">
        {/* Formes géométriques en arrière-plan */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-primaryLight rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-primaryLight rounded-lg rotate-45 opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Simplifiez vos
              <span className="block font-medium text-primary relative">
                démarches administratives
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Accompagnement professionnel pour toutes vos démarches préfectorales. 
              <br className="hidden sm:block" />
              Gagnez du temps et évitez les complications.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                <span>Nous contacter</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button 
                onClick={() => scrollToSection('services')}
                className="text-primary hover:bg-primaryHover px-8 py-4 font-medium transition duration-200 border-2 border-primary rounded-lg hover:bg-primaryLight"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
