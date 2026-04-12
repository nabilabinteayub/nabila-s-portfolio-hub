import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    title: "Al-Sarosh Confluence 2026: Ethics, Evidence & Innovation in Health",
    detail: "January 2026, Singapore — organized by PHC Global, GTA Foundation, IDRC, and UK International Development.",
  },
  {
    title: "National Convention & Scientific Seminar of Bangladesh Society of Physiologist",
    detail: 'Presented e-Poster: "Digital Health Corner (DHC): Improving Employee Wellness & Addressing NCDs through Workplace Digital Health Innovation."',
  },
  {
    title: "BEAR Summit & Bangladesh National Semiconductor Symposium 2025",
    detail: "Presented e-Poster: \"PVDoc: An AI-Powered Smartphone-Based Virtual Tool for Parkinson's Disease Identification and Monitoring in Low-Resource Settings.\"",
  },
];

const Events = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Conferences &amp; Events</h2>
        <div ref={ref} className="space-y-4 max-w-3xl">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-base flex gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <CalendarDays size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground mb-0.5">{e.title}</h3>
                <p className="text-xs text-muted-foreground">{e.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
