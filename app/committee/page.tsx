import { SectionHeading } from "@/components/ui/SectionHeading";
import { committee } from "@/data/committee";

export const metadata = {
  title: "Committee | IC-AITEWA 2027",
  description: "Organizing and Advisory Committees for IC-AITEWA 2027.",
};

const CommitteeBlock = ({ title, members }: { title: string, members: { name: string, title: string }[] }) => (
  <div className="mb-16">
    <SectionHeading>{title}</SectionHeading>
    <div className="flex flex-wrap justify-center gap-8">
      {members.map((member, idx) => (
        <div key={idx} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] p-8 flex flex-col items-center text-center border-2 border-foreground bg-surface shadow-[8px_8px_0_0_#1C1712] hover:-translate-y-1 transition-transform duration-300">
          
          <div className="w-32 h-32 bg-foreground/10 rounded-full mb-6 border-4 border-surface shadow-md overflow-hidden shrink-0">
            {/* Image Placeholder */}
            <div className="w-full h-full bg-primary/20 flex items-center justify-center">
              <span className="font-serif text-3xl font-bold text-primary">{member.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.)\s*/i, '').charAt(0)}</span>
            </div>
          </div>

          <p className="font-serif font-bold text-xl mb-2 text-foreground">{member.name}</p>
          <p className="font-sans text-xs font-bold uppercase tracking-widest whitespace-pre-line text-primary">
            {member.title.replace('Joint Secretary, ', 'Joint Secretary\n')}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const MarqueeBlock = ({ items }: { items: { name: string, logo: string }[] }) => {
  const extendedItems = [...items, ...items, ...items, ...items];
  return (
    <div className="mb-16 overflow-hidden w-full relative before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent">
      <div className="flex w-max animate-marquee gap-16 py-8 hover:[animation-play-state:paused]">
        {extendedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 flex flex-col items-center justify-center w-48 h-48 bg-surface border-2 border-foreground shadow-[8px_8px_0_0_#1C1712] hover:-translate-y-1 transition-transform duration-300 p-6">
            {/* Using a standard img since these might be simple placeholders initially */}
            <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

const ListBlock = ({ title, items }: { title: string, items: string[] }) => (
  <div className="mb-16">
    <SectionHeading>{title}</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, idx) => (
        <div key={idx} className="bg-surface border-2 border-foreground/20 p-6 h-full flex items-center gap-4">
          <div className="w-12 h-12 bg-foreground/5 rounded-full flex items-center justify-center shrink-0 overflow-hidden">
             {/* Placeholder for logos */}
             <span className="font-serif text-lg font-bold text-primary">{item.charAt(0)}</span>
          </div>
          <p className="font-sans font-bold text-lg text-foreground">{item}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function CommitteePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center">Organizing Committee</h1>

      <CommitteeBlock title="Chief Patron" members={committee.chiefPatrons} />
      <CommitteeBlock title="Patrons" members={committee.patrons} />
      <CommitteeBlock title="Chairman" members={committee.chairman} />
      <CommitteeBlock title="Chair" members={committee.chair} />
      <CommitteeBlock title="Organizing Secretaries" members={committee.organizingSecretaries} />
      <CommitteeBlock title="Joint Secretaries" members={committee.jointSecretaries} />

      <div className="mt-20 pt-16 border-t-8 border-foreground">
        <CommitteeBlock title="International Advisory Committee" members={committee.internationalAdvisoryCommittee} />
        <div className="border-t border-foreground/20 pt-16 mt-16">
          <CommitteeBlock title="National Advisory Committee" members={committee.nationalAdvisoryCommittee} />
        </div>
      </div>
    </div>
  );
}
