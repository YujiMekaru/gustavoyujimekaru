import { motion } from "framer-motion";

interface Job {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    title: "Full-Stack Software Engineer",
    company: "Engineering Brasil S.A.",
    period: "Abr. 2025 — Presente",
    highlights: [
      "Desenvolvimento e manutenção de diversas aplicações para um grande cliente usando Node.js, TypeScript, PostgreSQL e Vue.js.",
      "Construção de automações e ferramentas internas que ajudaram os times de Suporte e Produção a testar e implantar aplicações com mais velocidade e confiabilidade — usando GCP, Linux Server, Docker, Nginx e GitLab CI/CD.",
      "Desenvolvimento de ferramentas internas com IA para automatizar tarefas de análise e validação, melhorando a eficiência operacional.",
      "Colaboração com times de produto e operações para traduzir necessidades dos clientes em MVPs e provas de conceito.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "MadeinWeb Ltda.",
    period: "Jul. 2021 — Set. 2024",
    highlights: [
      "Atuação em 10+ projetos de clientes, do discovery até produção.",
      "Construção de novas features, manutenção e otimização de APIs alinhadas às necessidades dos clientes.",
      "Contribuição no refinamento e planejamento de features.",
      "Stack principal: Git, Docker, C#, .NET, PostgreSQL, Oracle Database, TypeScript, Node.js, Nest.js, Vue.js, EF Core.",
    ],
  },
];

const Experience = () => {
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
          // Experiência
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-16">
            {jobs.map((job, index) => (
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
