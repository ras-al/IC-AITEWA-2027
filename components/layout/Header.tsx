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
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-8">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <img src="/tkm-favicon.png" alt="TKM Logo" className="h-10 w-auto object-contain" />
              <span className="font-serif font-bold text-xl tracking-tight hidden sm:block">
                IC-AITEWA <span className="text-primary">2027</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden xl:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`font-sans text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-foreground'}`}
              >
                {link.name}
              </Link>
            ))}
            <CTAButton href="/call-for-papers" className="px-4 py-2 text-xs">
              Submit Abstract
            </CTAButton>
          </nav>

          <div className="flex xl:hidden items-center">
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
