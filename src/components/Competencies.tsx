import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList, FileText, ShoppingCart, Users, DollarSign, BarChart3, MessageSquare,
} from "lucide-react";

const items = [
  { icon: ClipboardList, title: "Project Coordination & Reporting" },
  { icon: FileText, title: "Grant Writing & Proposal Development" },
  { icon: ShoppingCart, title: "Procurement & Tender Management" },
  { icon: Users, title: "Donor & Partnership Engagement" },
  { icon: DollarSign, title: "Budgeting & Financial Tracking" },
  { icon: BarChart3, title: "Research & Data Analysis" },
  { icon: MessageSquare, title: "Strategic Communication" },
];

const Competencies = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium text-sm mb-2 uppercase tracking-wide">What I Do</p>
          <h2 className="section-title">Core Competencies</h2>
        </div>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border card-hover text-center group cursor-default"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon size={22} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-medium text-sm text-foreground">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competencies;
