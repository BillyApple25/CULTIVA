
'use client';

import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Histoire() {
  const { t } = useLanguage();

  const valeurs = [
    {
      titre: t('values.responsibility'),
      description: t('values.responsibility.desc'),
      icone: "ri-shield-check-line"
    },
    {
      titre: t('values.excellence'),
      description: t('values.excellence.desc'),
      icone: "ri-star-line"
    },
    {
      titre: t('values.commitment'),
      description: t('values.commitment.desc'),
      icone: "ri-handshake-line"
    },
    {
      titre: t('values.innovation'),
      description: t('values.innovation.desc'),
      icone: "ri-lightbulb-line"
    },
    {
      titre: t('values.authenticity'),
      description: t('values.authenticity.desc'),
      icone: "ri-leaf-line"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#14230B] to-[#40200C]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('history.title')}</h1>
            <p className="text-xl text-[#D3FA53] max-w-3xl mx-auto">
              {t('history.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[#14230B] mb-6">Tout a commencé avec une idée...</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('history.story')}
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('history.story2')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('history.story3')}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://readdy.ai/api/search-image?query=African%20cocoa%20farmers%20working%20together%20in%20Cameroon%20plantation%2C%20authentic%20documentary%20style%20photography%2C%20warm%20natural%20lighting%2C%20people%20collaborating%20on%20cocoa%20harvest%2C%20traditional%20farming%20tools%20visible%2C%20genuine%20smiles%20and%20teamwork%2C%20realistic%20African%20agricultural%20scene%20with%20cocoa%20trees%20in%20background&width=400&height=300&seq=farmers-1&orientation=landscape"
                alt="Agriculteurs de cacao"
                className="rounded-lg object-cover w-full h-48"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=Close-up%20of%20hands%20holding%20fresh%20cocoa%20pods%20in%20Cameroon%2C%20authentic%20documentary%20photography%2C%20warm%20natural%20lighting%2C%20detailed%20view%20of%20cocoa%20beans%2C%20African%20farmer%20hands%2C%20realistic%20agricultural%20scene%20with%20traditional%20farming%20background%2C%20genuine%20and%20inspiring%20atmosphere&width=400&height=300&seq=hands-cocoa&orientation=landscape"
                alt="Fèves de cacao"
                className="rounded-lg object-cover w-full h-48"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=Traditional%20cocoa%20farming%20tools%20and%20equipment%20in%20Cameroon%2C%20authentic%20documentary%20style%2C%20warm%20natural%20lighting%2C%20wooden%20tools%20and%20baskets%2C%20African%20agricultural%20heritage%2C%20realistic%20farming%20implements%20used%20in%20cocoa%20production%2C%20natural%20outdoor%20setting&width=400&height=300&seq=tools&orientation=landscape"
                alt="Outils traditionnels"
                className="rounded-lg object-cover w-full h-48"
              />
              <img 
                src="https://readdy.ai/api/search-image?query=Cocoa%20plantation%20landscape%20in%20Cameroon%20with%20mature%20cocoa%20trees%2C%20authentic%20documentary%20photography%2C%20warm%20natural%20lighting%2C%20lush%20green%20agricultural%20scene%2C%20traditional%20African%20farming%20landscape%2C%20peaceful%20and%20inspiring%20atmosphere%2C%20realistic%20cocoa%20farm%20setting&width=400&height=300&seq=plantation&orientation=landscape"
                alt="Plantation de cacao"
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">{t('values.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cinq piliers fondamentaux guident notre action quotidienne et notre vision d'avenir
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {valeurs.map((valeur, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#14230B] transition-colors">
                  <i className={`${valeur.icone} text-2xl text-[#14230B] group-hover:text-[#D3FA53] transition-colors`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#14230B] mb-3">{valeur.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">{t('testimonials.title')}</h2>
            <p className="text-lg text-gray-600">{t('testimonials.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#D3FA53]">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#D3FA53] text-sm"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "SCOOPS CULTIVA représente l'avenir de l'agriculture camerounaise. Leur approche durable et leur qualité exceptionnelle nous impressionnent."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#14230B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#D3FA53] font-bold">MA</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#14230B]">Marie Atangana</h4>
                  <p className="text-sm text-gray-600">Directrice Développement Durable</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#D3FA53]">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#D3FA53] text-sm"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "La tracabilité et la qualité de leur cacao sont remarquables. Un partenaire fiable pour nos projets de transformation."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#14230B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#D3FA53] font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#14230B]">Jean Mbarga</h4>
                  <p className="text-sm text-gray-600">Transformateur Cacao</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#D3FA53]">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#D3FA53] text-sm"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Une coopérative innovante qui révolutionne la filière cacao au Cameroun. Nous sommes fiers de les accompagner."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#14230B] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#D3FA53] font-bold">PN</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#14230B]">Paul Nkomo</h4>
                  <p className="text-sm text-gray-600">Investisseur Agricole</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
