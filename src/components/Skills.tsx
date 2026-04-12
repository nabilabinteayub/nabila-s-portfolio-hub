import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { name: "Project Management", tools: ["Trello", "Jira"] },
  { name: "Data Analysis & Visualization", tools: ["Power BI", "SPSS"] },
  { name: "Budgeting & Accounting", tools: ["QuickBooks"] },
  { name: "Productivity", tools: ["Microsoft Office Suite", "LaTeX"] },
  { name: "Communication & Design", tools: ["Canva", "Miro", "draw.io"] },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding section-alt">
      <div className="section-container">
        <h2 className="section-title">Tools &amp; Technologies</h2>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.07 }}
              className="card-base"
            >
              <h3 className="font-heading font-semibold text-primary text-sm mb-3">{cat.name}</h3>
              <ul className="space-y-1">
                {cat.tools.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-foreground/30" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
