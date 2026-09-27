import { SectionHeading } from "@/components/ui/SectionHeading";
import { committee, CommitteeMember } from "@/data/committee";

export const metadata = {
  title: "Committee | IC-AITEWA 2027",
  description: "Organizing Committee, International & National Advisory Boards, and Student Council for IC-AITEWA 2027.",
};

interface MemberCardProps {
  member: CommitteeMember;
  badge?: string;
}

const MemberPhotoCard = ({ member, badge }: MemberCardProps) => (
  <div className="flex flex-col items-center text-center border-2 border-foreground bg-surface p-8 shadow-[8px_8px_0_0_#1C1712] hover:-translate-y-1 transition-transform duration-300 h-full">
    <div className="w-32 h-32 md:w-36 md:h-36 rounded-full mb-6 border-4 border-foreground/30 shadow-md overflow-hidden shrink-0 bg-foreground/10 relative">
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full bg-primary/20 flex items-center justify-center">
          <span className="font-serif text-3xl font-bold text-primary">
            {member.name.replace(/^(Dr\.|Prof\.|Mr\.|Ms\.|Sri\.)\s*/i, '').charAt(0)}
          </span>
        </div>
      )}
    </div>

    {badge && (
      <span className="inline-block font-sans text-xs font-bold uppercase tracking-widest text-primary mb-2">
        {badge}
      </span>
    )}
    <p className="font-serif font-bold text-xl md:text-2xl mb-2 text-foreground">{member.name}</p>
    <p className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-foreground/80 leading-relaxed mt-auto">
      {member.title}
    </p>
  </div>
);

const CommitteeGrid = ({ 
  title, 
  members,
  columns = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
}: { 
  title: string; 
  members: { name: string; title: string }[];
  columns?: string;
}) => (
  <div className="mb-20">
    <SectionHeading>{title}</SectionHeading>
    <div className={`grid ${columns} gap-6`}>
      {members.map((member, idx) => (
        <div 
          key={idx} 
          className="bg-surface border-2 border-foreground p-6 shadow-[6px_6px_0_0_#1C1712] hover:-translate-y-0.5 transition-transform duration-200 flex flex-col justify-between"
        >
          <p className="font-serif font-bold text-lg md:text-xl text-foreground mb-1">{member.name}</p>
          <p className="font-sans text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed">
            {member.title}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const StudentCouncilBlock = ({
  members,
}: {
  members: { name: string; title: string }[];
}) => {
  const getBadgeColor = (title: string) => {
    if (title.includes('Head')) return 'bg-primary text-surface';
    if (title.includes('Tech Coordinator')) return 'bg-foreground text-surface';
    if (title.includes('Research Scholar')) return 'bg-primary/20 text-primary font-bold border border-primary/30';
    return 'bg-foreground/10 text-foreground';
  };

  return (
    <div className="mb-20">
      <SectionHeading>Student Council</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, idx) => {
          const parts = member.title.split(', ');
          const role = parts[0] || member.title;
          const dept = parts.slice(1).join(', ') || '';

          return (
            <div 
              key={idx} 
              className="bg-surface border-2 border-foreground p-6 shadow-[6px_6px_0_0_#1C1712] hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-block font-sans text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${getBadgeColor(role)}`}>
                    {role}
                  </span>
                </div>
                <p className="font-serif font-bold text-lg text-foreground mb-1">{member.name}</p>
              </div>
              {dept && (
                <p className="font-sans text-xs text-foreground/70 mt-3 pt-3 border-t border-foreground/10">
                  {dept}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function CommitteePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-16 sm:mb-20">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Organizing Committee
        </h1>
        <p className="font-sans text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Distinguished leadership, academic chairs, international secretaries, and advisory members guiding IC-AITEWA 2027.
        </p>
      </div>

      {/* 1. Chief Patron (Brochure Page 3) */}
      <div className="mb-20">
        <SectionHeading>Chief Patron</SectionHeading>
        <div className="max-w-md mx-auto">
          {committee.chiefPatrons.map((member, idx) => (
            <MemberPhotoCard key={idx} member={member} badge="Chief Patron" />
          ))}
        </div>
      </div>

      {/* 2. Honorary Patron & Patrons (Brochure Page 3 Tier) */}
      <div className="mb-20">
        <SectionHeading>Honorary Patron & Patrons</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Honorary Patron */}
          {committee.honoraryPatrons.map((member, idx) => (
            <MemberPhotoCard key={`hon-${idx}`} member={member} badge="Honorary Patron" />
          ))}
          {/* Patrons */}
          {committee.patrons.map((member, idx) => (
            <MemberPhotoCard key={`patron-${idx}`} member={member} badge="Patron" />
          ))}
        </div>
      </div>

      {/* 3. Conference Chair & Co-Chair (Brochure Page 3 Tier) */}
      <div className="mb-20">
        <SectionHeading>Conference Chairs</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-8 justify-center">
          {committee.conferenceChair.map((member, idx) => (
            <MemberPhotoCard key={`chair-${idx}`} member={member} badge="Conference Chair" />
          ))}
          {committee.conferenceCoChair.map((member, idx) => (
            <MemberPhotoCard key={`co-chair-${idx}`} member={member} badge="Conference Co-Chair" />
          ))}
        </div>
      </div>

      {/* 4. Organizing Secretaries (Brochure Page 3 exact order 1..6) */}
      <div className="mb-20">
        <SectionHeading>Organizing Secretaries</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {committee.organizingSecretaries.map((member, idx) => (
            <MemberPhotoCard key={idx} member={member} badge="Organizing Secretary" />
          ))}
        </div>
      </div>

      {/* 5. Joint Secretaries (Brochure Page 4) */}
      <CommitteeGrid 
        title="Joint Secretaries" 
        members={committee.jointSecretaries} 
        columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      />

      {/* 6. Advisory Committees & Student Council (Brochure Pages 4 & 5) */}
      <div className="mt-24 pt-16 border-t-8 border-foreground">
        {/* International Advisory Committee (Brochure Page 4) */}
        <CommitteeGrid 
          title="International Advisory Committee" 
          members={committee.internationalAdvisoryCommittee} 
          columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        />

        {/* National Advisory Committee (Brochure Page 5) */}
        <div className="border-t border-foreground/20 pt-16 mt-16">
          <CommitteeGrid 
            title="National Advisory Committee" 
            members={committee.nationalAdvisoryCommittee} 
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          />
        </div>

        {/* Student Council (Brochure Page 5) */}
        <div className="border-t border-foreground/20 pt-16 mt-16">
          <StudentCouncilBlock members={committee.studentCouncil} />
        </div>
      </div>
    </div>
  );
}
