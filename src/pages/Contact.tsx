import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 bg-gradient-hero relative">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-primary text-sm tracking-widest uppercase font-medium">Contact Us</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 max-w-2xl">
              Let's Build <span className="text-gradient">Together</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed text-lg">
              Have a project in mind? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Tokha, Kathmandu, Nepal
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Phone</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    +977-9868348282
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border/50 bg-card/50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    abionsoft@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-primary text-sm tracking-widest uppercase font-medium">Get in Touch</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                  Send Us a <span className="text-gradient">Message</span>
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 glow-primary">
                        <CheckCircle className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground mt-2">We'll get back to you shortly.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6 p-8 rounded-xl border border-border/50 bg-card/50"
                    >
                      <div className="relative group">
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder=" "
                          className="peer w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder-transparent"
                        />
                        <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-secondary peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-secondary peer-[:not(:placeholder-shown)]:px-1 pointer-events-none">
                          Name
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder=" "
                          className="peer w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder-transparent"
                        />
                        <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-secondary peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-secondary peer-[:not(:placeholder-shown)]:px-1 pointer-events-none">
                          Email
                        </label>
                      </div>

                      <div className="relative group">
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder=" "
                          className="peer w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder-transparent"
                        />
                        <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-secondary peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-secondary peer-[:not(:placeholder-shown)]:px-1 pointer-events-none">
                          Phone (Optional)
                        </label>
                      </div>

                      <div className="relative group">
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder=" "
                          className="peer w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none placeholder-transparent"
                        />
                        <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-secondary peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-secondary peer-[:not(:placeholder-shown)]:px-1 pointer-events-none">
                          Message
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity glow-primary"
                      >
                        Send Message
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
