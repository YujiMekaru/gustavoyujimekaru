import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const languages = ["C#", "JavaScript", "TypeScript", "Python", "SQL", "GO"];
const technologies = [
  "Node.js",
  "GCP",
  "Linux Server",
  "PostgreSQL",
  "Git",
  "Docker",
  ".NET",
  "Vue.js",
  "React.js",
  "Nginx",
  "GitLab CI/CD",
  "Kubernetes"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const Skills = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-8">
            {t.skills.sectionTitle}
          </h2>

          <div className="mb-8">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              {t.skills.languages}
            </h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {languages.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 rounded-md bg-surface border border-border text-sm font-mono text-foreground hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              {t.skills.technologies}
            </h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {technologies.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  className="px-4 py-2 rounded-md bg-surface border border-border text-sm font-mono text-foreground hover:border-primary/50 hover:shadow-[0_0_15px_hsl(var(--primary)/0.1)] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
