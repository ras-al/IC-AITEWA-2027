import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About | IC-AITEWA 2027",
  description: "Learn about the vision of IC-AITEWA 2027 and the organizing institutions.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center">About the Conference</h1>
      <p className="font-sans text-xl md:text-2xl leading-relaxed text-foreground/80 mb-20 max-w-4xl mx-auto text-center">
        Uniting global experts to address critical challenges in energy, water, and manufacturing through the lens of artificial intelligence and smart automation.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-8 space-y-8">
          <SectionHeading>Thematic Vision</SectionHeading>
          <div className="prose prose-lg prose-neutral max-w-none font-sans text-foreground/90 leading-relaxed">
            <p className="text-xl font-serif text-foreground font-semibold mb-6">
              The convergence of artificial intelligence, intelligent systems, cyber-physical automation, and digital manufacturing is fundamentally reshaping industry, energy grids, and water infrastructure.
            </p>
            <p>
              These technologies are no longer just theoretical concepts; they are positioned as essential, practical tools for addressing the world&apos;s most pressing challenges. From mitigating climate change and stabilizing decentralized renewable energy grids, to ensuring water security and optimizing complex industrial manufacturing processes, intelligent technologies are at the forefront of sustainable engineering.
            </p>
            <p>
              IC-AITEWA 2027 aims to serve as a globally recognized, premier platform. It brings together researchers, academicians, industry practitioners, and policymakers to exchange pioneering knowledge, foster collaboration, and ultimately translate academic research into scalable, commercialized solutions.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-foreground text-surface p-8 shadow-[8px_8px_0_0_#C1502E] h-full">
            <h3 className="font-sans font-bold text-lg tracking-widest uppercase mb-6 text-primary border-b-2 border-surface/20 pb-4">
              International Partnership
            </h3>
            <h4 className="font-serif text-3xl font-bold mb-4">Sophia University</h4>
            <p className="font-sans font-bold tracking-wide uppercase text-surface/60 mb-6">Tokyo, Japan</p>
            <p className="font-sans text-base leading-relaxed text-surface/90">
              Our collaboration objective is to establish IC-AITEWA as a globally recognized event that promotes excellence in research and innovation, while actively strengthening international academic partnerships and industry engagement in the field of intelligent technologies for sustainable engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-foreground/10 pt-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Organizing Institutions</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-surface border-2 border-foreground p-10 hover:border-primary transition-colors duration-300">
            <h3 className="font-serif text-3xl font-bold mb-2">TKM College of Engineering</h3>
            <p className="font-sans font-bold tracking-widest uppercase text-primary mb-6 text-sm">Est. 1958 • Kollam, Kerala</p>
            <p className="font-sans text-lg leading-relaxed text-foreground/80">
              Established by Janab Thangal Kunju Musaliar under the TKM College Trust, TKM College of Engineering is Kerala&apos;s oldest government-aided autonomous engineering institution in the private sector. Over six decades, it has produced accomplished engineers with a global footprint. The institution is renowned for offering modern computational labs, advanced testing facilities, and a highly collaborative academic environment.
            </p>
          </div>

          <div className="bg-surface border-2 border-foreground p-10 hover:border-primary transition-colors duration-300">
            <h3 className="font-serif text-3xl font-bold mb-2">Dept. of Mechanical Engineering</h3>
            <p className="font-sans font-bold tracking-widest uppercase text-primary mb-6 text-sm">TKM College of Engineering</p>
            <p className="font-sans text-lg leading-relaxed text-foreground/80">
              Established alongside the college in 1958, this is one of Kerala&apos;s oldest and most prestigious mechanical engineering departments. It offers comprehensive B.Tech, M.Tech, and Ph.D. programmes backed by modern laboratories, strong research facilities, and an uncompromising commitment to excellence in engineering education and practical innovation.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
