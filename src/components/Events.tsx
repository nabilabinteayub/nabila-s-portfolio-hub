import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays } from "lucide-react";

const events = [
  { title: "Singapore Health Conference", year: "2026" },
  { title: "BEAR Summit", year: "2025" },
  { title: "National Physiologist Seminar", year: "" },
];

const Events = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Engagements</p>
          <h2 className="section-title">Events</h2>
        </div>
        <div ref={ref} className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background rounded-2xl p-5 border border-border card-hover flex items-center gap-3 min-w-[240px]"
            >
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <CalendarDays size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{e.title}</p>
                {e.year && <p className="text-xs text-muted-foreground">{e.year}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
