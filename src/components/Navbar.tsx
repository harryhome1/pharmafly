
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="font-bold text-2xl text-gradient">AushadhAI</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-aushadh-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-aushadh-600 transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-aushadh-600 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium text-foreground/80 hover:text-aushadh-600 transition-colors">
            Testimonials
          </a>
          <div className="pl-4">
            <Button className="bg-aushadh-500 hover:bg-aushadh-600 text-white rounded-full px-6">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md animate-fade-in-down">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-aushadh-600 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 hover:text-aushadh-600 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-foreground/80 hover:text-aushadh-600 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-aushadh-600 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button 
              className="bg-aushadh-500 hover:bg-aushadh-600 text-white rounded-full w-full mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
