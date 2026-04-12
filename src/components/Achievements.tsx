import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star } from "lucide-react";

const items = [
  {
    icon: Award,
    title: 'ILO "Model Enterprise Clinic" Initiative',
    desc: "Coordinated proposal-to-implementation transition with ILO, Ministry of Labour, BGMEA, and BKMEA — pilot implementation in 30 RMG factories.",
  },
  {
    icon: Trophy,
    title: "e-TB Manager Project (BDT 30 Lakh)",
    desc: "Led proposal development for DGHS, Ministry of Health, Bangladesh — national TB program digital system upgrade.",
  },
  {
    icon: Star,
    title: "Runner-up: ADB PATH Innovation Challenge",
    desc: '"Jotno" — an AI-driven mental health solution.',
  },
  {
    icon: Star,
    title: "Semifinalist: MIT Solve 2024",
    desc: "Global Health Equity Challenge.",
  },
  {
    icon: Award,
    title: "Swiss Re Award (Shortlisted)",
    desc: "Entrepreneurs for Resilience Award.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding section-alt">
      <div className="section-container">
        <h2 className="section-title">Selected Key Achievements</h2>
        <div ref={ref} className="grid md:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-base flex gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <Icon size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground mb-0.5">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
