import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { name: "Analytics", tools: ["Power BI", "SPSS"] },
  { name: "Project Mgmt", tools: ["Trello", "Jira"] },
  { name: "Finance", tools: ["QuickBooks"] },
  { name: "Productivity", tools: ["Microsoft Office"] },
  { name: "Design & Collab", tools: ["Canva", "Miro", "draw.io"] },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Tools</p>
          <h2 className="section-title">Skills & Software</h2>
        </div>
        <div ref={ref} className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.08 }}
              className="bg-card rounded-2xl p-5 border border-border card-hover min-w-[160px]"
            >
              <p className="text-xs font-medium text-primary uppercase tracking-wide mb-3">{cat.name}</p>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
