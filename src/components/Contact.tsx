import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        formElement.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => console.error("Form submission error:", error));
  };

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-5 gap-6"
        >
          {/* Info */}
          <div className="md:col-span-2 card-base">
            <h3 className="font-heading font-semibold text-foreground mb-5">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Email</p>
                  <a href="mailto:nabilabinteayub@gmail.com" className="text-xs text-primary hover:underline">nabilabinteayub@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-foreground">Location</p>
                  <p className="text-xs text-muted-foreground">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Linkedin size={15} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-foreground">LinkedIn</p>
                  <a href="https://linkedin.com/in/nabilabinteayub" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">in/nabilabinteayub</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-primary mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-foreground">WhatsApp</p>
                  <a href="https://wa.me/8801776290946" target="_blank" rel="noreferrer" className="text-xs text-primary hover:underline">+880 1776 290946</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 card-base">
            <h3 className="font-heading font-semibold text-foreground mb-4">Send Me a Message</h3>
            
            {submitted && (
              <div className="mb-4 p-3 rounded-md bg-green-50 border border-green-200 text-green-800 text-xs font-medium">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form 
              name="contact" 
              method="POST" 
              netlify
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              {/* Spam protection */}
              <p hidden>
                <input name="bot-field" type="text" />
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-md bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-md bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-foreground mb-1 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Message subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-3 py-2 rounded-md bg-background border border-border text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
