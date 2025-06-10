import React from 'react';
import { AtSign, MapPin, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo et description */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-indigo-600 rounded-lg p-2">
                <AtSign size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Drancy Démarches</h3>
                <p className="text-sm text-gray-400">Préfecture</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour toutes vos démarches administratives. 
              Plus de 20 ans d'expérience au service des habitants de Drancy.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium mb-6">Nos services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Première demande</li>
              <li>Renouvellement titre de séjour</li>
              <li>Naturalisation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-sm">12 Place de l'Hôtel de Ville, 93700 Drancy</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={16} />
                <span className="text-sm">06 51 50 89 10 (WhatsApp)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-sm">drancyinternet@gmail.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-400">Bureau ouvert :</p>
              <p className="text-sm text-gray-400">Mar, Mer, Jeu : 14h - 19h</p>
              <p className="text-sm text-gray-400">WhatsApp disponible 7j/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Drancy Démarches Préfecture. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;