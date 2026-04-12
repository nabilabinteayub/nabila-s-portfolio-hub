import { Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12">
    <div className="section-container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-heading font-bold text-lg text-background mb-2">
            Nabila Binte Ayub
          </p>
          <p className="text-sm text-background/60">Projects & Grants Specialist</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-background mb-3">Quick Links</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-background/60 hover:text-background transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <a href="mailto:nabilabinteayub@gmail.com" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
            <Mail size={16} />
          </a>
          <a href="https://wa.me/8801776290946" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
            <Phone size={16} />
          </a>
          <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-background/10 text-center text-xs text-background/40">
        © {new Date().getFullYear()} Nabila Binte Ayub. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
