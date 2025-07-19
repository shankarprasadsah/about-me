import { Coffee, Camera, Music, Gamepad2, Book, Plane } from "lucide-react";

const funFacts = [
  {
    icon: Coffee,
    title: "Coffee Enthusiast",
    description: "I consume an average of 4 cups of coffee per day",
  },
  {
    icon: Camera,
    title: "Photography Hobbyist",
    description: "Captured over 10,000 photos in the last year",
  },
  {
    icon: Music,
    title: "Music Producer",
    description: "Created 25+ electronic music tracks in my home studio",
  },
  {
    icon: Gamepad2,
    title: "Gaming Enthusiast",
    description: "Completed 50+ indie games and love game design",
  },
  {
    icon: Book,
    title: "Avid Reader",
    description: "Read 24 books last year, mostly sci-fi and design",
  },
  {
    icon: Plane,
    title: "Travel Lover",
    description: "Visited 15 countries and counting",
  }
];

export const FunFactsSection = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-about-primary">
            Fun Facts & Interests
          </h2>
          <div className="w-24 h-px bg-about-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {funFacts.map((fact) => (
            <div key={fact.title} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-sm bg-white flex items-center justify-center shadow-soft">
                  <fact.icon className="w-8 h-8 text-about-primary" />
                </div>
              </div>
              <h3 className="text-xl font-light text-about-primary mb-2">{fact.title}</h3>
              <p className="text-about-secondary font-light text-sm">{fact.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-sm p-8 shadow-soft">
            <h3 className="text-2xl font-light text-about-primary mb-4">Currently Exploring</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["AI/ML", "Web3", "Mobile Development", "3D Graphics", "Blockchain"].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 border border-about-secondary/20 text-about-secondary rounded-sm text-sm font-light hover:border-about-primary hover:text-about-primary transition-colors duration-200"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};