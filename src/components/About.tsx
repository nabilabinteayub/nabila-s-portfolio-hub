import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">About Me</p>
          <h2 className="section-title">Passionate About Impact</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            With over three years of professional experience, I specialize in end-to-end project lifecycle management—from concept development and donor coordination to procurement, compliance, and impact evaluation. My expertise spans grant writing, proposal development, and strategic partnership building across healthcare and international development sectors. Currently pursuing an MBA in Organizational Strategy &amp; Leadership at the University of Dhaka, I am driven by a commitment to designing and delivering programs that create measurable, sustainable change.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
