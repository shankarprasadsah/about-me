import { Code, Palette, Database, Smartphone } from "lucide-react";

const skills = [
  { name: "React/Next.js", level: 95, icon: Code },
  { name: "TypeScript", level: 90, icon: Code },
  { name: "UI/UX Design", level: 92, icon: Palette },
  { name: "Node.js", level: 82, icon: Database },
  { name: "Figma", level: 90, icon: Palette },
  { name: "React Native", level: 80, icon: Smartphone },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-about-primary">
            Skills & Expertise
          </h2>
          <div className="w-24 h-px bg-about-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-about-primary/5 flex items-center justify-center">
                    <skill.icon className="w-4 h-4 text-about-primary" />
                  </div>
                  <span className="font-light text-about-primary">{skill.name}</span>
                </div>
                <span className="text-about-secondary font-light text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-100 h-1 overflow-hidden">
                <div
                  className="h-full bg-about-primary transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-about-secondary mb-8 font-light">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Vue.js", "Python", "AWS", "Docker", "GraphQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-about-secondary/20 text-about-secondary rounded-sm text-sm font-light hover:border-about-primary hover:text-about-primary transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};