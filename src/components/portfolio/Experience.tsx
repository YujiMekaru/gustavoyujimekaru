import { motion } from "framer-motion";
import { useI18n } from "@/i18n";

const Experience = () => {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-mono text-primary text-sm tracking-widest uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {t.experience.sectionTitle}
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {t.experience.jobs.map((job, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />

                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-primary font-mono text-sm">
                        {job.company}
                      </span>
                      <span className="text-text-dim">•</span>
                      <span className="text-muted-foreground text-sm font-mono">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm leading-relaxed flex gap-3"
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">
                          ▹
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
