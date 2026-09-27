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

              {/* Format & Length hidden for now */}

              <div className="border-2 border-foreground/20 p-8">
                <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">Submission Requirements</h3>
                <ul className="font-sans text-lg space-y-4 text-foreground/80">
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>Length:</strong> Maximum 2000 words or Maximum 6 pages including figures, tables, appendices, and references.</li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>File:</strong> Final PDF size must be ≤ 3 MB.</li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>Structure:</strong> Standard IMRaD (Introduction, Methods, Results, Discussion).</li>
                  <li className="flex items-start gap-3"><span className="text-primary font-bold">▪</span> <strong>Abstracts:</strong> ≤ 300 words, following an &quot;hourglass&quot; structure.</li>
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

              <div className="mt-8 border-2 border-primary/20 bg-surface p-8 shadow-[8px_8px_0_0_#C1502E] flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="shrink-0 w-24 h-24 p-2 bg-background border border-foreground/15 rounded-lg flex items-center justify-center">
                  <img src="/black_ai_aictc.png" alt="IC-AITEWA Seal" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="flex-1 w-full">
                  <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Download Templates</h3>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="inline-flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest text-primary hover:text-primary-hover border-b border-primary/20 pb-2">
                      Manuscript Template (Word)
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest text-primary hover:text-primary-hover border-b border-primary/20 pb-2">
                      Presentation Template (PPTX)
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 font-sans font-bold text-sm uppercase tracking-widest text-primary hover:text-primary-hover pb-2">
                      Poster Template (PDF)
                    </a>
                  </div>
                </div>
              </div>

          {/* Presentation Formats hidden for now */}
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
            
            <div className="mt-8 pt-6 border-t border-surface/20">
              <p className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-2">Publication</p>
              <p className="font-sans text-sm text-surface/90 leading-relaxed">
                Accepted papers will be published in peer-reviewed journals and conference proceedings.
              </p>
            </div>
          </div>
        </div>

      </div>

      <p className="font-sans text-xs text-foreground/50 text-center mt-16 max-w-3xl mx-auto leading-relaxed">The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
    </div>
  );
}
