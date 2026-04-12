import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const items = [
  { degree: "MBA (Ongoing)", school: "University of Dhaka", detail: "Organizational Strategy & Leadership" },
  { degree: "BBA", school: "North South University", detail: "" },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">Education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>
        <div ref={ref} className="flex flex-col sm:flex-row gap-5 justify-center max-w-2xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex-1 bg-background rounded-2xl p-6 border border-border card-hover text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent flex items-center justify-center">
                <GraduationCap size={18} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{item.degree}</h3>
              <p className="text-sm text-primary font-medium">{item.school}</p>
              {item.detail && <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
