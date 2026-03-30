import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#hero" className="font-display font-bold text-xl tracking-tight text-foreground">
            ariun<span className="text-primary">freelancer</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Fullstack Engineer & Technical Consultant
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="mailto:ariunfreelancer@gmail.com" 
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 text-center md:text-left">
        <p className="text-sm text-muted-foreground/60">
          © {currentYear} ariunfreelancer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
