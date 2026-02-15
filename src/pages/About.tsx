import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users, Shield, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Pushing boundaries with every product we build." },
  { icon: Users, title: "Collaboration", desc: "Working together to create exceptional outcomes." },
  { icon: Shield, title: "Integrity", desc: "Transparent, honest, and reliable in everything we do." },
  { icon: Zap, title: "Excellence", desc: "Delivering quality that exceeds expectations." },
];

const timeline = [
  { year: "2020", title: "Founded", desc: "Abion Labs was born with a vision to transform digital landscapes." },
  { year: "2021", title: "First Product", desc: "Launched our first software product serving local businesses." },
  { year: "2023", title: "Expansion", desc: "Grew our team and client base across South Asia." },
  { year: "2025", title: "Global Reach", desc: "Serving clients worldwide with scalable digital solutions." },
];

const About = () => {
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
            <p className="text-primary text-sm tracking-widest uppercase font-medium">About Us</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-2 max-w-2xl">
              The Story Behind <span className="text-gradient">Abion Labs</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed text-lg">
              We're a team of passionate engineers and designers building the next generation of digital products from the heart of Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-sm tracking-widest uppercase font-medium">Our Journey</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">How We Got Here</h2>
          </ScrollReveal>

          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border/50" />
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                    <h3 className="font-display font-semibold text-foreground text-xl mt-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 glow-primary" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="p-8 rounded-xl border border-border/50 bg-card/50 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  To empower businesses with innovative, reliable, and scalable technology solutions that drive growth and create lasting impact in the digital world.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="p-8 rounded-xl border border-border/50 bg-card/50 h-full">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  To be a globally recognized technology company known for building innovative products that redefine how businesses and people interact with technology.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-sm tracking-widest uppercase font-medium text-center">Core Values</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-center">What Drives Us</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="group p-6 rounded-xl border border-border/50 bg-card/50 hover-glow transition-all duration-500 hover:border-primary/30 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Philosophy */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-sm tracking-widest uppercase font-medium">Our Philosophy</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Why We Exist</h2>
              <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
                We exist because we believe technology should be accessible, beautiful, and transformative. 
                Every product we build is a step toward a smarter, more connected world — 
                starting from the vibrant tech scene of Kathmandu to the global stage.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
