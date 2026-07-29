import { SectionHeading } from "@/components/ui/SectionHeading";
import { committee } from "@/data/committee";

export const metadata = {
  title: "Committee | IC-AITEWA 2027",
  description: "Organizing and Advisory Committees for IC-AITEWA 2027.",
};

const CommitteeBlock = ({ title, members, isMain = false }: { title: string, members: { name: string, title: string }[], isMain?: boolean }) => (
  <div className="mb-16">
    <SectionHeading>{title}</SectionHeading>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {members.map((member, idx) => (
        <div key={idx} className={`p-6 ${isMain ? 'bg-foreground text-surface shadow-[8px_8px_0_0_#C1502E]' : 'bg-surface border-2 border-foreground/20'}`}>
          <p className="font-serif font-bold text-2xl mb-2">{member.name}</p>
          <p className={`font-sans text-sm font-bold uppercase tracking-wide ${isMain ? 'text-primary' : 'text-foreground/70'}`}>
            {member.title}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const ListBlock = ({ title, items }: { title: string, items: string[] }) => (
  <div className="mb-16">
    <SectionHeading>{title}</SectionHeading>
    <div className="bg-surface border-t-4 border-foreground p-8">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
        {items.map((item, idx) => (
          <li key={idx} className="font-sans text-lg flex items-center gap-4 border-b border-foreground/5 pb-3">
            <span className="w-2 h-2 bg-primary rounded-full shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function CommitteePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center">Organizing Committee</h1>

      <CommitteeBlock title="Chief Patron" members={committee.chiefPatrons} isMain={true} />
      <CommitteeBlock title="Patrons" members={committee.patrons} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <CommitteeBlock title="Chairman" members={committee.chairman} isMain={true} />
        <CommitteeBlock title="Chair" members={committee.chair} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
        <CommitteeBlock title="Organizing Secretaries" members={committee.organizingSecretaries} />
        <CommitteeBlock title="Joint Secretaries" members={committee.jointSecretaries} />
      </div>

      <div className="mt-20 pt-16 border-t-8 border-foreground">
        <h2 className="font-serif text-4xl font-bold mb-16 text-center">Advisory & Partners</h2>
        <ListBlock title="Advisory Committee" items={committee.advisoryCommittee} />
        <ListBlock title="Participating Institutes" items={committee.participatingInstitutes} />
        <ListBlock title="Industry Partners" items={committee.industryPartners} />
      </div>
    </div>
  );
}
