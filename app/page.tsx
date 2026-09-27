import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCallout } from "@/components/ui/StatCallout";
import { dates } from "@/data/dates";
import { tracks } from "@/data/tracks";
import { Countdown } from "@/components/ui/Countdown";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark-section text-dark-foreground border-b-2 border-foreground min-h-[calc(100vh-5rem)] flex items-center justify-center py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Cinematic Dark Overlays */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <picture>
            <source media="(max-width: 767px)" srcSet="/hero_mobile.png" />
            <source media="(min-width: 768px)" srcSet="/hero.png" />
            <img
              src="/hero.png"
              alt="IC-AITEWA 2027 Conference Theme - Energy, Water and Automation"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          <div className="absolute inset-0 bg-[#0F0D0B]/50 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0D0B]/90 via-[#0F0D0B]/70 to-[#0F0D0B]/95" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2.5 p-2 sm:py-1 sm:px-1 sm:pr-3.5 bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-md mb-3 sm:mb-4 max-w-[95vw] sm:max-w-none">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-white font-sans font-bold text-[11px] tracking-wider uppercase shadow-sm shrink-0">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              18–20 March 2027
            </span>
            <p className="text-white/90 font-sans font-medium text-[11px] sm:text-xs tracking-normal sm:tracking-wide text-center py-0.5 px-2 sm:px-0 leading-relaxed">
              <svg className="w-3.5 h-3.5 text-white/60 inline-block align-text-bottom mr-1 -mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Department of Mechanical Engineering, TKMCE, Kollam, Kerala, India</span>
            </p>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight mb-3 sm:mb-4 text-white drop-shadow-sm max-w-4xl">
            International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation <br />
            <span className="text-primary mt-1 inline-block">(IC-AITEWA 2027)</span>
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-white/80 font-normal mb-5 sm:mb-6 max-w-2xl mx-auto">
            Advancing Sustainable Energy, Water Security and Smart Automation through Intelligent Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <CTAButton href="/call-for-papers" variant="primary" className="py-2.5 px-6 text-xs sm:text-sm">Submit Abstract</CTAButton>
            <CTAButton href="/registration" variant="outlineLight" className="py-2.5 px-6 text-xs sm:text-sm">Register Now</CTAButton>
          </div>
          <Countdown targetDate="2027-03-18T00:00:00" variant="dark" className="mt-5 sm:mt-6 mb-1" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <SectionHeading>Conference Overview</SectionHeading>
            <div className="prose prose-lg prose-neutral max-w-none font-sans text-foreground/90 text-justify">
              <p>
                The convergence of artificial intelligence, intelligent systems, cyber-physical automation, and digital manufacturing is reshaping industry, energy grids, and water infrastructure.
              </p>
              <p>
                These technologies are positioned as key tools for addressing climate change, stabilizing decentralized renewable energy grids, water scarcity, and optimizing industrial manufacturing. IC-AITEWA 2027 aims to be a globally recognized platform bringing together researchers, academicians, industry practitioners, and policymakers to exchange knowledge and translate research into scalable, commercialized solutions.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <StatCallout
                stat="March 17, 2027"
                description="Pre-conference workshops offering hands-on sessions in emerging intelligent technologies."
              />
              <StatCallout
                stat="Publication"
                description="Accepted papers will be published in peer-reviewed journals and conference proceedings."
              />
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-surface border-2 border-foreground p-8 relative shadow-[8px_8px_0_0_#1C1712]">
              <h3 className="font-sans font-bold text-lg tracking-widest uppercase mb-8 text-foreground border-b-2 border-foreground/20 pb-4">
                Important Dates
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-foreground/20 before:to-transparent">
                {dates.map((date, idx) => (
                  <div key={idx} className="relative flex items-start group">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-surface bg-primary shadow shrink-0 absolute -left-[11px] top-0"></div>
                    <div className="w-full pl-8">
                      <div className="font-sans font-bold text-primary text-base mb-1">{date.target}</div>
                      <div className="font-sans text-sm text-foreground/80 leading-snug">{date.phase}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/call-for-papers" className="inline-block font-sans text-sm font-bold tracking-wide uppercase text-surface bg-foreground px-6 py-3 hover:bg-primary transition-colors">
                  View Full Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section (Hidden for now)
      <section className="bg-surface py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Keynote Speakers / Delegates</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mt-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col border-2 border-foreground bg-surface p-8 shadow-[8px_8px_0_0_#1C1712] h-full items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-32 h-32 bg-foreground/10 rounded-full mb-6 border-4 border-surface shadow-md overflow-hidden">
                  <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-primary">TBA</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold leading-snug text-foreground mb-2">To Be Announced</h3>
                <p className="font-sans text-sm font-bold uppercase tracking-widest text-primary mb-4">Keynote Speaker</p>
                <p className="font-sans text-base text-foreground/80">Details regarding the speaker's organization and session topic will be updated soon.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Tracks Section */}
      <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-foreground/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading>Technical Tracks</SectionHeading>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
            {tracks.map((track) => (
              <div key={track.code} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] flex flex-col items-center text-center border-2 border-foreground bg-surface p-8 shadow-[8px_8px_0_0_#1C1712] hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6">
                  <span className="inline-block bg-primary text-surface font-sans text-sm font-bold px-3 py-1 uppercase tracking-widest">
                    {track.code}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold leading-snug text-foreground">{track.focus}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <CTAButton href="/tracks" variant="outline">
              Explore Detailed Scopes
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Brochure Section */}
      <section className="bg-surface py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-foreground/10">
        <div className="max-w-4xl mx-auto bg-background border-2 border-foreground p-8 sm:p-12 shadow-[8px_8px_0_0_#1C1712] flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0 w-36 sm:w-44 p-4 bg-surface border-2 border-foreground/20 rounded-xl shadow-sm flex items-center justify-center">
            <img
              src="/black_ai_aictc.png"
              alt="IC-AITEWA 2027 Publication Seal"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <span className="inline-block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2">Official Document</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">Download Conference Brochure</h3>
            <p className="font-sans text-base sm:text-lg text-foreground/80 mb-6 leading-relaxed">
              Get comprehensive details about conference themes, submission guidelines, important dates, and organizing committees in our official brochure.
            </p>
            <CTAButton href="/IC-AITEWA.pdf" variant="outline" className="border-foreground hover:bg-foreground hover:text-surface px-8 py-3">
              Download Brochure (PDF)
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
