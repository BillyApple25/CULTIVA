'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname.startsWith(href);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-[100] pointer-events-auto">
      <nav className="w-full bg-white py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer relative z-[110]">
            <img
              src="/assets/logos/LogoPrincipal+couleurPrincipal.png"
              alt="Logo Cultiva"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors font-medium cursor-pointer ${isActive('/') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/histoire"
              className={`transition-colors font-medium cursor-pointer ${isActive('/histoire') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
            >
              {t('nav.history')}
            </Link>
            <Link
              href="/cacao"
              className={`transition-colors font-medium cursor-pointer ${isActive('/cacao') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
            >
              {t('nav.cocoa')}
            </Link>
            <Link
              href="/galerie"
              className={`transition-colors font-medium cursor-pointer ${isActive('/galerie') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
            >
              {t('nav.gallery')}
            </Link>
            <Link
              href="/produits"
              className={`transition-colors font-medium cursor-pointer ${isActive('/produits') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/rejoindre"
              className={`transition-colors font-medium cursor-pointer ${isActive('/rejoindre') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
            >
              {t('nav.join')}
            </Link>
          </div>

          {/* Language Selector + CTA (desktop) */}
          <div className="hidden md:flex items-center space-x-4 relative z-[110]">
            <LanguageSelector />
            <Link href="/rejoindre#contact" className="cursor-pointer">
              <button
                type="button"
                className="bg-[#D3FA53] text-[#14230B] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer"
              >
                {t('nav.contact')}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden relative z-[120] w-10 h-10 -mr-1 flex items-center justify-center touch-manipulation"
            onClick={() => setIsMenuOpen(v => !v)}
          >
            {/* SVG inline pour éviter toute dépendance d’icônes */}
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="#14230B" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#14230B" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 relative z-[115] bg-white/95 backdrop-blur-md rounded-xl shadow-sm">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors font-medium cursor-pointer ${isActive('/') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/histoire"
                className={`transition-colors font-medium cursor-pointer ${isActive('/histoire') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.history')}
              </Link>
              <Link
                href="/cacao"
                className={`transition-colors font-medium cursor-pointer ${isActive('/cacao') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.cocoa')}
              </Link>
              <Link
                href="/galerie"
                className={`transition-colors font-medium cursor-pointer ${isActive('/galerie') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.gallery')}
              </Link>
              <Link
                href="/produits"
                className={`transition-colors font-medium cursor-pointer ${isActive('/produits') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link
                href="/rejoindre"
                className={`transition-colors font-medium cursor-pointer ${isActive('/rejoindre') ? 'text-[#D3FA53]' : 'text-[#14230B] hover:text-[#40200C]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.join')}
              </Link>

              <div className="pt-2 border-t border-gray-200">
                <LanguageSelector />
              </div>

              <Link href="/rejoindre#contact" className="cursor-pointer">
                <button
                  type="button"
                  className="bg-[#D3FA53] text-[#14230B] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap cursor-pointer w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
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
