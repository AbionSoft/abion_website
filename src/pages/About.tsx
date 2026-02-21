import { motion } from "framer-motion";
import { Lightbulb, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Pushing boundaries with cutting-edge technology and creative solutions."
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "Transparent, honest, and reliable in everything we do."
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    desc: "Building solutions that grow with your business needs."
  },
  {
    icon: Users,
    title: "Client Commitment",
    desc: "Your success is our success. We're partners in your journey."
  },
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
              The Story Behind <span className="text-gradient">Abion</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed text-lg">
              A Beyond Innovation — Building the future of digital products from Kathmandu, Nepal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p className="text-primary text-sm tracking-widest uppercase font-medium">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                What is <span className="text-gradient">Abion?</span>
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Abion stands for <strong className="text-foreground">"A Beyond Innovation"</strong> — a name that embodies our commitment to pushing the boundaries of what's possible in technology.
                </p>
                <p>
                  Founded in Kathmandu, Nepal, AbionSoft Pvt. Ltd. is a software development company dedicated to creating innovative, scalable, and future-focused digital products. We believe technology should empower businesses to achieve their boldest ambitions.
                </p>
                <p>
                  Our mission is simple: to transform ideas into powerful digital solutions that drive real business value. Whether you're a startup with a vision or an established enterprise seeking innovation, we're here to turn your goals into reality.
                </p>
                <p>
                  At Abion, we don't just write code — we craft experiences, build systems, and create products that stand the test of time. Quality, innovation, and client success are at the heart of everything we do.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Our Vision Section */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-primary text-sm tracking-widest uppercase font-medium">Our Vision</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
                Technology That <span className="text-gradient">Transforms</span>
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed text-lg">
                We believe in building products that don't just solve problems — they redefine possibilities.
                Every line of code we write is driven by innovation and a commitment to excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Core Values */}
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-radial">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="glass rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-primary">
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                Ready to Start Your <span className="text-gradient">Project?</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto leading-relaxed">
                Let's discuss how we can help transform your ideas into powerful digital solutions.
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

export default About;
