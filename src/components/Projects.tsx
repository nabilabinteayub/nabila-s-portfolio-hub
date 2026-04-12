import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Monitor, Landmark } from "lucide-react";

const projects = [
  {
    icon: HeartPulse,
    title: "AI Healthcare Systems",
    desc: "Developing AI-powered solutions for early disease detection and remote patient monitoring in underserved communities.",
  },
  {
    icon: Monitor,
    title: "Digital Health Platforms",
    desc: "Building scalable digital platforms connecting healthcare workers, patients, and stakeholders for better health outcomes.",
  },
  {
    icon: Landmark,
    title: "Grant-Funded Initiatives",
    desc: "Managing multi-stakeholder projects funded by international donors, ensuring compliance, impact measurement, and sustainability.",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {projects.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover group"
            >
              <div className="h-36 bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <Icon size={40} className="text-primary/60 group-hover:text-primary transition-colors" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
