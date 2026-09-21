"use client";

import { useState } from 'react';
import Link from 'next/link';
import { CTAButton } from '../ui/CTAButton';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
        <div className="flex justify-between items-center h-20">
          
          {/* Left Brand: IC-AITEWA Logo Icon Only */}
          <div className="flex-shrink-0 flex items-center z-10">
            <Link href="/" className="flex items-center group" title="IC-AITEWA 2027">
              <img 
                src="/logo-icon.png" 
                alt="IC-AITEWA Logo" 
                className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-105" 
              />
            </Link>
          </div>
          
          {/* Centered Navigation */}
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

          {/* Right Action & Host Institution Logo (after submit button) */}
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

          {/* Mobile View: TKMCE Logo + Hamburger Button */}
          <div className="flex xl:hidden items-center gap-3 z-10">
            <Link 
              href="https://tkmce.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center mr-1"
              title="TKM College of Engineering, Kollam, Kerala, India"
            >
              <img 
                src="/tkm-favicon.png" 
                alt="TKM College of Engineering" 
                className="h-9 w-auto object-contain" 
              />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none p-2 border border-foreground/20 rounded"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden border-t-2 border-foreground/10 bg-surface shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 font-sans text-sm font-bold uppercase tracking-wide border-b border-foreground/5 ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <CTAButton href="/call-for-papers" className="w-full text-center">
                Submit Abstract
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
