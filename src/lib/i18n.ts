export const languages = {
  de: 'Deutsch',
  en: 'English',
  ar: 'العربية',
  tr: 'Türkçe',
};

export const defaultLang = 'de';

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    return key;
  };
}

export function getLocalizedPath(lang: Language, path: string = ''): string {
  if (lang === defaultLang) {
    return path || '/';
  }
  return `/${lang}${path}`;
}

export function getAlternateLanguages(currentLang: Language, currentPath: string) {
  return Object.keys(languages)
    .filter(lang => lang !== currentLang)
    .map(lang => ({
      lang,
      url: lang === defaultLang ? currentPath : `/${lang}${currentPath}`
    }));
}
