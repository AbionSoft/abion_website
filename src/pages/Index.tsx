import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Smartphone, FileText, Palette, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { HeroAnimation } from "./HeroAnimation";

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
      <section className="relative bg-[#0d0f16] text-white selection:bg-blue-500/30 font-sans overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[80px] left-1/4 w-[288px] h-[288px] bg-[#3c83f6]/5 blur-[32px] rounded-full" />
          <div className="absolute bottom-[80px] right-1/4 w-[384px] h-[384px] bg-[#765eed]/5 blur-[32px] rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-[256px] h-[256px] bg-white/5 blur-[32px] rounded-full opacity-20" />
        </div>

        {/* Hero Content Container */}
        <div className="container mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20 relative min-h-[calc(100vh-5rem)]">
          {/* Left Side: Content */}
          <div className="flex-1 flex flex-col items-start gap-8 z-10 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[#3c83f6] text-xs font-semibold tracking-[2px] uppercase font-['Inter']"
            >
              Abion — A Beyond Innovation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] font-['Space_Grotesk'] text-[#e7e9ef]"
            >
              Technology That{" "}
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#3c83f6] to-[#765eed]">
                Transforms
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#818898] text-base lg:text-lg leading-relaxed max-w-xl"
            >
              We build innovative, scalable, and future-focused digital products that redefine possibilities and drive business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="group relative px-8 py-3.5 bg-[#3c83f6] rounded-xl text-[#0d0f16] font-semibold text-sm transition-all hover:shadow-[0_0_30px_-5px_rgba(60,131,246,0.6)] hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <Link
                to="/services"
                className="px-8 py-3.5 border border-[#272a35] rounded-xl text-[#e7e9ef] font-semibold text-sm hover:bg-[#272a35]/50 transition-colors active:scale-95"
              >
                View Services
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-[550px] h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-center relative z-10"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 lg:py-28 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary text-xs tracking-[2px] uppercase font-semibold">About Abion</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                A Beyond <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed text-base lg:text-lg">
                We craft digital solutions that empower businesses to grow, scale, and lead in a technology-driven world.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 mt-8 rounded-lg border-2 border-border text-foreground font-semibold text-sm hover:bg-secondary hover:border-primary/50 transition-all"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Preview Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary text-xs tracking-[2px] uppercase font-semibold">What We Do</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
                Our Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="group p-8 rounded-xl border border-border/50 bg-card/50 hover-glow transition-all duration-500 hover:border-primary/30 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Abion Section */}
      <section className="py-20 lg:py-28 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary text-xs tracking-[2px] uppercase font-semibold">Why Abion</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Building Digital <span className="text-gradient">Foundations</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed text-base lg:text-lg">
                We don't just build software. We build digital foundations for ambitious ideas.
                At Abion, innovation meets responsibility, creativity meets precision, and your vision becomes reality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Call to Action Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-12 md:p-16 text-center max-w-4xl mx-auto glow-primary">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Build Something <span className="text-gradient">Extraordinary?</span>
              </h2>
              <p className="text-muted-foreground mt-6 text-base lg:text-lg max-w-2xl mx-auto">
                Let's discuss your next project and turn your vision into a scalable digital product.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-4 mt-10 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
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
