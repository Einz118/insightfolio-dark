import { useState } from "react";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/lectures", label: "Lectures" },
    { path: "/contact", label: "Contact" },
  ];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Dropdown Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium">
                <span>Sections</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/" className="w-full cursor-pointer">Home</Link>
                </DropdownMenuItem>
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full cursor-pointer">{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-xl font-bold text-glow">VerdEngineers</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              <a href="https://linkedin.com/company/verdengineers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors">
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
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a href="https://linkedin.com/company/verdengineers" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-primary hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;