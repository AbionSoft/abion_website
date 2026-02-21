import { motion } from "framer-motion";
import { Code, Smartphone, FileText, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Code,
    title: "Web Development",
    features: [
      "Custom websites tailored to your brand",
      "Business websites that drive conversions",
      "Web applications with modern architecture",
      "Responsive design for all devices",
      "Performance optimization and SEO",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    features: [
      "Android & iOS native applications",
      "Cross-platform solutions with React Native",
      "UI/UX optimized mobile experiences",
      "App store deployment and support",
      "Scalable backend infrastructure",
    ],
  },
  {
    icon: FileText,
    title: "Content Writing",
    features: [
      "Website content that engages visitors",
      "SEO-optimized content for better rankings",
      "Technical writing and documentation",
      "Brand storytelling that resonates",
      "Blog posts and marketing copy",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    features: [
      "Brand identity and logo design",
      "Social media graphics and templates",
      "Marketing materials and brochures",
      "UI design assets for digital products",
      "Print and digital design solutions",
    ],
  },
];

const Services = () => {
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
            <p className="text-primary text-sm tracking-widest uppercase font-medium">Our Services</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 max-w-2xl">
              What We <span className="text-gradient">Build</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed text-lg">
              We provide end-to-end digital solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service.title}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text Content */}
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Element */}
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className="relative aspect-square rounded-2xl border border-border/50 bg-card/50 p-8 flex items-center justify-center overflow-hidden group hover-glow">
                      <div className="absolute inset-0 bg-grid opacity-20" />
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-2xl group-hover:bg-primary/20 transition-colors" />
                      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
                      <service.icon className="w-24 h-24 text-primary/30 relative z-10 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-primary">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Ready to Get <span className="text-gradient">Started?</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Let's discuss your project and create something amazing together.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 mt-8 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
