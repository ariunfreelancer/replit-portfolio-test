import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/3 -left-64 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-64 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Text content */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for new projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
            >
              Full-Time <br />
              Freelance <br />
              <span className="text-gradient">Fullstack</span> <br />
              <span className="text-gradient">Engineer</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl"
            >
              Building SaaS products and web apps for international clients. I
              specialize in fullstack development — from robust backends to
              polished user interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:ariunfreelancer@gmail.com"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-foreground text-background hover:bg-white hover:-translate-y-1 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01d1b2c70f9682ca33?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-secondary border border-border text-foreground hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                Upwork Profile
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right: Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0 w-72 md:w-80 lg:w-96"
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl scale-105" />

              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="ariunfreelancer"
                  className="w-full h-auto object-cover mix-blend-lighten"
                />
                {/* Subtle bottom fade to blend with dark bg */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/60 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2.5 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  5+
                </div>
                <div>
                  <p className="text-xs text-muted-foreground leading-none mb-0.5">
                    Years of
                  </p>
                  <p className="text-sm font-semibold leading-none">
                    Experience
                  </p>
                </div>
              </motion.div>

              {/* Floating SaaS badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.75 }}
                className="absolute -top-4 -right-4 flex items-center gap-2 bg-card border border-border rounded-2xl px-4 py-3 shadow-xl"
              >
                <span className="text-lg">🚀</span>
                <div>
                  <p className="text-xs text-muted-foreground leading-none mb-0.5">
                    Built
                  </p>
                  <p className="text-sm font-semibold leading-none">
                    Fullstack Web Apps
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
