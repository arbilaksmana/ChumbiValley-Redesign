import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Gameplay', href: '#gameplay' },
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Marketplace', href: '#' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-chumbi-dark/90 backdrop-blur-md border-white/10 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-gradient-to-br from-chumbi-teal to-chumbi-gold rounded-full flex items-center justify-center animate-pulse">
              <span className="text-xl">🌱</span>
           </div>
           <span className="text-2xl font-cinzel font-bold text-white tracking-widest group-hover:text-chumbi-gold transition-colors">
             CHUMBI<span className="text-chumbi-teal">VALLEY</span>
           </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-quicksand font-bold text-gray-300 hover:text-chumbi-teal uppercase tracking-widest transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-chumbi-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-gradient-to-r from-chumbi-teal to-chumbi-forest text-white font-cinzel font-bold px-6 py-2 rounded-full border border-white/20 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(45,212,191,0.5)]">
            Play Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-chumbi-teal transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-chumbi-dark/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-quicksand font-bold text-white hover:text-chumbi-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full bg-chumbi-teal text-chumbi-dark font-cinzel font-bold px-6 py-3 rounded-lg">
                Play Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;