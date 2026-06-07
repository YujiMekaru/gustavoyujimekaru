import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useI18n } from "@/i18n";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/YujiMekaru",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/gustavo-yuji-mekaru/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:gustavoyujimekaru@gmail.com",
    label: "Email",
  },
  {
    icon: Phone,
    href: "tel:+5513996725438",
    label: "Phone",
  },
];

const Hero = () => {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Glow background effect */}
    <div className="absolute inset-0 pointer-events-none">
      <div
        className="
          absolute top-[1%] left-1/2 -translate-x-1/2
          w-[700px] h-[700px] rounded-full
          opacity-70
          blur-3xl
          transform-gpu
          [will-change:transform,opacity,filter]
          animate-glow-pulse
        "
        style={{
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.06) 35%, transparent 70%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
            {t.hero.subtitle}
          </p>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 text-foreground">
            Gustavo Yuji
            <br />
            <span className="text-primary">Mekaru</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{t.hero.location}</span>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-lg bg-surface border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)]"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="#skills"
            className="inline-flex flex-col items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors font-mono"
          >
            <span>scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
