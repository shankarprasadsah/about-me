import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-about-primary">
            Alex Johnson
          </h1>
          
          <p className="text-xl md:text-2xl text-about-secondary mb-8 font-light">
            Creative Developer & UI/UX Designer
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline"
              size="lg" 
              className="border-about-primary text-about-primary hover:bg-about-primary hover:text-white px-8 py-3 transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-about-secondary hover:text-about-primary px-8 py-3 transition-all duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};