import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Venue & Travel | IC-AITEWA 2027",
  description: "Location, travel instructions, and accommodation for IC-AITEWA 2027.",
};

export default function VenuePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Venue & Travel</h1>
      <div className="flex justify-center mb-20 text-center">
        <p className="inline-block bg-primary text-surface font-sans text-lg md:text-xl font-bold px-8 py-4 shadow-[8px_8px_0_0_#1C1712]">
          TKM College of Engineering<br/>
          Karicode, Kollam - 691005<br/>
          Kerala, India
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <SectionHeading>How to Reach</SectionHeading>
          
          <div className="space-y-6">
            <div className="bg-surface border-2 border-foreground p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-foreground text-surface px-3 py-1 font-sans text-sm font-bold tracking-widest uppercase">Air</span>
                <h3 className="font-serif text-2xl font-bold">Trivandrum (TRV) & Cochin (COK)</h3>
              </div>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Trivandrum Int. Airport is approx. 65 km from campus. Cochin Int. Airport is approx. 175 km away. Both are well connected globally. Taxis are readily available to Kollam.
              </p>
            </div>

            <div className="bg-surface border-2 border-foreground p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-foreground text-surface px-3 py-1 font-sans text-sm font-bold tracking-widest uppercase">Rail</span>
                <h3 className="font-serif text-2xl font-bold">Kollam Junction (QLN)</h3>
              </div>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Located approx. 6 km from venue. A major stop on the Indian Railways network, connecting all major cities.
              </p>
            </div>

            <div className="bg-surface border-2 border-foreground p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-foreground text-surface px-3 py-1 font-sans text-sm font-bold tracking-widest uppercase">Road</span>
                <h3 className="font-serif text-2xl font-bold">Local Transport</h3>
              </div>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Campus adjoins NH-744. Taxis, auto-rickshaws, and public buses seamlessly connect Kollam city and stations.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading>Accommodation</SectionHeading>
          
          <div className="space-y-6">
            <div className="bg-foreground text-surface p-8 shadow-[8px_8px_0_0_#C1502E]">
              <h3 className="font-serif text-2xl font-bold mb-4 border-b border-surface/20 pb-4">On-Campus Lodging</h3>
              <div className="space-y-4 font-sans text-lg text-surface/90">
                <p><strong className="text-primary">TKM Guest House:</strong> Limited availability for academic delegates. Advance reservation is strictly required.</p>
                <p><strong className="text-primary">Hostels:</strong> Housing may be arranged for registered research scholars upon prior request.</p>
              </div>
            </div>

            <div className="bg-surface border-2 border-foreground p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">Off-Campus Hotels</h3>
              <p className="font-sans text-lg text-foreground/80 leading-relaxed">
                Standard and premium three-star hotels are available in Kollam city (10–15 mins from campus). The organizing committee runs a scheduled shuttle service connecting partner hotels to the venue.
              </p>
            </div>

            {/* International Delegates Support Session Hidden for now */}
          </div>
        </div>

      </div>

      <div className="mt-20">
        <SectionHeading>Campus Map</SectionHeading>
        <div className="border-4 border-foreground shadow-[12px_12px_0_0_#1C1712] overflow-hidden bg-surface">
          <iframe 
            src="https://maps.google.com/maps?q=TKM%20College%20of%20Engineering,%20Kollam&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="TKM College of Engineering Map"
            className="w-full h-[400px] md:h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
