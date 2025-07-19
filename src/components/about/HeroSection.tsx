import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-white/20 rounded-full animate-bounce-soft"></div>
        <div className="absolute bottom-40 left-20 w-5 h-5 bg-white/25 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-white/35 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-white animate-fade-in">
        <div className="relative mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-colorful overflow-hidden hover:scale-105 transition-transform duration-300">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce-soft">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Alex Chen
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-8 text-white/90 animate-slide-up">
          Creative Developer & UI/UX Designer
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto text-white/80 leading-relaxed animate-slide-up">
          Passionate about creating beautiful, functional, and user-centered digital experiences 
          that make a positive impact on people's lives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg" 
            className="bg-white text-about-primary hover:bg-white/90 shadow-colorful hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-about-primary shadow-soft transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};