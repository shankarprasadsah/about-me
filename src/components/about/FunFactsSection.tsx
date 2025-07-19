import { Card } from "@/components/ui/card";
import { Coffee, Camera, Music, Gamepad2, Book, Plane } from "lucide-react";

const funFacts = [
  {
    icon: Coffee,
    title: "Coffee Enthusiast",
    description: "I consume an average of 4 cups of coffee per day ☕",
    color: "about-warning",
    bgColor: "from-amber-400 to-orange-500"
  },
  {
    icon: Camera,
    title: "Photography Hobbyist",
    description: "Captured over 10,000 photos in the last year 📸",
    color: "about-info",
    bgColor: "from-blue-400 to-cyan-500"
  },
  {
    icon: Music,
    title: "Music Producer",
    description: "Created 25+ electronic music tracks in my home studio 🎵",
    color: "about-secondary",
    bgColor: "from-pink-400 to-purple-500"
  },
  {
    icon: Gamepad2,
    title: "Gaming Enthusiast",
    description: "Completed 50+ indie games and love game design 🎮",
    color: "about-success",
    bgColor: "from-green-400 to-emerald-500"
  },
  {
    icon: Book,
    title: "Avid Reader",
    description: "Read 24 books last year, mostly sci-fi and design 📚",
    color: "about-accent",
    bgColor: "from-teal-400 to-blue-500"
  },
  {
    icon: Plane,
    title: "Travel Lover",
    description: "Visited 15 countries and counting ✈️",
    color: "about-primary",
    bgColor: "from-indigo-400 to-purple-500"
  }
];

export const FunFactsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-about-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Fun Facts & Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
            A glimpse into my personality and what makes me tick outside of work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {funFacts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <Card 
                key={fact.title}
                className="group p-6 shadow-soft border-0 bg-white/70 backdrop-blur-sm hover:shadow-colorful transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${fact.bgColor} flex items-center justify-center group-hover:animate-bounce-soft transition-all duration-300 shadow-glow`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-about-primary transition-colors duration-300">
                    {fact.title}
                  </h3>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-about-primary to-about-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-about-accent to-about-success rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};