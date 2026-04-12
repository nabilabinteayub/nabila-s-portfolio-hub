import { motion } from "framer-motion";
import { Download, Mail, Briefcase, Users, BarChart3, ClipboardList } from "lucide-react";

const expertiseItems = [
  { icon: ClipboardList, label: "Project Coordination" },
  { icon: Briefcase, label: "Grant Management" },
  { icon: Users, label: "Stakeholder Engagement" },
  { icon: BarChart3, label: "Data Analysis" },
];

const Hero = () => (
  <section id="home" className="min-h-screen flex items-center pt-16" style={{ background: "var(--hero-gradient)" }}>
    <div className="section-container w-full">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left – Image */}
        <motion.div
          className="lg:col-span-4 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-[3px] border-primary/40 shadow-lg">
              <img
                src="https://i.ibb.co.com/F4wVCc1D/Nabila-Apu.png"
                alt="Nabila Binte Ayub"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-primary/10 -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-primary/5 -z-10" />
          </div>
        </motion.div>

        {/* Middle – Text */}
        <motion.div
          className="lg:col-span-5 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-primary font-medium text-sm mb-2 tracking-wide uppercase">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-tight mb-3">
            Nabila Binte&nbsp;<span className="gradient-text">Ayub</span>
          </h1>
          <p className="text-lg font-medium text-muted-foreground mb-4">Projects &amp; Grants Specialist</p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Driving impactful projects through strategic coordination, grants management, and international collaboration.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-medium text-sm card-hover"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </motion.div>

        {/* Right – Expertise card */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-card rounded-2xl p-6 card-hover border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">
              Core Expertise
            </h3>
            <div className="space-y-3">
              {expertiseItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
