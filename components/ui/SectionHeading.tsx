import Link from 'next/link';

export const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="text-sm font-sans font-bold tracking-widest uppercase text-primary shrink-0">
        {children}
      </h2>
      <div className="h-[2px] w-full bg-primary/20"></div>
    </div>
  );
};
