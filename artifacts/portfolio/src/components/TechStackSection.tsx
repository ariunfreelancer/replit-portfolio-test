import { motion } from "framer-motion";
import { Server, Monitor, Cloud, Database, Code2, Cpu } from "lucide-react";

const TECH_CATEGORIES = [
  {
    title: "Backend & APIs",
    icon: <Server className="w-6 h-6 text-primary" />,
    description: "Robust, scalable server architectures and databases.",
    skills: ["NestJS", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Firebase", "BaaS", "NoSQL", "REST API", "GraphQL"]
  },
  {
    title: "Frontend & UI",
    icon: <Monitor className="w-6 h-6 text-accent" />,
    description: "Polished, responsive, and interactive user interfaces.",
    skills: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS", "TypeScript", "Apollo", "TanStack", "MUI"]
  },
  {
    title: "Infrastructure & DevOps",
    icon: <Cloud className="w-6 h-6 text-emerald-400" />,
    description: "Reliable deployments and cloud management.",
    skills: ["GCP", "AWS", "CI/CD", "Docker", "DevOps"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function TechStackSection() {
  return (
    <section id="tech" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl md:mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Tech Stack & <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-muted-foreground"
          >
            I've built a number of SaaS apps and CMS platforms. Here's what I use to deliver robust, production-ready technical solutions.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {TECH_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm">{category.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-secondary/50 text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
