import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Accommodation | IC-AITEWA 2027",
  description: "Accommodation, transport, and travel details for IC-AITEWA 2027.",
};

export default function AccommodationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">Accommodation & Travel</h1>
      <p className="font-sans text-xl leading-relaxed text-foreground/80 mb-20 max-w-4xl mx-auto text-center">
        Plan your stay in Kollam. We have curated a list of comfortable accommodations and travel tips to ensure a pleasant experience.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div>
          <SectionHeading>Suggested Hotels</SectionHeading>

          <div className="space-y-6">
            <div className="bg-surface border-2 border-foreground p-8 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-bold mb-2">The Quilon Beach Hotel</h3>
              <p className="font-sans font-bold text-sm text-primary uppercase tracking-widest mb-4">⭐⭐⭐⭐⭐ • Premium</p>
              <ul className="font-sans text-base space-y-2 text-foreground/80 mb-4">
                <li>• Approx. ₹4,500 - ₹6,000 per night</li>
                <li>• 12 km from TKM College</li>
                <li>• Beachfront property with excellent amenities</li>
              </ul>
            </div>

            <div className="bg-surface border-2 border-foreground p-8 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-bold mb-2">Hotel Sea Pearl</h3>
              <p className="font-sans font-bold text-sm text-primary uppercase tracking-widest mb-4">⭐⭐⭐⭐ • Standard</p>
              <ul className="font-sans text-base space-y-2 text-foreground/80 mb-4">
                <li>• Approx. ₹2,500 - ₹3,500 per night</li>
                <li>• 8 km from TKM College</li>
                <li>• Comfortable stay in city center</li>
              </ul>
            </div>

            <div className="bg-surface border-2 border-foreground p-8 hover:border-primary transition-colors">
              <h3 className="font-serif text-2xl font-bold mb-2">Nani Hotels & Resorts</h3>
              <p className="font-sans font-bold text-sm text-primary uppercase tracking-widest mb-4">⭐⭐⭐ • Budget Friendly</p>
              <ul className="font-sans text-base space-y-2 text-foreground/80 mb-4">
                <li>• Approx. ₹1,500 - ₹2,500 per night</li>
                <li>• 10 km from TKM College</li>
                <li>• Clean rooms and great service</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <SectionHeading>On-Campus Lodging</SectionHeading>
          <div className="bg-foreground text-surface p-8 shadow-[8px_8px_0_0_#C1502E] mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4 border-b border-surface/20 pb-4">TKM Facilities</h3>
            <div className="space-y-4 font-sans text-lg text-surface/90">
              <p><strong className="text-primary">TKM Guest House:</strong> Limited availability for academic delegates. Advance reservation is strictly required.</p>
              <p><strong className="text-primary">Hostels:</strong> Housing may be arranged for registered research scholars upon prior request. Shared rooms start at ₹500/night.</p>
            </div>
          </div>

          <SectionHeading>Local Transport</SectionHeading>
          <div className="bg-surface border-2 border-foreground p-8 mb-12">
            <h3 className="font-serif text-2xl font-bold mb-4">Taxi & Auto Fares</h3>
            <ul className="font-sans text-base space-y-4 text-foreground/80">
              <li className="flex justify-between border-b border-foreground/10 pb-2">
                <span>Trivandrum Airport (TRV) to TKM</span>
                <strong>₹2,000 - ₹2,500</strong>
              </li>
              <li className="flex justify-between border-b border-foreground/10 pb-2">
                <span>Kollam Junction (Railway) to TKM</span>
                <strong>₹200 - ₹300</strong>
              </li>
              <li className="flex justify-between border-b border-foreground/10 pb-2">
                <span>City Center Hotels to TKM</span>
                <strong>₹250 - ₹400</strong>
              </li>
              <li><em>* Note: Uber and Ola are active in the region. Local auto-rickshaws are easily available.</em></li>
            </ul>
          </div>

          <SectionHeading>Local Attractions</SectionHeading>
          <div className="bg-surface border-2 border-foreground p-8">
            <ul className="font-sans text-base space-y-3 text-foreground/80">
              <li><strong>Ashtamudi Lake:</strong> Famous for houseboat cruises and scenic beauty.</li>
              <li><strong>Jatayu Earth's Center:</strong> World's largest bird sculpture, a must-visit.</li>
              <li><strong>Munroe Island:</strong> Experience the serene backwaters of Kerala.</li>
              <li><strong>Thangassery Lighthouse:</strong> Historic lighthouse offering panoramic views.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
