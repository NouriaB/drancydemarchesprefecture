import React from 'react';
import { Users, Home, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users size={24} />,
      title: "État civil",
      description: "Actes de naissance, mariage, décès et demandes d'extraits officiels."
    },
    {
      icon: <Home size={24} />,
      title: "Titre de séjour",
      description: "Première demande, renouvellement et changement de statut administratif."
    },
    {
      icon: <Globe size={24} />,
      title: "Naturalisation",
      description: "Constitution complète du dossier de naturalisation française."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Nos <span className="text-primary font-medium">prestations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une gamme complète de services pour toutes vos démarches administratives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition duration-200"
            >
              <div className="bg-primaryLight rounded-lg w-12 h-12 flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Besoin d'un service spécifique ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Contactez-nous pour étudier votre demande particulière.
            </p>
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primaryBorder text-white px-6 py-3 rounded-lg transition duration-200 font-medium inline-block"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;