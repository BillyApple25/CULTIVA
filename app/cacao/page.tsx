
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Cacao() {
  const { t } = useLanguage();

  const certifications = [
    {
      nom: "Biologique",
      description: "Certification en cours",
      icone: "ri-leaf-line",
      statut: "Prévu 2026"
    },
    
    {
      nom: "Commerce Équitable",
      description: "Prix justes aux producteurs",
      icone: "ri-handshake-line",
      statut: "En cours"
    }
  ];

  const etapesProduction = [
    {
      titre: "Plantation",
      description: "Sélection des meilleures variétés de cacaoyers adaptées au climat camerounais",
      icone: "ri-seedling-line"
    },
    {
      titre: "Récolte",
      description: "Cueillette manuelle des cabosses à maturité optimale",
      icone: "ri-scissors-line"
    },
    {
      titre: "Fermentation",
      description: "Processus contrôlé de 5-7 jours pour développer les arômes",
      icone: "ri-time-line"
    },
    {
      titre: "Séchage",
      description: "Séchage solaire naturel pour préserver la qualité",
      icone: "ri-sun-line"
    },
    {
      titre: "Transformation",
      description: "Transformation locale pour valoriser notre production",
      icone: "ri-settings-line"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#40200C] to-[#14230B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('cocoa.title')}</h1>
              <p className="text-xl text-[#D3FA53] mb-8 leading-relaxed">
                {t('cocoa.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#D3FA53]/20 text-[#D3FA53] px-4 py-2 rounded-full">
                  <span className="font-semibold">100% Camerounais</span>
                </div>
                <div className="bg-[#D3FA53]/20 text-[#D3FA53] px-4 py-2 rounded-full">
                  <span className="font-semibold">Transformation Locale</span>
                </div>
                <div className="bg-[#D3FA53]/20 text-[#D3FA53] px-4 py-2 rounded-full">
                  <span className="font-semibold">{t('cocoa.traceability')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="assets/images/cacao_sec.png"
                alt="Cacao de qualité supérieure"
                className="rounded-lg object-cover w-full h-80 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">{t('cocoa.process.title')}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('cocoa.process.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {etapesProduction.map((etape, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <i className={`${etape.icone} text-3xl text-[#14230B]`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#14230B] mb-3">{etape.titre}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{etape.description}</p>
                {index < etapesProduction.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-[#D3FA53]/30 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Sustainable%20cocoa%20farming%20practices%20in%20Cameroon%2C%20African%20farmers%20using%20eco-friendly%20agricultural%20methods%2C%20green%20sustainable%20farming%20techniques%2C%20organic%20cocoa%20cultivation%2C%20environmental%20conservation%20in%20agriculture%2C%20natural%20farming%20methods%2C%20authentic%20documentary%20style%20photography%2C%20inspiring%20agricultural%20sustainability&width=600&height=400&seq=sustainable-farming&orientation=landscape"
                alt="Agriculture durable"
                className="rounded-lg object-cover w-full h-96 shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#14230B] mb-6">{t('cocoa.sustainability.title')}</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre engagement envers l'environnement se traduit par des pratiques agricoles respectueuses qui préservent la biodiversité et enrichissent nos sols.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D3FA53] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-leaf-line text-[#14230B]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#14230B] mb-1">Agroforesterie</h4>
                    <p className="text-gray-600">Culture du cacao sous couvert forestier pour préserver l'écosystème</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D3FA53] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-recycle-line text-[#14230B]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#14230B] mb-1">Zéro Déchet</h4>
                    <p className="text-gray-600">Valorisation des sous-produits et compostage des déchets organiques</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D3FA53] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-drop-line text-[#14230B]"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#14230B] mb-1">Gestion de l'Eau</h4>
                    <p className="text-gray-600">Systèmes d'irrigation efficaces et protection des sources d'eau</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#14230B] mb-6">
              {t('cocoa.certifications.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous travaillons activement à l'obtention des certifications les plus exigeantes pour garantir la qualité et l'éthique de notre production
            </p>
          </div>

          <div
            className="grid gap-8 justify-items-center
                      [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8 text-center
                          border-2 border-gray-100 hover:border-[#D3FA53] transition-colors"
              >
                <div className="w-16 h-16 bg-[#D3FA53]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${cert.icone} text-3xl text-[#14230B]`} />
                </div>
                <h3 className="text-xl font-bold text-[#14230B] mb-3">{cert.nom}</h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <span className="inline-block bg-[#D3FA53] text-[#14230B] px-4 py-2 rounded-full text-sm font-semibold">
                  {cert.statut}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Traceability */}
      <section className="py-20 bg-[#14230B]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{t('cocoa.traceability')}</h2>
            <p className="text-lg text-[#D3FA53] max-w-3xl mx-auto">
              De la plantation à votre table, suivez le parcours de chaque grain de cacao CULTIVA
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Origine</h3>
              <p className="text-gray-300 text-sm">Plantation identifiée, producteur référencé</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Récolte</h3>
              <p className="text-gray-300 text-sm">Date de récolte et conditions enregistrées</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-settings-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transformation</h3>
              <p className="text-gray-300 text-sm">Processus de transformation documenté</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D3FA53] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-truck-line text-2xl text-[#14230B]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Livraison</h3>
              <p className="text-gray-300 text-sm">Suivi jusqu'à la destination finale</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
