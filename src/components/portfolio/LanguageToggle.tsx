import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const LanguageToggle = () => {
  const { locale, setLocale } = useI18n();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50 flex items-center rounded-lg bg-surface border border-border overflow-hidden"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <button
        onClick={() => setLocale("pt")}
        className={`
          relative px-3 py-2 text-sm font-mono font-medium transition-all duration-300 cursor-pointer
          ${locale === "pt"
            ? "text-primary-foreground bg-primary"
            : "text-muted-foreground hover:text-foreground"
          }
        `}
        aria-label="Português"
      >
        PT
      </button>
      <div className="w-px h-5 bg-border" />
      <button
        onClick={() => setLocale("en")}
        className={`
          relative px-3 py-2 text-sm font-mono font-medium transition-all duration-300 cursor-pointer
          ${locale === "en"
            ? "text-primary-foreground bg-primary"
            : "text-muted-foreground hover:text-foreground"
          }
        `}
        aria-label="English"
      >
        EN
      </button>
    </motion.div>
  );
};

export default LanguageToggle;
