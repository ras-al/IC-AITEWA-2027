import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About the Conference | TKM Conference (IC-AITEWA 2027 / AITEWA / AITHWA)",
  description: "About IC-AITEWA 2027 (TKM Conference / AITEWA / AITHWA) — Hosted by TKM College of Engineering (TKMCE), Kollam, in association with the Department of Computer Science & Engineering and Department of Chemical Engineering.",
  keywords: [
    "tkm conference about",
    "aithwa conference about",
    "aitewa 2027 details",
    "tkmce international conference",
  ],
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      <div className="flex flex-col items-center text-center mb-16">
        <div className="mb-6 inline-block">
          <img 
            src="/logo.png" 
            alt="IC-AITEWA 2027 Logo" 
            className="w-44 sm:w-52 h-auto object-contain drop-shadow-sm"
          />
        </div>
        <div className="inline-block bg-primary/10 border border-primary/20 px-3 py-1 font-sans text-xs font-bold uppercase tracking-widest text-primary mb-4">
          A Govt. Aided and Autonomous Institution
        </div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About the Conference</h1>
        <p className="font-sans text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-4xl mx-auto">
          Advancing Sustainable Energy, Water Security and Smart Automation through Intelligent Technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-8 space-y-8">
          <SectionHeading>Thematic Vision</SectionHeading>
          <div className="prose prose-lg prose-neutral max-w-none font-sans text-foreground/90 leading-relaxed text-justify space-y-6">
            <p className="text-xl font-serif text-foreground font-semibold">
              IC-AITEWA 2027 &ndash; International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation brings together researchers, academicians, industry leaders, innovators, and young researchers to explore how intelligent technologies can address some of the world’s most pressing engineering challenges.
            </p>
            <p>
              Held at TKM College of Engineering, Kollam, the three-day international conference is centred on the theme &ldquo;Advancing Sustainable Energy, Water Security and Smart Automation through Intelligent Technologies.&rdquo; The conference will create a dynamic platform for exchanging ideas, presenting cutting-edge research, fostering interdisciplinary collaboration, and building meaningful international and industry partnerships across Artificial Intelligence, Sustainable Energy, Water Technologies, Intelligent Manufacturing, Robotics, Digital Twins, Industry 5.0, and Smart Infrastructure.
            </p>
            <p>
              Featuring international and national plenary keynote speakers, technical sessions, expert panels, research presentations, innovation showcases, pre-conference workshops, and an industry exhibition, IC-AITEWA 2027 aims to connect research with real-world impact and bring together diverse perspectives to shape a smarter, more sustainable, and technologically advanced future.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-foreground text-surface p-8 shadow-[8px_8px_0_0_#C1502E] h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 border-b-2 border-surface/20 pb-4">
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase text-primary">
                  International Partnership
                </h3>
                <img 
                  src="/sophia.png" 
                  alt="Sophia University" 
                  className="h-12 w-12 object-contain bg-white rounded-full p-1 shadow-sm"
                />
              </div>
              <h4 className="font-serif text-3xl font-bold mb-2">Sophia University</h4>
              <p className="font-sans font-bold tracking-wide uppercase text-surface/60 mb-6 text-sm">Tokyo, Japan</p>
              <p className="font-sans text-base leading-relaxed text-surface/90 text-justify">
                Our collaboration objective is to establish IC-AITEWA as a globally recognized event that promotes excellence in research and innovation, while actively strengthening international academic partnerships and industry engagement in the field of intelligent technologies for sustainable engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-4 border-foreground/10 pt-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">Organizing Institutions</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="bg-surface border-2 border-foreground p-10 hover:border-primary transition-colors duration-300 shadow-[8px_8px_0_0_#1C1712] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/tkm-favicon.png" 
                  alt="TKM College of Engineering Logo" 
                  className="h-16 w-auto object-contain"
                />
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">TKM College of Engineering</h3>
                  <p className="font-sans font-bold tracking-widest uppercase text-primary text-xs sm:text-sm">Est. 1958 • Kollam, Kerala, India</p>
                  <span className="text-xs font-sans text-foreground/60 font-medium">Govt. Aided & Autonomous</span>
                </div>
              </div>
              <div className="space-y-4 font-sans text-base leading-relaxed text-foreground/85 text-justify">
                <p>
                  Established in 1958 by the visionary reformer and philanthropist Janab Thangal Kunju Musaliar under the aegis of the TKM College Trust, TKM College of Engineering (TKMCE) in Kollam is the oldest engineering college in the private sector in Kerala. Over nearly seven decades, the institution has stood as a premier torchbearer for technological and societal transformation, producing thousands of globally recognized engineers and industry stalwarts.
                </p>
                <p>
                  Headed by the TKM College Trust and currently led by Janab Shahal Hassan Musaliar, the autonomous institution is affiliated with APJ Abdul Kalam Technological University. Operating with eleven academic departments, TKMCE offers comprehensive Undergraduate, Postgraduate, Doctoral programmes and Post Doctoral programmes. All eligible B.Tech programmes are accredited by the National Board of Accreditation (NBA), reflecting the campus&apos;s unwavering commitment to academic rigor, state-of-the-art research facilities, and engineering excellence. Housed within a distinctive architectural landmark, the campus continues to foster innovation on a national and international scale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border-2 border-foreground p-10 hover:border-primary transition-colors duration-300 shadow-[8px_8px_0_0_#1C1712] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/logo-icon.png" 
                  alt="IC-AITEWA Organizing Department" 
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">Dept. of Mechanical Engineering</h3>
                  <p className="font-sans font-bold tracking-widest uppercase text-primary text-xs sm:text-sm">TKM College of Engineering</p>
                  <span className="text-xs font-sans text-foreground/60 font-medium">Established 1958 • NBA-Accredited</span>
                </div>
              </div>
              <div className="space-y-4 font-sans text-base leading-relaxed text-foreground/85 text-justify">
                <p>
                  The Department of Mechanical Engineering is one of the pioneering branches of TKM College of Engineering. Established in 1958, it stands as one of the oldest and largest departments offering a degree in Mechanical Engineering in Kerala, comprising 46 faculty members and 33 technical staff. Driven by the vision of &ldquo;Excellence in Mechanical Engineering with a perspective of sustainable development,&rdquo; the department offers premier, NBA-accredited Undergraduate (B.Tech), Postgraduate (M.Tech), Doctoral (Ph.D.) programmes and Post Doctoral programmes (PDF). As an AICTE-approved QIP and ADF research center affiliated with APJ Abdul Kalam Technological University and the University of Kerala, it routinely secures funding from top national bodies including ISRO, DAE, ARDB, and ANERT.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-foreground/10">
              <p className="font-sans font-bold text-xs uppercase tracking-wider text-primary mb-3">Key Research Frontiers:</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Advanced Materials",
                  "Automation",
                  "Biomechanics",
                  "Cryogenics",
                  "Fracture Mechanics",
                  "HVAC & Refrigeration",
                  "Nanomaterials & Nanofluids",
                  "Solar Energy Systems",
                  "Superconductivity"
                ].map((item, idx) => (
                  <span key={idx} className="font-sans text-[11px] font-semibold bg-foreground/5 border border-foreground/15 px-2.5 py-1 text-foreground/90">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
