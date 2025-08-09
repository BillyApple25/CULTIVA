
'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Rejoindre() {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    organisation: '',
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const logosPartenaires = [
    {
      nom: "SOCAPRA",
      logo: "/assets/logos/Socapra_logo.jpg",
      type: "Agriculture & Élevage"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) {
      alert('Le message ne peut pas dépasser 500 caractères');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          nom: formData.nom,
          email: formData.email,
          organisation: formData.organisation,
          type: formData.type,
          message: formData.message
        }).toString()
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          nom: '',
          email: '',
          organisation: '',
          type: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#14230B] to-[#40200C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('join.title')}</h1>
            <p className="text-xl text-[#D3FA53] max-w-3xl mx-auto leading-relaxed">
              {t('join.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">{t('join.partners.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('join.partners.subtitle')}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 max-w-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src="/images/Socapra_logo.jpg" 
                    alt="SOCAPRA" 
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    onError={(e) => {
                      console.error('Erreur de chargement du logo SOCAPRA:', e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = '<i class="ri-building-line text-3xl text-gray-400"></i>';
                    }}
                    onLoad={() => {
                      console.log('Logo SOCAPRA chargé avec succès');
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#14230B] mb-3">SOCAPRA</h3>
                <span className="inline-block bg-[#D3FA53] text-[#14230B] px-4 py-2 rounded-full text-sm font-semibold">
                  Agriculture & Élevage
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">{t('join.contact.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('join.contact.subtitle')}
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-green-600 mb-2">Message envoyé avec succès!</h3>
                <p className="text-gray-600">Nous vous contacterons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-[#14230B] mb-2">
                      {t('common.name')} *
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3FA53] focus:border-transparent text-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#14230B] mb-2">
                      {t('common.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3FA53] focus:border-transparent text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organisation" className="block text-sm font-semibold text-[#14230B] mb-2">
                      {t('common.company')} *
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3FA53] focus:border-transparent text-sm"
                      placeholder="Nom de votre organisation"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-semibold text-[#14230B] mb-2">
                      Type de partenariat *
                    </label>
                    <div className="relative">
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3FA53] focus:border-transparent text-sm appearance-none pr-8"
                      >
                        <option value="">Sélectionnez un type</option>
                        <option value="gouvernement">Gouvernement</option>
                        <option value="banque">Institution Bancaire</option>
                        <option value="investisseur">Investisseur</option>
                        <option value="ong">ONG/Organisation</option>
                        <option value="autre">Autre</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#14230B] mb-2">
                    {t('common.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D3FA53] focus:border-transparent text-sm resize-none"
                    placeholder="Décrivez votre intérêt pour le partenariat et vos attentes..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 caractères
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#D3FA53] text-[#14230B] px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                  >
                    {isSubmitting ? 'Envoi en cours...' : t('common.submit')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#14230B] mb-2">{t('common.email')}</h3>
              <p className="text-gray-600">contact@scoopscultiva.cm</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#14230B] mb-2">Localisation</h3>
              <p className="text-gray-600">Région du Sud, Cameroun</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#14230B] mb-2">{t('common.phone')}</h3>
              <p className="text-gray-600">+237 XXX XXX XXX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-[#14230B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-6">Suivez-nous</h3>
            <div className="flex justify-center space-x-6">
              <a href="#" className="w-12 h-12 bg-[#D3FA53] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-xl text-[#14230B]"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-[#D3FA53] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-xl text-[#14230B]"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-[#D3FA53] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-xl text-[#14230B]"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-[#D3FA53] rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-xl text-[#14230B]"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
