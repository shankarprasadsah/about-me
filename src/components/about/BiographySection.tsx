import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const BiographySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-about-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 shadow-soft border-0 bg-white/70 backdrop-blur-sm hover:shadow-colorful transition-all duration-500 animate-slide-up">
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-about-primary/30" />
              
              <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
                <p>
                  Hello! I'm Alex, a passionate creative developer with over 5 years of experience 
                  crafting digital experiences that blend aesthetics with functionality. My journey 
                  began with a Computer Science degree, but my true passion lies at the intersection 
                  of technology and design.
                </p>
                
                <p>
                  I specialize in front-end development using modern technologies like React, Vue, 
                  and TypeScript, while also having a keen eye for UI/UX design. I believe that 
                  great software should not only work flawlessly but also feel intuitive and 
                  delightful to use.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to 
                  open-source projects, or enjoying a good cup of coffee while sketching new ideas. 
                  I'm always excited to collaborate on projects that make a positive impact and 
                  push the boundaries of what's possible on the web.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-gradient-hero text-white px-4 py-2 rounded-full text-sm font-medium">
                  5+ Years Experience
                </div>
                <div className="bg-gradient-section text-white px-4 py-2 rounded-full text-sm font-medium">
                  50+ Projects Completed
                </div>
                <div className="bg-gradient-skills text-white px-4 py-2 rounded-full text-sm font-medium">
                  15+ Happy Clients
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};