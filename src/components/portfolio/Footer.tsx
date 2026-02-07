import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
          // Vamos conversar
        </p>
        <a
          href="mailto:gustavoyujimekaru@gmail.com"
          className="text-2xl sm:text-3xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          gustavoyujimekaru@gmail.com
        </a>

        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://github.com/YujiMekaru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/gustavo-yuji-mekaru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:gustavoyujimekaru@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-text-dim text-xs mt-12 font-mono">
          Desenvolvido por Gustavo Yuji Mekaru
        </p>
      </div>
    </footer>
  );
};

export default Footer;
