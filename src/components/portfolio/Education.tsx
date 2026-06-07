import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useI18n } from "@/i18n";

const Education = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="font-mono text-primary text-sm tracking-widest uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {t.education.sectionTitle}
        </motion.h2>

        <div className="grid gap-6">
          {t.education.items.map((edu, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-lg bg-surface border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 font-mono">
                    {edu.school}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
