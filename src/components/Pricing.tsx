import React from 'react';

const Pricing = () => {
  const specificServices = [
    { service: "Naturalisation", price: "500€" },
    { service: "Première demande de titre de séjour", price: "300€" },
    { service: "Renouvellement de titre de séjour  / carte de résident", price: "150€" },
    { service: "Document de circulation enfant mineur", price: "50€" },
    { service: "CV", price: "10€" },
    { service: "Lettre de motivation", price: "15€" }
  ];

  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Tarifs <span className="text-indigo-600 font-medium">transparents</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Des prix justes et clairs, sans frais cachés.
          </p>
        </div>

        {/* Tarifs spécifiques */}
        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-medium text-gray-900 mb-8 text-center">
            Nos tarifs
          </h3>
          <div className="space-y-6">
            {specificServices.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-700 font-medium">{item.service}</span>
                <span className="font-medium text-indigo-600 text-lg">{item.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              - Limite du suivi du dossier : obtention du 1er récépissé <br />
              - Les délais de traitement dépendent de la Préfecture

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;