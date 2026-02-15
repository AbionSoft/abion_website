import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Form */}
            <ScrollReveal>
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
                      className="space-y-6"
                    >
                      {[
                        { name: "name" as const, label: "Name", type: "text" },
                        { name: "email" as const, label: "Email", type: "email" },
                        { name: "phone" as const, label: "Phone", type: "tel" },
                      ].map((field) => (
                        <div key={field.name} className="relative group">
                          <input
                            type={field.type}
                            required={field.name !== "phone"}
                            value={form[field.name]}
                            onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                            placeholder=" "
                            className="peer w-full px-4 py-3 rounded-lg bg-secondary border border-border/50 text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all placeholder-transparent"
                          />
                          <label className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-secondary peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-secondary peer-[:not(:placeholder-shown)]:px-1 pointer-events-none">
                            {field.label}
                          </label>
                        </div>
                      ))}
                      <div className="relative group">
                        <textarea
                          required
                          rows={4}
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
                        Send Message <Send className="w-4 h-4" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Get in Touch</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    Ready to start your next project? Reach out and let's discuss how we can help.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">Tokha, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Phone</h4>
                      <p className="text-sm text-muted-foreground">+977-9868348282</p>
                    </div>
                  </div>
                </div>

                {/* Stylized Map */}
                <div className="rounded-xl border border-border/50 bg-card/50 p-6 h-48 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-40" />
                  <div className="relative z-10 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto animate-float" />
                    <p className="text-sm text-muted-foreground mt-2">Tokha, Kathmandu</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
