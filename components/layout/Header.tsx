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
    <header className="sticky top-0 z-50 w-full bg-surface border-b-2 border-foreground">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center z-10">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo-icon.png" 
                alt="IC-AITEWA Logo" 
                className="h-11 w-11 object-contain transition-transform duration-200 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl tracking-tight leading-none text-foreground whitespace-nowrap">
                  IC-AITEWA <span className="text-primary ml-0.5">2027</span>
                </span>
                <span className="font-sans text-[9px] uppercase tracking-wider text-foreground/60 font-semibold mt-1 hidden sm:block whitespace-nowrap">
                  TKMCE Kollam
                </span>
              </div>
            </Link>
          </div>
          
          {/* Centered Navigation */}
          <nav className="hidden xl:flex gap-4 2xl:gap-6 items-center mx-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-sans text-[11px] xl:text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action & Host Institution Logo */}
          <div className="hidden xl:flex items-center gap-4 z-10">
            <Link 
              href="https://tkmce.ac.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 group/tkm"
              title="TKM College of Engineering, Kollam"
            >
              <img 
                src="/tkm-favicon.png" 
                alt="TKM College of Engineering" 
                className="h-9 w-auto object-contain opacity-85 group-hover/tkm:opacity-100 transition-opacity" 
              />
            </Link>
            <CTAButton href="/call-for-papers" className="px-5 py-2 text-[10px] xl:text-xs whitespace-nowrap">
              Submit Abstract
            </CTAButton>
          </div>

          <div className="flex xl:hidden items-center z-10">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground focus:outline-none p-2"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden border-t border-foreground/10 bg-surface">
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
              <CTAButton href="/call-for-papers" className="w-full">
                Submit Abstract
              </CTAButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
