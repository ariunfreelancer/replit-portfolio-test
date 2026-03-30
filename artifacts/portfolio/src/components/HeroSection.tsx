import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-1/3 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Available for new projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
          >
            Full-Time Freelance <br />
            <span className="text-gradient">Fullstack Engineer</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Building SaaS products and web apps for international clients. I specialize in fullstack development, from designing robust backends to crafting polished user interfaces.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="mailto:ariunfreelancer@gmail.com"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-foreground text-background hover:bg-white hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~01d1b2c70f9682ca33?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-secondary border border-border text-foreground hover:bg-secondary/80 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20"
            >
              View Upwork Profile
              <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
