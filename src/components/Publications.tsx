import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ExternalLink } from "lucide-react";

const journalArticles = [
  {
    title: "Enhancing Healthcare Access and OHS Compliance through Model Enterprise Clinic (MEC) in Bangladesh's RMG Sector",
    authors: "N. B. Ayub, M. M. Rahman, M. Zaman, F. Sarker, and K. A. Mamun",
    venue: "BMC Health Services Research, 2026",
    note: "Manuscript under review",
  },
];

const conferencePapers = [
  {
    title: "Intelligent General Practitioner (IGP), an AI-Powered, CHWs-Driven, People-Centered Model to Support Primary Healthcare Delivery in LMICs towards UHC",
    authors: "N. B. Ayub, A. Deb, M. Zaman, F. Sarkar, and K. A. Mamun",
    venue: "Compendium on Real-World Impact of AI in Health, World Health Organization, 2026, pp. 150–158",
    url: "https://d19ob9sqegt2wc.cloudfront.net/stage/uploads/Health_Use_cases_AI_Compendium_ad0551b6ef.pdf",
  },
  {
    title: "Inclusive Digital Health Solution for Ensuring Employee Well-Being, Women's Health, and Workplace Rights",
    authors: "S. Ahmed et al.",
    venue: "International Conference on Gender and Technology 2025 (ICGT 2025), Amrita Vishwa Vidyapeetham, 2025",
    url: "https://webfiles.amrita.edu/2025/05/icgt-2025-conference-proceedings.pdf",
  },
  {
    title: "Intelligent General Practitioner (IGP) — AI-Powered, Patient-Centered Model to Revolutionize Primary Healthcare Delivery in LMICs towards UHC",
    authors: "N. B. Ayub, F. Sarker, R. A. Bhuiyan, M. Zaman, and K. A. Mamun",
    venue: "Knowledge Symposium on AI and the Future of Human Capital in the Global South, World Bank & George Washington University, Washington DC, 2025",
  },
  {
    title: "Digital Health Corner (DHC): Improving Employee Wellness and Addressing NCDs through Workplace Digital Health Innovation",
    authors: "N. Khan, N. B. Ayub, M. Zaman, M. H. Choudhury, F. Sarker, and K. A. A. Mamun",
    venue: "Journal of the College of Community Physicians of Sri Lanka Conference, vol. 31, 2025, p. 24",
    doi: "10.4038/jccpsl.v31i5.8864",
  },
  {
    title: "Digital General Practitioner (GP) Model for Sustainable Comprehensive Healthcare Service Delivery towards UHC",
    authors: "M. Zaman, F. Sarker, N. B. Ayub, M. H. Chowdhury, and K. A. Mamun",
    venue: "Geneva Digital Health Day 2025, Geneva, Switzerland, May 22, 2025",
    url: "https://ghf.unige.ch/event/10/contributions/999/",
  },
];

const Publications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="publications" className="section-padding">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Journal Articles */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Journal Articles</h3>
            <div className="space-y-3">
              {journalArticles.map((p, i) => (
                <div key={i} className="flex gap-3 card-base">
                  <FileText size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-sm text-primary hover:underline cursor-default">{p.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.authors}</p>
                    <p className="text-xs text-muted-foreground italic">{p.venue}</p>
                    {p.note && <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-accent text-accent-foreground font-medium">{p.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Papers */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Conference Papers & Proceedings</h3>
            <div className="space-y-3">
              {conferencePapers.map((p, i) => (
                <div key={i} className="flex gap-3 card-base">
                  <FileText size={18} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-heading font-semibold text-sm text-primary">{p.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.authors}</p>
                    <p className="text-xs text-muted-foreground italic">{p.venue}</p>
                    {p.doi && <p className="text-xs text-muted-foreground mt-0.5">DOI: {p.doi}</p>}
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1">
                        <ExternalLink size={11} /> View
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
