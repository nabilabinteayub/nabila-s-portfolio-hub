import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, FileText, BookOpen } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Left – About text + CV */}
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              I am a results-driven Projects & Grants Specialist with over three years of experience in project coordination, grant management, proposal development, and stakeholder engagement. Skilled in leading cross-functional teams and managing complete project lifecycles from concept to delivery.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              My expertise spans donor coordination, procurement management, budgeting, compliance, and impact evaluation across healthcare and international development sectors.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Currently pursuing an MBA in Organizational Strategy & Leadership at the University of Dhaka, I am committed to designing programs that create measurable, sustainable change in low- and middle-income settings.
            </p>

            <div className="border-l-4 border-primary/30 pl-4 mb-4">
              <h3 className="font-heading text-primary text-lg mb-1">Curriculum Vitae</h3>
              <p className="text-muted-foreground text-xs mb-3">
                For a detailed overview of my background, skills, and project experience, you can download my full CV below.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
                <FileText size={13} /> View Full CV
              </a>
            </div>
          </div>

          {/* Right – Academic Profile card */}
          <div className="card-base">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-5">Academic Profile</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">MBA (Ongoing)</p>
                  <p className="text-xs text-muted-foreground">University of Dhaka, Bangladesh</p>
                  <p className="text-xs text-muted-foreground">2024 – Present | Organizational Strategy & Leadership</p>
                </div>
              </div>
              <div className="flex gap-3">
                <GraduationCap size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">BBA</p>
                  <p className="text-xs text-muted-foreground">North South University, Bangladesh</p>
                  <p className="text-xs text-muted-foreground">2017 – 2021 | Human Resource Management</p>
                </div>
              </div>
              <div className="flex gap-3">
                <BookOpen size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Core Competencies</p>
                  <p className="text-xs text-muted-foreground">
                    Project Coordination & Reporting, Grant Writing & Proposal Development, Procurement & Tender Management, Donor & Partnership Engagement, Budgeting & Financial Tracking, Research & Data Analysis, Strategic Communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
