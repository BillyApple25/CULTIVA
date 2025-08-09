'use client';

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#14230B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2 cursor-pointer">
                <img 
                  src="/assets/logos/Logo_LogoPrincipal(blanc+lemonGreen).png" 
                  alt="Logo Cultiva" 
                  className="h-10 md:h-14 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#D3FA53]/20 rounded-full flex items-center justify-center hover:bg-[#D3FA53] hover:text-[#14230B] transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#D3FA53]/20 rounded-full flex items-center justify-center hover:bg-[#D3FA53] hover:text-[#14230B] transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#D3FA53]/20 rounded-full flex items-center justify-center hover:bg-[#D3FA53] hover:text-[#14230B] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#D3FA53]/20 rounded-full flex items-center justify-center hover:bg-[#D3FA53] hover:text-[#14230B] transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#D3FA53] transition-colors cursor-pointer">
                  {t('footer.link.home')}
                </Link>
              </li>
              <li>
                <Link href="/histoire" className="text-gray-300 hover:text-[#D3FA53] transition-colors cursor-pointer">
                  {t('footer.link.history')}
                </Link>
              </li>
              <li>
                <Link href="/cacao" className="text-gray-300 hover:text-[#D3FA53] transition-colors cursor-pointer">
                  {t('footer.link.cocoa')}
                </Link>
              </li>
              <li>
                <Link href="/rejoindre" className="text-gray-300 hover:text-[#D3FA53] transition-colors cursor-pointer">
                  {t('footer.link.join')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-map-pin-line text-[#D3FA53]"></i>
                </div>
                <span className="text-gray-300 text-sm">{t('footer.address')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-mail-line text-[#D3FA53]"></i>
                </div>
                <span className="text-gray-300 text-sm">{t('footer.email')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-phone-line text-[#D3FA53]"></i>
                </div>
                <span className="text-gray-300 text-sm">{t('footer.phone')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}