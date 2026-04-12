import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen } from "lucide-react";

const pubs = [
  { year: "2026", title: "BMC Health Services Research", note: "Under Review" },
  { year: "2026", title: "WHO AI Health Compendium", note: "" },
  { year: "2025", title: "World Bank Symposium", note: "" },
  { year: "2025", title: "Geneva Digital Health Day", note: "" },
  { year: "2025", title: "ICGT Conference", note: "" },
];

const Publications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Research</p>
          <h2 className="section-title">Publications</h2>
        </div>
        <div ref={ref} className="max-w-2xl mx-auto space-y-4">
          {pubs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 bg-background rounded-xl p-4 border border-border card-hover"
            >
              <span className="shrink-0 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold">
                {p.year}
              </span>
              <BookOpen size={16} className="text-muted-foreground shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{p.title}</p>
                {p.note && <p className="text-xs text-muted-foreground">{p.note}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
