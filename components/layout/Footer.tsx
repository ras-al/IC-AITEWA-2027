import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-dark-section text-dark-foreground pt-12 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <img src="/tkm-favicon.png" alt="TKM Logo" className="h-12 w-auto object-contain bg-white rounded-full p-1" />
              <h3 className="font-serif text-2xl font-bold">IC-AITEWA 2027</h3>
            </div>
            <p className="font-sans text-sm leading-relaxed text-dark-foreground/80 mb-4 max-w-sm">
              International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation
            </p>
            <p className="font-sans text-sm font-bold text-primary mb-1">18–20 March 2027</p>
            <p className="font-sans text-sm text-dark-foreground/80">Department of Mechanical Engineering, TKMCE</p>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 text-dark-foreground/50">Organized By</h4>
            <p className="font-serif font-bold text-base mb-1">Department of Mechanical Engineering</p>
            <p className="font-sans text-sm leading-relaxed text-dark-foreground/80 mb-6">
              TKM College of Engineering, Kerala
            </p>
            
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-2 text-dark-foreground/50">In Association With</h4>
            <p className="font-serif font-bold text-base">Sophia University</p>
            <p className="font-sans text-sm text-dark-foreground/80">Tokyo, Japan</p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-xs font-bold tracking-widest uppercase mb-4 text-dark-foreground/50">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About the Conference</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-primary transition-colors">Call for Papers</Link></li>
              <li><Link href="/tracks" className="hover:text-primary transition-colors">Technical Tracks</Link></li>
              <li><Link href="/registration" className="hover:text-primary transition-colors">Registration Fees</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-6 border-t border-dark-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-dark-foreground/50">
            &copy; {new Date().getFullYear()} TKM College of Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
