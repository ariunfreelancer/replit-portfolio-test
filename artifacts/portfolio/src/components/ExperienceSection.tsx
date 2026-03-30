import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

const HIGHLIGHTS = [
  "Built and shipped multiple SaaS products for international markets.",
  "End-to-end development: from architecture and backend APIs to frontend UI.",
  "Proficient in design, full-stack development, and technical consulting.",
  "Open to freelance projects, long-term contracts, and team augmentation."
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Experience</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              4+ Years of <br/>
              <span className="text-accent">Full-Stack Engineering</span>
            </h2>
            
            <ul className="space-y-5 mb-10">
              {HIGHLIGHTS.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden"
          >
            {/* Soft inner glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-8 text-lg">
                I'm currently accepting new freelance opportunities and consulting roles.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:ariunfreelancer@gmail.com"
                  className="group flex items-center justify-between p-5 rounded-2xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email Me</p>
                    <p className="text-lg font-medium text-foreground">ariunfreelancer@gmail.com</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </a>
                
                <a 
                  href="https://www.upwork.com/freelancers/~01d1b2c70f9682ca33?mp_source=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl bg-[#14a800]/10 border border-[#14a800]/20 hover:border-[#14a800]/50 transition-all duration-300"
                >
                  <div>
                    <p className="text-sm text-[#14a800]/80 mb-1">Hire me on Upwork</p>
                    <p className="text-lg font-medium text-[#14a800]">View Verified Profile</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center group-hover:bg-[#14a800] group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-[#14a800] group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
