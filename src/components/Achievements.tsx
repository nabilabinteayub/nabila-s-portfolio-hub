import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star } from "lucide-react";

const items = [
  { icon: Award, title: "ILO Model Enterprise Clinic", desc: "Implemented across 30 factories" },
  { icon: Trophy, title: "e-TB Manager Project", desc: "Secured funding of BDT 30 Lakh" },
  { icon: Star, title: "ADB PATH Innovation Challenge", desc: "Runner-up" },
  { icon: Star, title: "MIT Solve 2024", desc: "Semifinalist" },
  { icon: Award, title: "Swiss Re Award", desc: "Shortlisted" },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Highlights</p>
          <h2 className="section-title">Achievements</h2>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border card-hover text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
