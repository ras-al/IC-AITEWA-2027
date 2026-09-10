import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'light';
  className?: string;
};

export const CTAButton: React.FC<CTAButtonProps> = ({ href, children, variant = 'primary', className = '' }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-sans font-bold text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-200 border-2";
  
  const variants = {
    primary: "bg-primary border-primary text-white hover:bg-primary-hover hover:border-primary-hover",
    secondary: "bg-foreground border-foreground text-surface hover:bg-foreground/80 hover:border-foreground/80",
    outline: "bg-transparent border-primary text-primary hover:bg-primary hover:text-surface",
    outlineLight: "bg-transparent border-white/80 text-white hover:bg-white hover:text-foreground backdrop-blur-sm",
    light: "bg-surface border-surface text-foreground hover:bg-surface/90 hover:border-surface/90"
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};
