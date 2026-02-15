import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Smartphone, Globe, Palette, Rocket, Cpu, X, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    short: "Bespoke solutions tailored to your business challenges.",
    detail: "We design, develop, and deploy custom software solutions from the ground up. Whether it's an internal tool, a customer-facing platform, or a complex enterprise system — we build it to scale with your growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    short: "iOS and Android apps that users love.",
    detail: "From concept to launch, we create native and cross-platform mobile applications with intuitive UX, high performance, and beautiful interfaces that keep users engaged.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    short: "Modern, fast, and scalable web platforms.",
    detail: "We build responsive, real-time web applications using cutting-edge frameworks. SPAs, progressive web apps, dashboards — all designed for speed and reliability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    short: "Interfaces that are intuitive and delightful.",
    detail: "Our design process is rooted in user research, wireframing, prototyping, and testing. We create interfaces that not only look stunning but drive measurable business outcomes.",
  },
  {
    icon: Rocket,
    title: "Product Development",
    short: "From idea to market-ready product.",
    detail: "We help startups and enterprises take ideas from napkin sketches to fully launched products. Strategy, MVP development, iteration, and scaling — we're with you at every stage.",
  },
  {
    icon: Cpu,
    title: "Technical Consulting",
    short: "Expert guidance for your tech decisions.",
    detail: "Need help choosing the right stack, architecture, or strategy? Our experienced engineers provide hands-on consulting to help you make informed technology decisions.",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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
              End-to-end technology services designed to turn your vision into powerful digital products.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <button
                  onClick={() => setActiveService(i)}
                  className="group w-full text-left p-8 rounded-xl border border-border/50 bg-card/50 hover-glow transition-all duration-500 hover:border-primary/30 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed flex-1">{service.short}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Overlay */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setActiveService(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong rounded-2xl p-8 md:p-12 max-w-lg w-full glow-primary"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>
              {(() => {
                const s = services[activeService];
                return (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <s.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
                    <p className="text-muted-foreground mt-4 leading-relaxed">{s.detail}</p>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
