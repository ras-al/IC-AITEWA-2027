import { SectionHeading } from "@/components/ui/SectionHeading";
import { fees } from "@/data/fees";

export const metadata = {
  title: "Registration Fees & Guidelines | TKM Conference (IC-AITEWA 2027 / AITEWA)",
  description: "Registration fees, delegate categories, early-bird discounts, and publication inclusions for IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) at TKM College of Engineering.",
  keywords: [
    "tkm conference registration",
    "aithwa registration fees",
    "aitewa conference register",
    "tkmce conference fees",
  ],
};

export default function RegistrationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center">Registration & Publication</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-8">
          <SectionHeading>Registration Fees</SectionHeading>
          
          <div className="w-full overflow-x-auto border-4 border-foreground shadow-[12px_12px_0_0_#1C1712]">
            <table className="w-full text-left border-collapse bg-surface">
              <thead>
                <tr className="bg-foreground text-surface">
                  <th className="py-5 px-6 font-sans font-bold text-sm tracking-widest uppercase">Delegate Category</th>
                  <th className="py-5 px-6 font-sans font-bold text-sm tracking-widest uppercase border-l border-surface/20">Early-Bird</th>
                  <th className="py-5 px-6 font-sans font-bold text-sm tracking-widest uppercase border-l border-surface/20">Regular</th>
                </tr>
              </thead>
              <tbody>
                {fees.categories.map((row, i) => (
                  <tr key={i} className="border-b border-foreground/10 last:border-b-0 hover:bg-foreground/5 transition-colors">
                    <td className="py-5 px-6 font-sans font-bold text-lg">{row.category}</td>
                    <td className="py-5 px-6 font-sans text-lg text-primary font-bold border-l border-foreground/10">{row.earlyBird}</td>
                    <td className="py-5 px-6 font-sans text-lg border-l border-foreground/10">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="bg-primary text-surface p-8 shadow-[8px_8px_0_0_#1C1712] h-full">
            <h3 className="font-sans font-bold text-xl tracking-widest uppercase mb-6 text-surface border-b-2 border-surface/20 pb-4">
              What&apos;s Included?
            </h3>
            <ul className="space-y-4 font-sans text-base">
              <li className="flex items-start gap-3"><span className="font-bold">✓</span> Access to all technical sessions</li>
              <li className="flex items-start gap-3"><span className="font-bold">✓</span> Access to parallel tracks</li>
              <li className="flex items-start gap-3"><span className="font-bold">✓</span> Pre-conference workshops (if selected)</li>
              <li className="flex items-start gap-3"><span className="font-bold">✓</span> Official conference kit</li>
              <li className="flex items-start gap-3"><span className="font-bold">✓</span> Daily working lunches</li>
              <li className="flex items-start gap-3"><span className="font-bold">✓</span> Refreshment sessions</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="max-w-4xl mx-auto">
        <SectionHeading>Publication Pathways</SectionHeading>
        <div className="space-y-8">
          <div className="bg-surface border-l-4 border-foreground p-8 hover:border-primary transition-colors">
            <h3 className="font-serif text-2xl font-bold mb-3">Official Proceedings</h3>
            <p className="font-sans text-lg text-foreground/80">All accepted and registered papers will be published in the ISBN-registered official conference proceedings volume</p>
          </div>
          
          <div className="bg-surface border-l-4 border-foreground p-8 hover:border-primary transition-colors">
            <h3 className="font-serif text-2xl font-bold mb-3">SCI/Scopus-Indexed Journals</h3>
            <p className="font-sans text-lg text-foreground/80">Selected high-quality papers will be nominated for special issues of SCI/Scopus-indexed journals, subject to the journal&apos;s independent peer-review process</p>
          </div>

          {/* Hidden for now
          <div className="bg-surface border-l-4 border-foreground p-8 hover:border-primary transition-colors">
            <h3 className="font-serif text-2xl font-bold mb-3">Edited Volume (Springer)</h3>
            <p className="font-sans text-lg text-foreground/80">Extended book chapters will be considered for a curated edited volume with a major academic publisher (e.g., Springer), subject to final proposal approval</p>
          </div>
          */}
        </div>

        <div className="mt-12 bg-foreground text-surface p-8 text-center">
          <h4 className="font-sans font-bold text-primary tracking-widest uppercase mb-4">Ethics & Policy</h4>
          <p className="text-base font-sans text-surface/90 max-w-2xl mx-auto">
            All papers are rigorously screened for plagiarism and duplicate submissions. At least one author of an accepted paper must register and present at the conference for the paper to be included in the proceedings
          </p>
        </div>
      </section>
    </div>
  );
}
