
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer">
            <img 
              src="/assets/logos/LogoPrincipal+couleurPrincipal.png" 
              alt="Logo Cultiva" 
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className={`transition-colors font-medium cursor-pointer ${pathname === '/' ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.home')}</Link>
            <Link href="/histoire" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/histoire') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.history')}</Link>
            <Link href="/cacao" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/cacao') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.cocoa')}</Link>
            <Link href="/galerie" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/galerie') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.gallery')}</Link>
            <Link href="/produits" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/produits') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.products')}</Link>
            <Link href="/rejoindre" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/rejoindre') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.join')}</Link>
          </div>

          {/* Language Selector and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/rejoindre#contact">
              <button className="bg-[#D3FA53] text-[#14230B] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer">
                {t('nav.contact')}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-6 h-6 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-[#14230B]`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className={`transition-colors font-medium cursor-pointer ${pathname === '/' ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.home')}</Link>
              <Link href="/histoire" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/histoire') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.history')}</Link>
              <Link href="/cacao" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/cacao') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.cocoa')}</Link>
              <Link href="/galerie" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/galerie') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.gallery')}</Link>
              <Link href="/produits" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/produits') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.products')}</Link>
              <Link href="/rejoindre" className={`transition-colors font-medium cursor-pointer ${pathname.startsWith('/rejoindre') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}>{t('nav.join')}</Link>
              <div className="pt-2 border-t border-gray-200">
                <LanguageSelector />
              </div>
              <Link href="/rejoindre#contact">
                <button className="bg-[#D3FA53] text-[#14230B] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer w-full">
                  {t('nav.contact')}
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
