import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Smartphone, FileText, Palette } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Custom websites and web applications built with modern technologies."
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android."
  },
  {
    icon: FileText,
    title: "Content Writing",
    desc: "Professional content that engages your audience and drives results."
  },
  {
    icon: Palette,
    title: "Graphic Design",
    desc: "Visual identity and design assets that make your brand stand out."
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with 3D Experience */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* 3D Floating Elements */}
        <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-primary/3 blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
            >
              Abion — A Beyond Innovation
            </motion.p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Technology That{" "}
              <span className="text-gradient">Transforms</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We build innovative, scalable, future-focused digital products that redefine possibilities.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow-primary"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-sm tracking-widest uppercase font-medium">About Abion</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                A Beyond <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
                We craft digital solutions that empower businesses to grow, scale, and lead in a technology-driven world.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 mt-8 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Preview Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-sm tracking-widest uppercase font-medium text-center">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-center">
              Our Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group p-6 rounded-xl border border-border/50 bg-card/50 hover-glow transition-all duration-500 hover:border-primary/30 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Abion Section */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-sm tracking-widest uppercase font-medium">Why Abion</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                Building Digital <span className="text-gradient">Foundations</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
                We don't just build software. We build digital foundations for ambitious ideas.
                At Abion, innovation meets responsibility, creativity meets precision, and your vision becomes reality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Call to Action Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-primary">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Ready to Build Something <span className="text-gradient">Extraordinary?</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                Let's discuss your next project and turn your vision into a scalable digital product.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 mt-8 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
