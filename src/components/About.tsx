import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Votre partenaire de <span className="text-primary font-medium">confiance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Depuis plus de 20 ans, nous simplifions les démarches préfectorales pour tous, 
            quel que soit le lieu de résidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Créée en 2002, notre entreprise a pour mission de simplifier vos démarches 
              préfectorales en vous offrant un accompagnement personnalisé et professionnel. 
              Nous connaissons parfaitement les rouages administratifs et vous évitons les erreurs coûteuses.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primaryLight rounded-lg p-3">
                  <Shield size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Expertise reconnue</h4>
                  <p className="text-gray-600">Plus de 20 ans d'expérience dans les démarches préfectorales</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primaryLight rounded-lg p-3">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Gain de temps</h4>
                  <p className="text-gray-600">Évitez les files d'attente et les allers-retours inutiles</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primaryLight rounded-lg p-3">
                  <Users size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Accompagnement humain</h4>
                  <p className="text-gray-600">Une équipe à l'écoute, disponible et professionnelle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 mb-6 text-center">
              Pourquoi nous choisir ?
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primaryBorder pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Gain de temps</h4>
                <p className="text-gray-600">Évitez les files d'attente et les allers-retours inutiles</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Sécurité juridique</h4>
                <p className="text-gray-600">Réduisez les risques d'erreurs et de refus de dossier</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Suivi personnalisé</h4>
                <p className="text-gray-600">Restez informé de l'avancement de votre dossier</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">Tarifs transparents</h4>
                <p className="text-gray-600">Pas de frais cachés, devis clair et détaillé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
