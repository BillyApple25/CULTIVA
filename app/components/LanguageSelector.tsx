
'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSelectorProps {
  zPriority?: boolean;
}

const LANGUAGES = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export default function LanguageSelector({ zPriority }: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si clic extérieur ou touche Échap
  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        buttonRef.current && !buttonRef.current.contains(event.target as Node) &&
        menuRef.current && !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const current = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Sélecteur de langue"
        onClick={() => setIsOpen(o => !o)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D3FA53]"
      >
        <span className="text-lg">{current.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{current.name}</span>
        <i className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line w-4 h-4 flex items-center justify-center`}></i>
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 mt-3 bg-white rounded-xl shadow-2xl border py-2 min-w-[140px] select-none z-[50] pointer-events-auto language-selector-dropdown transition-all duration-150"
          style={{ zIndex: 9999, pointerEvents: 'auto' }}
          role="listbox"
          tabIndex={-1}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={language === lang.code}
              onClick={() => {
                setLanguage(lang.code as 'fr' | 'en');
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-2 cursor-pointer select-none focus:outline-none focus:bg-[#D3FA53]/30 ${
                language === lang.code ? 'bg-[#D3FA53]/20 text-[#14230B]' : 'text-gray-700'
              }`}
              style={{ pointerEvents: 'auto' }}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
