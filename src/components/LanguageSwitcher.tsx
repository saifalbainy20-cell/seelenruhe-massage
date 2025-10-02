import React, { useState } from 'react';
import { languages, type Language } from '../lib/i18n';

interface LanguageSwitcherProps {
  lang: Language;
  currentPath: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ lang, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    window.location.href = `/${newLang}${currentPath}`;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-300 font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        <span className="uppercase">{lang}</span>
        <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg overflow-hidden min-w-[150px] z-50">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code as Language)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                code === lang ? 'bg-primary/10 text-primary font-medium' : 'text-gray-700'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
