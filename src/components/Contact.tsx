import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle
} from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('service_muodk0s', 'template_86767eg', form.current!, 'BS0jmyAD4Hlchl3Gd')
      .then(() => {
        console.log("✅ Email envoyé !");
        setIsSending(false);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("❌ Erreur EmailJS :", error);
        setIsSending(false);
      });
  };

  return (
    // <section id="contact" className="py-20 bg-white">
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            <span className="text-primary font-medium">Contactez</span>-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une question ? Besoin d'un devis ? Notre équipe est à votre disposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-primaryLight rounded-lg p-3">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Adresse</h4>
                <p className="text-gray-600 leading-relaxed">
                  12 Place de l'Hôtel de Ville<br />
                  93700 Drancy<br />
                  France
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primaryLight rounded-lg p-3">
                <MessageCircle size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">WhatsApp</h4>
                <p className="text-gray-600">06 51 50 89 10</p>
                <p className="text-sm text-gray-500">Disponible 7j/7</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primaryLight rounded-lg p-3">
                <Mail size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">DrancyDemarchesPrefecture@gmail.com</p>
                <p className="text-sm text-gray-500">Réponse sous 48h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-primaryLight rounded-lg p-3">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Horaires</h4>
                <div className="text-gray-600 space-y-1">
                  <p>Bureau ouvert :</p>
                  <p>Mardi, Mercredi, Jeudi : 14h - 19h</p>
                  <p className="text-sm text-gray-500">Joignable sur WhatsApp le reste du temps</p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-50 rounded-2xl p-8"> */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
          
            <h3 className="text-xl font-medium text-gray-900 mb-8">Demande de renseignement</h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Message envoyé !</h4>
                <p className="text-gray-600">Nous vous répondrons rapidement.</p>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary"
                      placeholder="06 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service souhaité
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Choisir un service</option>
                      <option value="Première demande">Première demande</option>
                      <option value="Renouvellement titre de séjour">Renouvellement titre de séjour</option>
                      <option value="Naturalisation">Naturalisation</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Décrivez votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-primary hover:bg-primaryHover text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">* Champs obligatoires</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
