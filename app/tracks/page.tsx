import { tracks } from "@/data/tracks";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata = {
  title: "Technical Tracks | IC-AITEWA 2027",
  description: "Detailed scope of the five technical tracks for IC-AITEWA 2027.",
};

export default function TracksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">Technical Tracks</h1>
      <p className="font-sans text-xl md:text-2xl leading-relaxed text-foreground/80 mb-20 max-w-4xl mx-auto text-center">
        IC-AITEWA 2027 accepts high-quality original research papers across five primary technical tracks focusing on the intersection of intelligence and sustainable engineering.
      </p>

      <div className="mb-24 space-y-16">
        {tracks.map((track) => (
          <div key={track.code} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t-4 border-foreground/10 pt-12 hover:border-primary transition-colors duration-300">
            <div className="md:col-span-3 lg:col-span-3">
              <span className="inline-block bg-primary text-surface font-sans text-xl font-bold px-6 py-3 uppercase tracking-widest shadow-[6px_6px_0_0_#1C1712]">
                {track.code}
              </span>
            </div>
            <div className="md:col-span-9 lg:col-span-9">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">{track.focus}</h2>
              <details className="group">
                <summary className="font-sans text-sm font-bold tracking-widest uppercase text-foreground/50 mb-4 border-b-2 border-foreground/10 pb-2 cursor-pointer hover:text-primary transition-colors">
                  Detailed Scope <span className="inline-block transition-transform group-open:rotate-180">▼</span>
                </summary>
                <ul className="font-sans text-lg md:text-xl leading-relaxed text-foreground/90 bg-surface border-l-4 border-primary pl-6 py-2 space-y-2 mt-4">
                  {track.scope.split(', ').map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span> {item}
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-foreground text-surface p-12 md:p-16 text-center max-w-5xl mx-auto shadow-[16px_16px_0_0_#C1502E]">
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Submit?</h3>
        <p className="font-sans text-xl mb-10 max-w-2xl mx-auto text-surface/80">
          Review the submission guidelines and format your paper before submission.
        </p>
        <CTAButton href="/call-for-papers" className="!bg-primary !border-primary hover:!bg-primary-hover px-8 py-4 text-base">
          View Submission Guidelines
        </CTAButton>
      </div>
    </div>
  );
}
