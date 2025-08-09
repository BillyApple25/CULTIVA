
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isClient: boolean;
}

type TranslationMap = { [key: string]: string };

const translations: { fr: TranslationMap; en: TranslationMap } = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.history': 'Notre Histoire',
    'nav.cocoa': 'Notre Cacao',
    'nav.gallery': 'Galerie',
    'nav.products': 'Nos Produits',
    'nav.join': 'Rejoindre',
    'nav.contact': 'Nous Contacter',
    
    // Home Page
    'home.title': 'CULTIVA',
    'home.subtitle': 'Le cacao d\'exception, enraciné au Cameroun, engagé pour demain',
    'home.cta': 'Découvrir notre histoire',
    
    // Common
    'common.readMore': 'En savoir plus',
    'common.contact': 'Contact',
    'common.submit': 'Envoyer',
    'common.name': 'Nom',
    'common.email': 'Email',
    'common.message': 'Message',
    'common.phone': 'Téléphone',
    'common.company': 'Entreprise',
    
    // History Page
    'history.title': 'Notre Histoire',
    'history.subtitle': 'Une coopérative née d\'une vision commune',
    'history.story': 'Tout a commencé avec une idée, et 11 membres unis par une même vision : transformer la culture du cacao au Cameroun. Notre coopérative CULTIVA est née de la volonté de créer une filière cacao d\'excellence, respectueuse de l\'environnement et des producteurs.',
    'history.story2': 'Notre mission est simple mais ambitieuse : produire le meilleur cacao du Cameroun tout en respectant notre environnement et en valorisant le travail de nos producteurs. Chaque grain raconte une histoire de passion, de dévouement et d\'innovation.',
    'history.story3': 'Aujourd\'hui, nous sommes fiers de représenter l\'avenir de l\'agriculture camerounaise, alliant tradition et modernité pour offrir au monde un cacao d\'exception, tracé et transformé localement.',
    
    // Values
    'values.title': 'Nos Valeurs',
    'values.responsibility': 'Responsabilité',
    'values.responsibility.desc': 'Nous assumons notre rôle dans le développement durable de notre communauté',
    'values.excellence': 'Excellence',
    'values.excellence.desc': 'Nous visons la qualité supérieure dans chaque grain de cacao produit',
    'values.commitment': 'Engagement',
    'values.commitment.desc': 'Nous nous engageons envers nos producteurs et nos partenaires',
    'values.innovation': 'Innovation',
    'values.innovation.desc': 'Nous adoptons les meilleures pratiques agricoles modernes',
    'values.authenticity': 'Authenticité',
    'values.authenticity.desc': 'Nous préservons les traditions agricoles camerounaises',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos partenaires',
    'testimonials.subtitle': 'Témoignages de ceux qui nous font confiance',
    
    // Cocoa Page
    'cocoa.title': 'Notre Cacao d\'Exception',
    'cocoa.subtitle': 'Du sol camerounais à votre table, découvrez un cacao cultivé avec passion, transformé avec expertise et certifié pour l\'excellence.',
    'cocoa.quality': 'Qualité Premium',
    'cocoa.sustainable': 'Pratiques Durables',
    'cocoa.traceability': 'Traçabilité 100%',
    'cocoa.process.title': 'Notre Processus de Production',
    'cocoa.process.subtitle': 'De la plantation à la transformation, chaque étape est maîtrisée pour garantir la qualité exceptionnelle de notre cacao',
    'cocoa.sustainability.title': 'Pratiques Agricoles Durables',
    'cocoa.certifications.title': 'Nos Certifications',
    
    // Join Page
    'join.title': 'Rejoindre le Mouvement',
    'join.subtitle': 'Ensemble, révolutionnons la filière cacao camerounaise. Devenez partenaire d\'un projet qui transforme des vies et cultive l\'avenir.',
    'join.partners': 'Nos Partenaires Cibles',
    'join.partners.subtitle': 'Nous recherchons des partenaires visionnaires pour co-construire l\'avenir du cacao camerounais',
    'join.government': 'Gouvernement Camerounais',
    'join.banks': 'Institutions Bancaires',
    'join.investors': 'Investisseurs',
    'join.ngos': 'ONG et Organisations',
    'join.contact.title': 'Contactez-nous',
    'join.contact.subtitle': 'Prêt à nous rejoindre ? Partagez-nous votre vision et découvrons ensemble les opportunités de collaboration.',
    'join.partners.title': 'Nos Partenaires',
    'join.partners.subtitle': 'Des organisations partenaires qui nous soutiennent dans notre mission.',
    
    // Footer
    'footer.description': "Coopérative agricole dédiée à la production de cacao d'exception au Cameroun. Nous cultivons l'avenir avec passion, responsabilité et innovation.",
    'footer.quickLinks': 'Liens Rapides',
    'footer.link.home': 'Accueil',
    'footer.link.history': 'Notre Histoire',
    'footer.link.cocoa': 'Notre Cacao',
    'footer.link.join': 'Rejoindre',
    'footer.contact': 'Contact',
    'footer.address': 'Région du Sud, Cameroun',
    'footer.email': 'contact@scoopscultiva.cm',
    'footer.phone': '+237 XXX XXX XXX',
    'footer.copyright': '© 2025 SCOOPS CULTIVA. Tous droits réservés. | Fait avec passion pour l\'excellence du cacao camerounais.',
    
    // News (Actualités)
    'news.1.title': 'Lancement de la nouvelle récolte',
    'news.1.text': 'La campagne 2024 démarre avec des innovations pour nos producteurs.',
    'news.2.title': 'Certification bio obtenue',
    'news.2.text': 'Notre cacao est désormais certifié biologique par Ecocert.',
    'news.3.title': 'Visite ministérielle',
    'news.3.text': 'Le ministre de l’Agriculture a salué nos efforts pour la filière.',
    'news.4.title': 'Nouveau partenariat',
    'news.4.text': 'Un accord signé avec une grande chocolaterie européenne.',
    
    // Galerie
    'gallery.1.title': 'Récolte du cacao',
    'gallery.1.desc': "Des membres de la coopérative récoltent les cabosses de cacao à maturité, un travail minutieux qui garantit la qualité du produit final.",
    'gallery.2.title': 'Tri des fèves',
    'gallery.2.desc': "Après la récolte, les fèves sont triées à la main pour ne conserver que les meilleures, assurant ainsi un cacao d'exception.",
    'gallery.3.title': 'Séchage au soleil',
    'gallery.3.desc': "Les fèves de cacao sont séchées naturellement au soleil, une étape essentielle pour développer leurs arômes uniques.",
    'gallery.4.title': 'Vie de la coopérative',
    'gallery.4.desc': "La vie de la coopérative, c'est aussi des moments de partage et de solidarité entre les membres, au cœur du village.",
    'gallery.5.title': 'Contrôle qualité',
    'gallery.5.desc': "Chaque lot de cacao est contrôlé avec rigueur pour répondre aux exigences des marchés internationaux.",
    'gallery.6.title': 'Expédition',
    'gallery.6.desc': "Le cacao prêt à être expédié, fruit du travail collectif et de l'engagement durable de la coopérative.",
    
    // Products Page
    'products.title': 'Nos Produits Disponibles',
    'products.subtitle': 'Découvrez notre gamme complète de plants et plantules de qualité, cultivés avec expertise et passion.',
    'products.list.title': 'Liste de nos produits',
    'products.list.subtitle': 'Des variétés sélectionnées pour leur qualité et leur adaptation au climat camerounais.',
    'products.table.variety': 'Variété',
    'products.table.quantity': 'Nombre par ha',
    'products.table.price': 'Prix unitaire',
    'products.table.perHa': 'par ha',
    'products.cta.title': 'Intéressé par nos produits ?',
    'products.cta.subtitle': 'Contactez-nous pour obtenir plus d\'informations sur nos produits et passer votre commande.',
    'products.cta.button': 'Nous Contacter',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.history': 'Our Story',
    'nav.cocoa': 'Our Cocoa',
    'nav.gallery': 'Gallery',
    'nav.products': 'Our Products',
    'nav.join': 'Join Us',
    'nav.contact': 'Contact Us',
    
    // Home Page
    'home.title': 'CULTIVA',
    'home.subtitle': 'Exceptional cocoa, rooted in Cameroon, committed to tomorrow',
    'home.cta': 'Discover our story',
    
    // Common
    'common.readMore': 'Read more',
    'common.contact': 'Contact',
    'common.submit': 'Submit',
    'common.name': 'Name',
    'common.email': 'Email',
    'common.message': 'Message',
    'common.phone': 'Phone',
    'common.company': 'Company',
    
    // History Page
    'history.title': 'Our Story',
    'history.subtitle': 'A cooperative born from a shared vision',
    'history.story': 'It all started with an idea, and 11 members united by the same vision: transforming cocoa agriculture in Cameroon. Our CULTIVA cooperative was born from the desire to create an excellent cocoa supply chain, respectful of the environment and producers.',
    'history.story2': 'Our mission is simple but ambitious: produce the best cocoa in Cameroon while respecting our environment and valuing the work of our producers. Each bean tells a story of passion, dedication and innovation.',
    'history.story3': 'Today, we are proud to represent the future of Cameroonian agriculture, combining tradition and modernity to offer the world exceptional cocoa, traced and processed locally.',
    
    // Values
    'values.title': 'Our Values',
    'values.responsibility': 'Responsibility',
    'values.responsibility.desc': 'We assume our role in the sustainable development of our community',
    'values.excellence': 'Excellence',
    'values.excellence.desc': 'We aim for superior quality in every cocoa bean produced',
    'values.commitment': 'Commitment',
    'values.commitment.desc': 'We are committed to our producers and partners',
    'values.innovation': 'Innovation',
    'values.innovation.desc': 'We adopt the best modern agricultural practices',
    'values.authenticity': 'Authenticity',
    'values.authenticity.desc': 'We preserve Cameroonian agricultural traditions',
    
    // Testimonials
    'testimonials.title': 'What our partners say',
    'testimonials.subtitle': 'Testimonials from those who trust us',
    
    // Cocoa Page
    'cocoa.title': 'Our Exceptional Cocoa',
    'cocoa.subtitle': 'From Cameroonian soil to your table, discover cocoa cultivated with passion, processed with expertise and certified for excellence.',
    'cocoa.quality': 'Premium Quality',
    'cocoa.sustainable': 'Sustainable Practices',
    'cocoa.traceability': '100% Traceability',
    'cocoa.process.title': 'Our Production Process',
    'cocoa.process.subtitle': 'From plantation to processing, every step is mastered to guarantee the exceptional quality of our cocoa',
    'cocoa.sustainability.title': 'Sustainable Agricultural Practices',
    'cocoa.certifications.title': 'Our Certifications',
    
    // Join Page
    'join.title': 'Join the Movement',
    'join.subtitle': 'Together, let\'s revolutionize the Cameroonian cocoa sector. Become a partner in a project that transforms lives and cultivates the future.',
    'join.partners': 'Our Target Partners',
    'join.partners.subtitle': 'We are looking for visionary partners to co-build the future of Cameroonian cocoa',
    'join.government': 'Cameroonian Government',
    'join.banks': 'Banking Institutions',
    'join.investors': 'Investors',
    'join.ngos': 'NGOs and Organizations',
    'join.contact.title': 'Contact us',
    'join.contact.subtitle': 'Ready to join us? Share your vision with us and let\'s discover collaboration opportunities together.',
    'join.partners.title': 'Our Partners',
    'join.partners.subtitle': 'Partner organizations that support us in our mission.',
    
    // Footer
    'footer.description': 'Agricultural cooperative dedicated to the production of exceptional cocoa in Cameroon. We cultivate the future with passion, responsibility and innovation.',
    'footer.quickLinks': 'Quick Links',
    'footer.link.home': 'Home',
    'footer.link.history': 'Our Story',
    'footer.link.cocoa': 'Our Cocoa',
    'footer.link.join': 'Join Us',
    'footer.contact': 'Contact',
    'footer.address': 'South Region, Cameroon',
    'footer.email': 'contact@scoopscultiva.cm',
    'footer.phone': '+237 XXX XXX XXX',
    'footer.copyright': '© 2025 SCOOPS CULTIVA. All rights reserved. | Made with passion for the excellence of Cameroonian cocoa.',
    
    // News (Actualités)
    'news.1.title': 'New harvest launched',
    'news.1.text': 'The 2024 campaign starts with innovations for our producers.',
    'news.2.title': 'Organic certification obtained',
    'news.2.text': 'Our cocoa is now certified organic by Ecocert.',
    'news.3.title': 'Ministerial visit',
    'news.3.text': 'The Minister of Agriculture praised our efforts for the sector.',
    'news.4.title': 'New partnership',
    'news.4.text': 'An agreement signed with a major European chocolate maker.',
    
    // Gallery
    'gallery.1.title': 'Cocoa Harvest',
    'gallery.1.desc': "Cooperative members harvest ripe cocoa pods, a meticulous job that ensures the final product's quality.",
    'gallery.2.title': 'Bean Sorting',
    'gallery.2.desc': "After harvest, the beans are hand-sorted to keep only the best, ensuring exceptional cocoa.",
    'gallery.3.title': 'Sun Drying',
    'gallery.3.desc': "Cocoa beans are naturally sun-dried, a key step to develop their unique flavors.",
    'gallery.4.title': 'Cooperative Life',
    'gallery.4.desc': "Life in the cooperative also means sharing and solidarity among members, at the heart of the village.",
    'gallery.5.title': 'Quality Control',
    'gallery.5.desc': "Each batch of cocoa is rigorously checked to meet international market standards.",
    'gallery.6.title': 'Shipping',
    'gallery.6.desc': "Cocoa ready for shipment, the result of collective work and the cooperative's sustainable commitment.",
    
    // Products Page
    'products.title': 'Our Available Products',
    'products.subtitle': 'Discover our complete range of quality plants and seedlings, cultivated with expertise and passion.',
    'products.list.title': 'List of our products',
    'products.list.subtitle': 'Varieties selected for their quality and adaptation to the Cameroonian climate.',
    'products.table.variety': 'Variety',
    'products.table.quantity': 'Quantity per ha',
    'products.table.price': 'Unit price',
    'products.table.perHa': 'per ha',
    'products.cta.title': 'Interested in our products?',
    'products.cta.subtitle': 'Contact us to get more information about our products and place your order.',
    'products.cta.button': 'Contact Us',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['fr', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      setLanguage('fr');
      localStorage.setItem('language', 'fr');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (isClient) {
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t, isClient }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
