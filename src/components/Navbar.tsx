
import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
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
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg',
      isScrolled ? 'bg-white/70 shadow-sm py-3' : 'bg-transparent py-5'
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-2xl font-serif font-semibold text-foreground z-10">
          <span className="text-gradient">Nikola Mandic</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover-link text-sm font-medium text-foreground">About</a>
          <a href="#services" className="hover-link text-sm font-medium text-foreground">Services</a>
          <a href="#contact" className="hover-link text-sm font-medium text-foreground">Contact</a>
          <Button variant="gradient" size="sm">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden z-10 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          'fixed inset-0 bg-background/95 backdrop-blur-md transition-all duration-300 flex flex-col items-center justify-center md:hidden',
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}>
          <nav className="flex flex-col items-center space-y-8">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium hover:text-web3-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium hover:text-web3-primary transition-colors"
            >
              Services
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl font-medium hover:text-web3-primary transition-colors"
            >
              Contact
            </a>
            <Button 
              variant="gradient" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
