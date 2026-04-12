import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Executive – Project Coordination",
    company: "CMED Health Ltd.",
    period: "Dec 2022 – Present",
    points: [
      "Proposal development & donor reporting",
      "Tender & procurement (e-GP)",
      "Grant lifecycle management",
      "Stakeholder engagement",
      "Budget & compliance tracking",
    ],
  },
  {
    role: "Project Coordinator (Part-Time)",
    company: "AIMS Lab, IRIIC, UIU",
    period: "Dec 2022 – Dec 2023",
    points: [],
  },
  {
    role: "Executive – HR & Business Development",
    company: "Uddom Business Services Ltd.",
    period: "",
    points: [],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Career</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-[14px] top-1 w-8 h-8 rounded-full bg-accent items-center justify-center border-2 border-primary/30">
                  <Briefcase size={14} className="text-primary" />
                </div>

                <div className="bg-background rounded-2xl p-6 border border-border card-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-foreground">{exp.role}</h3>
                    {exp.period && (
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-primary font-medium mb-3">{exp.company}</p>
                  {exp.points.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
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
