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
      <section className="bg-surface border-b-2 border-foreground pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="font-sans font-bold text-sm tracking-widest uppercase text-primary mb-6">
            18–20 March 2027 • Department of Mechanical Engineering, TKMCE
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation (IC-AITEWA 2027)
          </h1>
          <p className="font-sans text-xl leading-relaxed text-foreground/80 mb-10 max-w-3xl mx-auto">
            Advancing Sustainable Energy, Water Security and Smart Automation through Intelligent Technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/call-for-papers">Submit Abstract</CTAButton>
            <CTAButton href="/registration" variant="secondary">Register Now</CTAButton>
          </div>
          <Countdown targetDate="2027-03-18T00:00:00" />
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
            
            <StatCallout 
              stat="March 17, 2027"
              description="Pre-conference workshops offering hands-on sessions in emerging intelligent technologies."
            />
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
      <section className="bg-surface py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-foreground/10 text-center">
        <h3 className="font-serif text-3xl font-bold mb-6">Download Conference Brochure</h3>
        <p className="font-sans text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">Get all the details about the conference themes, important dates, and submission guidelines in our comprehensive brochure.</p>
        <CTAButton href="/IC-AITEWA.pdf" variant="outline" className="border-foreground hover:bg-foreground hover:text-surface px-8 py-3">
          Download Brochure
        </CTAButton>
      </section>
    </>
  );
}
