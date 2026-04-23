import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Briefcase, Users, FileText } from "lucide-react";

const expertiseItems = [
  { icon: ClipboardList, label: "Project Coordination" },
  { icon: Briefcase, label: "Grant Management" },
  { icon: Users, label: "Stakeholder Engagement" },
  { icon: FileText, label: "Proposal Development" },
];

const Hero = () => (
  <section id="home" className="section-alt pt-28 pb-16">
    <div className="section-container">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left – Photo */}
        <motion.div
          className="lg:col-span-3 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-52 h-52 md:w-56 md:h-56 rounded-2xl overflow-hidden border-[3px] border-primary/50 shadow-md bg-muted">
            <img
              src="https://i.ibb.co.com/F4wVCc1D/Nabila-Apu.png"
              alt="Nabila Binte Ayub"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Center – Info */}
        <motion.div
          className="lg:col-span-6 text-center lg:text-left"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">
            Nabila Binte Ayub
          </h1>
          <p className="text-lg font-heading italic text-primary mb-3">
            Projects &amp; Grants Specialist
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-lg">
            Specializing in Project Coordination, Grant Management, Stakeholder Engagement, and Data Analysis to drive impactful healthcare and development projects.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
              Contact Me <ArrowRight size={14} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
              View Profile <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Right – Expertise card */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-primary rounded-xl p-5 text-primary-foreground shadow-lg">
            <h3 className="font-heading font-semibold text-lg mb-4">Core Expertise</h3>
            <ul className="space-y-2.5">
              {expertiseItems.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm">
                  <Icon size={15} className="opacity-80" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
