import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About | IC-AITEWA 2027",
  description: "Learn about the vision of IC-AITEWA 2027 and the organizing institutions.",
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
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About the Conference</h1>
        <p className="font-sans text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-4xl mx-auto">
          Uniting global experts to address critical challenges in energy, water, and manufacturing through the lens of artificial intelligence and smart automation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-8 space-y-8">
          <SectionHeading>Thematic Vision</SectionHeading>
          <div className="prose prose-lg prose-neutral max-w-none font-sans text-foreground/90 leading-relaxed text-justify">
            <p className="text-xl font-serif text-foreground font-semibold mb-6">
              IC-AITEWA 2027 - International Conference on Artificial Intelligence and Intelligent Technologies for Energy, Water and Automation brings together researchers, academicians, industry leaders, innovators, and young researchers to explore how intelligent technologies can address some of the world&apos;s most pressing engineering challenges
            </p>
            <p>
              Held at TKM College of Engineering, Kollam, the three-day international conference is centred on the theme “Advancing Sustainable Energy, Water Security and Smart Automation through Intelligent Technologies.” The conference will create a dynamic platform for exchanging ideas, presenting cutting-edge research, fostering interdisciplinary collaboration, and building meaningful international and industry partnerships across Artificial Intelligence, Sustainable Energy, Water Technologies, Intelligent Manufacturing, Robotics, Digital Twins, Industry 5.0, and Smart Infrastructure
            </p>
            <p>
              Featuring international and national keynote speakers, technical sessions, expert panels, research presentations, innovation showcases, pre-conference workshops, and an industry exhibition, IC-AITEWA 2027 aims to connect research with real-world impact and bring together diverse perspectives to shape a smarter, more sustainable, and technologically advanced future
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
              <p className="font-sans text-base leading-relaxed text-surface/90">
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

          <div className="bg-surface border-2 border-foreground p-10 hover:border-primary transition-colors duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/tkm-favicon.png" 
                alt="TKM College of Engineering Logo" 
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">TKM College of Engineering</h3>
                <p className="font-sans font-bold tracking-widest uppercase text-primary text-xs sm:text-sm">Est. 1958 • Kollam, Kerala</p>
              </div>
            </div>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/80 text-justify">
              TKM College of Engineering is more than an institution of engineering - it is a legacy of vision, innovation, and ambition that has been shaping generations since 1958. Founded by the visionary Janab Thangal Kunju Musaliar, the pioneering engineering college in Kerala has grown into a dynamic community of students, researchers, innovators, and changemakers. Set against the rich cultural landscape of Kerala, the campus brings together academic excellence, cutting-edge technology, hands-on learning, research, creativity, and a spirit of entrepreneurship.
            </p>
          </div>

          <div className="bg-surface border-2 border-foreground p-10 hover:border-primary transition-colors duration-300">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/logo-icon.png" 
                alt="IC-AITEWA Organizing Department" 
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">Dept. of Mechanical Engineering</h3>
                <p className="font-sans font-bold tracking-widest uppercase text-primary text-xs sm:text-sm">TKM College of Engineering</p>
              </div>
            </div>
            <p className="font-sans text-base sm:text-lg leading-relaxed text-foreground/80 text-justify">
              The Department of Mechanical Engineering at TKM College of Engineering is a centre of academic excellence, technical expertise, and innovation. With a strong foundation in mechanical sciences and engineering principles, the department provides students with comprehensive exposure to design, manufacturing, thermal and fluid sciences, materials, automation, robotics, and emerging technologies. Supported by experienced faculty, well-equipped laboratories, research activities, and practical learning, the department fosters an environment where students can develop both theoretical knowledge and engineering skills.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
