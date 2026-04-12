import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Monitor, Landmark } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    icon: HeartPulse,
    title: "AI Healthcare Systems",
    desc: "Developing AI-powered solutions like the Intelligent General Practitioner (IGP) for early disease detection and remote patient monitoring in underserved communities.",
  },
  {
    icon: Monitor,
    title: "Digital Health Platforms",
    desc: "Building scalable digital platforms such as the Digital Health Corner (DHC) connecting healthcare workers, patients, and stakeholders for better health outcomes.",
  },
  {
    icon: Landmark,
    title: "Grant-Funded Initiatives",
    desc: "Managing multi-stakeholder projects funded by international donors including ILO, DGHS — ensuring compliance, impact measurement, and sustainability.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Selected Projects</h2>
        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {projects.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-base"
            >
              <div className="h-28 bg-muted rounded-md flex items-center justify-center mb-4">
                <Icon size={36} className="text-primary/40" />
              </div>
              <h3 className="font-heading font-semibold text-primary text-base mb-1 hover:underline cursor-default">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
              <span className="inline-flex items-center gap-1 text-xs text-primary font-medium cursor-default">
                Learn more <ArrowRight size={12} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
