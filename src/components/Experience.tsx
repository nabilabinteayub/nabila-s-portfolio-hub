import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Executive, Project Coordination",
    company: "CMED Health Ltd.",
    period: "Dec 2022 – Present",
    points: [
      "Lead proposal development, donor reporting, and project documentation.",
      "Coordinate tender preparation and procurement processes, including preparation of bidding documents, ensuring regulatory compliance, and managing online submissions through the Government e-Procurement (e-GP) platform.",
      "Manage grant lifecycle from preparation to compliance and reporting.",
      "Build and maintain partnerships with international collaborators and strategic donors.",
      "Support budgeting, performance reporting, and financial analysis.",
      "Oversaw project risk management, monitoring key milestones and implementing corrective measures to maintain donor compliance and quality standards.",
    ],
  },
  {
    role: "Project Coordinator (Part-Time)",
    company: "AIMS Lab, IRIIC, UIU",
    period: "Dec 2022 – Dec 2023",
    points: [
      "Coordinated interdisciplinary projects in ML, NLP, and biomedical engineering.",
      "Supported proposal writing, HR operations, finance tracking, and research deliverables.",
      "Organized seminars, workshops, MoU signings, and outreach campaigns.",
      "Monitored project progress and deliverables using structured reporting tools.",
    ],
  },
  {
    role: "Executive – HR & Business Development",
    company: "Uddom Business Services Limited",
    period: "Jun 2022 – Nov 2022",
    points: [],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding section-alt">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div ref={ref} className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                  <Briefcase size={11} className="text-primary" />
                </div>

                <div className="card-base">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-primary text-base">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic mb-3">{exp.company}</p>
                  {exp.points.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.points.map((p, j) => (
                        <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-foreground/30 shrink-0" />
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
