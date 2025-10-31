import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const handleNavigation = (item: any) => {
    if (item.href) {
      navigate(item.href);
    } else if (item.id === "home") {
      navigate("/");
    } else {
      scrollToSection(item.id);
    }
    setIsOpen(false);
  };
  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "about",
    label: "About Us"
  }, {
    id: "projects",
    label: "Projects"
  }, {
    id: "lectures",
    label: "Lectures"
  }, {
    id: "store",
    label: "Store",
    href: "/store"
  }, {
    id: "contact",
    label: "Contact"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-glow">VerdEngineers</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => handleNavigation(item)} 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
                <ExternalLink size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => handleNavigation(item)} 
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-primary hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;