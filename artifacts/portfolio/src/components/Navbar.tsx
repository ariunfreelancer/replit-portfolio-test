import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#hero" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a 
          href="#hero" 
          className="font-display font-bold text-xl tracking-tight text-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
        >
          ariun<span className="text-primary">freelancer</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:ariunfreelancer@gmail.com"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl py-4 px-6 flex flex-col gap-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:ariunfreelancer@gmail.com"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 text-base font-medium rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </header>
  );
}
