import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Palette, Database, Smartphone } from "lucide-react";

const skills = [
  { 
    category: "Frontend", 
    icon: Code, 
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Vue.js", level: 85 }
    ],
    color: "about-primary"
  },
  { 
    category: "Design", 
    icon: Palette, 
    skills: [
      { name: "UI/UX Design", level: 92 },
      { name: "Figma", level: 90 },
      { name: "Adobe Creative Suite", level: 85 },
      { name: "Prototyping", level: 88 }
    ],
    color: "about-secondary"
  },
  { 
    category: "Backend", 
    icon: Database, 
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Python", level: 78 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 85 }
    ],
    color: "about-accent"
  },
  { 
    category: "Mobile", 
    icon: Smartphone, 
    skills: [
      { name: "React Native", level: 80 },
      { name: "Flutter", level: 75 },
      { name: "Progressive Web Apps", level: 88 },
      { name: "Mobile UI/UX", level: 90 }
    ],
    color: "about-success"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-about-primary/5 to-about-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-skills mx-auto rounded-full"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.category} 
                className="p-6 shadow-soft border-0 bg-white/70 backdrop-blur-sm hover:shadow-colorful transition-all duration-500 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/20 flex items-center justify-center hover:bg-${category.color}/30 transition-colors duration-300`}>
                    <IconComponent className={`w-8 h-8 text-${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground/80">
                          {skill.name}
                        </span>
                        <span className="text-sm text-foreground/60">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200"
                        style={{
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};