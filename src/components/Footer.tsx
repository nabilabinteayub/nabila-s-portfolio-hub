import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="section-alt py-10 border-t border-border">
    <div className="section-container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-heading font-bold text-foreground mb-1">Nabila Binte Ayub</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Projects & Grants Specialist specializing in Project Coordination, Grant Management, and International Collaboration.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Quick Links</p>
          <div className="flex flex-col gap-1.5">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground mb-3">Contact</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={13} className="text-primary" /> Dhaka, Bangladesh
            </div>
            <a href="mailto:nabilabinteayub@gmail.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Mail size={13} className="text-primary" /> nabilabinteayub@gmail.com
            </a>
            <a href="https://linkedin.com/in/nabilabinteayub" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={13} className="text-primary" /> LinkedIn
            </a>
            <a href="https://wa.me/8801776290946" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors">
              <Phone size={13} className="text-primary" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-border text-center text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Nabila Binte Ayub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
