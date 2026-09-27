"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CTAButton } from '../ui/CTAButton';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Tracks', href: '/tracks' },
    { name: 'Call for Papers', href: '/call-for-papers' },
    { name: 'Committee', href: '/committee' },
    { name: 'Registration', href: '/registration' },
    { name: 'Venue', href: '/venue' },
    { name: 'Accommodation', href: '/accommodation' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b-2 border-foreground shadow-sm">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Left Brand: IC-AITEWA Logo Icon */}
          <div className="flex-shrink-0 flex items-center z-10">
            <Link href="/" className="flex items-center group" title="IC-AITEWA 2027">
              <img 
                src="/logo-icon.png" 
                alt="IC-AITEWA Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform duration-200 group-hover:scale-105" 
              />
            </Link>
          </div>
          
          {/* Centered Navigation — Desktop */}
          <nav className="hidden xl:flex gap-4 2xl:gap-7 items-center justify-center flex-1 mx-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-sans text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors py-1 hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action — Desktop */}
          <div className="hidden xl:flex items-center gap-4 z-10 flex-shrink-0">
            <CTAButton href="/call-for-papers" className="px-5 py-2.5 text-xs whitespace-nowrap">
              Submit Abstract
            </CTAButton>
            <Link 
              href="https://tkmce.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group/tkm pl-3 border-l-2 border-foreground/15"
              title="TKM College of Engineering, Kollam, Kerala, India"
            >
              <img 
                src="/tkm-favicon.png" 
                alt="TKM College of Engineering" 
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover/tkm:scale-105" 
              />
            </Link>
          </div>

          {/* Mobile: TKMCE Logo + Hamburger */}
          <div className="flex xl:hidden items-center gap-2 sm:gap-3 z-10">
            <Link 
              href="https://tkmce.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
              title="TKM College of Engineering, Kollam, Kerala, India"
            >
              <img 
                src="/tkm-favicon.png" 
                alt="TKM College of Engineering" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none p-1.5 sm:p-2 border border-foreground/20 rounded"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="xl:hidden fixed inset-0 top-[calc(4rem+2px)] sm:top-[calc(5rem+2px)] bg-surface z-40 overflow-y-auto">
          <div className="px-4 pt-2 pb-8">
            <nav className="space-y-0">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3.5 font-sans text-sm sm:text-base font-bold uppercase tracking-wide border-b border-foreground/5 transition-colors ${pathname === link.href ? 'text-primary bg-primary/5' : 'text-foreground hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-6 px-3">
              <CTAButton href="/call-for-papers" className="w-full text-center py-3.5">
                Submit Abstract
              </CTAButton>
            </div>

            {/* Mobile footer info */}
            <div className="mt-8 px-3 pt-6 border-t border-foreground/10">
              <p className="font-sans text-xs text-foreground/60 leading-relaxed">
                Department of Mechanical Engineering, TKM College of Engineering, Kollam, Kerala, India
              </p>
              <p className="font-sans text-xs font-bold text-primary mt-1">
                18–20 March 2027
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
