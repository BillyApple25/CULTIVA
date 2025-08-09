
'use client';

import Link from 'next/link';
import { useLanguage } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';

export default function Home() {
  const { t, isClient } = useLanguage();
  if (!isClient) return null;

  // Section Actualités défilante
  const news = [
    { title: t('news.1.title'), date: '2024-07-01', text: t('news.1.text') },
    { title: t('news.2.title'), date: '2024-06-15', text: t('news.2.text') },
    { title: t('news.3.title'), date: '2024-05-20', text: t('news.3.text') },
    { title: t('news.4.title'), date: '2024-04-10', text: t('news.4.text') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Sunrise%20over%20lush%20cocoa%20plantation%20in%20Cameroon%2C%20golden%20morning%20light%20filtering%20through%20cocoa%20trees%2C%20misty%20atmospheric%20landscape%2C%20warm%20African%20sunrise%20casting%20beautiful%20shadows%2C%20peaceful%20agricultural%20scene%20with%20cocoa%20pods%20visible%2C%20cinematic%20lighting%20with%20soft%20warm%20tones%2C%20natural%20authentic%20African%20farming%20landscape%2C%20serene%20and%20inspiring%20morning%20atmosphere&width=1920&height=1080&seq=hero-cocoa&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-0 h-20 overflow-visible">
        <div className="flex items-center space-x-2">
        <Link href="/">
          <img 
            src="/assets/logos/Logo_LogoPrincipal(blanc+lemonGreen).png" 
            alt="Logo Cultiva" 
            className="h-10 md:h-14 w-auto"
          />
        </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-[#D3FA53] transition-colors cursor-pointer">{t('nav.home')}</Link>
          <Link href="/histoire" className="text-white hover:text-[#D3FA53] transition-colors cursor-pointer">{t('nav.history')}</Link>
          <Link href="/cacao" className="text-white hover:text-[#D3FA53] transition-colors cursor-pointer">{t('nav.cocoa')}</Link>
          <Link href="/galerie" className="text-white hover:text-[#D3FA53] transition-colors cursor-pointer">{t('nav.gallery')}</Link>
          <Link href="/rejoindre" className="text-white hover:text-[#D3FA53] transition-colors cursor-pointer">{t('nav.join')}</Link>
          <div className="ml-4 relative h-full flex items-center">
            <LanguageSelector zPriority />
          </div>
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector zPriority />
          <button className="text-white w-6 h-6 flex items-center justify-center">
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] px-6">
       <div className="text-center max-w-4xl mx-auto mt-40">
          <p className="text-3xl md:text-5xl text-[#14230B] mb-8 font-bold">
            {t('home.title')}
          </p>
          <p className="text-xl md:text-2xl text-[#D3FA53] mb-32 font-light md:mb-10 ">
            {t("home.subtitle")}
          </p>
          <Link href="/histoire">
            <button className="bg-[#D3FA53] text-[#14230B] px-8 py-6 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              {t('home.cta')}
            </button>
          </Link>
        </div>

      </div>

      {/* Section Actualités */}
      <section className="relative z-10 w-full bg-[#E9E9E9] py-12 mt-32 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#14230B] mb-6 tracking-tight">
            Actualités
          </h2>

          <div className="flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#D3FA53] pb-4 animate-scroll-x">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[300px] bg-white rounded-xl shadow-md p-6 flex-shrink-0 border border-[#14230B]/10 hover:scale-105 transition-transform duration-300"
                >
                <div className="text-xl font-bold text-[#14230B] mb-2">
                  {item.title}
                </div>
                <div className="text-[#40200C] text-sm leading-relaxed">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
