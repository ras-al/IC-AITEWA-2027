import { SectionHeading } from "@/components/ui/SectionHeading";
import { dates } from "@/data/dates";

export const metadata = {
  title: "Call for Papers | IC-AITEWA 2027",
  description: "Submission guidelines, formats, and important dates for authors.",
};

export default function CallForPapersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">Call for Papers</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        
        {/* Left Column: Guidelines & Formats */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <SectionHeading>Submission Guidelines</SectionHeading>
            <div className="space-y-8">
              <div className="border-2 border-foreground p-8 bg-surface shadow-[8px_8px_0_0_#1C1712]">
                <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Double-Blind Peer Review</h3>
                <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                  Manuscripts must be fully anonymized. Do not include names, affiliations, or contact details on the title page or in file metadata. Prior-work references must be written in the third person.
                </p>
              </div>

              <div className="border-2 border-foreground/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Format & Length</h3>
                <ul className="font-sans text-lg space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>Length:</strong> Maximum 5,000 words or 10 pages including figures, tables, appendices, and references.</li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>File:</strong> Final PDF size must be ≤ 3 MB.</li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>Structure:</strong> Standard IMRaD (Introduction, Methods, Results, Discussion).</li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>Abstracts:</strong> ≤ 300 words, following an "hourglass" structure.</li>
                </ul>
              </div>

              <div className="bg-primary/10 border-l-8 border-primary p-6">
                <p className="font-sans font-bold text-lg text-primary mb-2">Important Notice for Authors</p>
                <p className="font-sans text-base text-foreground/90">
                  Authors are strictly advised to complete account setup and fill out all co-author/affiliation/bio metadata at least 48 hours before the submission deadline to avoid portal timeouts.
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading>Presentation Formats</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-t-4 border-foreground pt-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Oral Presentation</h3>
                <p className="font-sans text-foreground/80 mb-6 min-h-[60px]">Assigned to a parallel technical session based on the track.</p>
                <div className="bg-foreground/5 p-4 space-y-2 font-sans text-sm font-bold">
                  <div className="flex justify-between border-b border-foreground/10 pb-2">
                    <span className="text-foreground/60 uppercase tracking-wider">Duration</span>
                    <span>15 minutes</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-foreground/60 uppercase tracking-wider">Q&A</span>
                    <span>5 minutes</span>
                  </div>
                </div>
              </div>

              <div className="border-t-4 border-primary pt-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Poster / WIP</h3>
                <p className="font-sans text-foreground/80 mb-6 min-h-[60px]">For emerging research, project proposals, and early-stage prototypes.</p>
                <div className="bg-foreground/5 p-4 space-y-2 font-sans text-sm font-bold">
                  <div className="flex justify-between border-b border-foreground/10 pb-2">
                    <span className="text-foreground/60 uppercase tracking-wider">Word Count</span>
                    <span>Max 2,000 words</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span className="text-foreground/60 uppercase tracking-wider">Specs</span>
                    <span>Portrait A1</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Important Dates Timeline */}
        <div className="lg:col-span-5">
          <div className="bg-foreground text-surface p-10 shadow-[12px_12px_0_0_#C1502E] sticky top-28">
            <h3 className="font-sans font-bold text-xl tracking-widest uppercase mb-10 text-surface border-b-2 border-surface/20 pb-4">
              Important Dates
            </h3>
            
            <div className="space-y-10 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-[2px] before:bg-surface/20">
              {dates.map((date, idx) => (
                <div key={idx} className="relative flex items-start group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-foreground bg-primary shrink-0 absolute -left-[11px] top-1"></div>
                  <div className="pl-10">
                    <div className="font-sans font-bold text-primary text-lg mb-2">{date.target}</div>
                    <div className="font-sans text-base text-surface/90 leading-snug">{date.phase}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
