'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

const images = [
  {
    src: '/assets/images/recolte.png',
    altKey: 'gallery.1.title',
    descKey: 'gallery.1.desc',
  },
  {
    src: '/assets/images/tri_de_ferve.png',
    altKey: 'gallery.2.title',
    descKey: 'gallery.2.desc',
  },
  {
    src: '/assets/images/sechage_au_soleil.png',
    altKey: 'gallery.3.title',
    descKey: 'gallery.3.desc',
  },
  {
    src: '/assets/images/vie_de_la_cooperative.png',
    altKey: 'gallery.4.title',
    descKey: 'gallery.4.desc',
  },
  {
    src: '/assets/images/controle_qualite.png',
    altKey: 'gallery.5.title',
    descKey: 'gallery.5.desc',
  },
  {
    src: '/assets/images/expedition.png',
    altKey: 'gallery.6.title',
    descKey: 'gallery.6.desc',
  },
];

export default function Galerie() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#14230B] mb-10 text-center">{t('nav.gallery')}</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {images.map((img, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden border border-[#14230B]/10">
                <img src={img.src} alt={t(img.altKey)} className="w-full md:w-1/2 h-64 object-cover" />
                <div className="p-6 flex-1">
                  <h2 className="text-xl font-bold text-[#14230B] mb-2">{t(img.altKey)}</h2>
                  <p className="text-gray-700 text-base leading-relaxed">{t(img.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 