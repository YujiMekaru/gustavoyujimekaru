import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Locale, Translations } from "./types";
import { pt } from "./pt";
import { en } from "./en";

const translations: Record<Locale, Translations> = { pt, en };

function detectLocale(): Locale {
  // Check localStorage for user preference first
  const saved = localStorage.getItem("locale") as Locale | null;
  if (saved && (saved === "pt" || saved === "en")) {
    return saved;
  }

  // Auto-detect from browser language
  const browserLang = navigator.language || (navigator as any).userLanguage || "";
  if (browserLang.toLowerCase().startsWith("pt")) {
    return "pt";
  }

  return "en";
}

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === "pt" ? "en" : "pt");
  };

  // Update document lang attribute when locale changes
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  // Update meta tags when locale changes
  useEffect(() => {
    const t = translations[locale];
    document.title = t.meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t.meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t.meta.ogDescription);
  }, [locale]);

  return (
    <I18nContext.Provider
      value={{
        locale,
        t: translations[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return ctx;
}
