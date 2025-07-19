import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:from-gray-600 hover:to-gray-800",
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:from-blue-500 hover:to-blue-700",
    description: "Let's connect professionally"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "from-sky-400 to-sky-600",
    hoverColor: "hover:from-sky-300 hover:to-sky-500",
    description: "Follow my thoughts"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "from-pink-500 to-purple-600",
    hoverColor: "hover:from-pink-400 hover:to-purple-500",
    description: "Visual inspiration"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:alex@example.com",
    color: "from-green-500 to-emerald-600",
    hoverColor: "hover:from-green-400 hover:to-emerald-500",
    description: "Drop me a line"
  }
];

export const SocialLinksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-about-secondary/5 to-about-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-contact mx-auto rounded-full"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl mx-auto">
            Find me on these platforms and let's start a conversation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  asChild
                  className={`group relative h-auto p-6 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white border-0 shadow-soft hover:shadow-colorful transition-all duration-300 hover:scale-110 hover:-translate-y-2 animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center space-y-3 no-underline"
                  >
                    <div className="relative">
                      <IconComponent className="w-8 h-8 group-hover:animate-bounce-soft" />
                      <ExternalLink className="absolute -top-1 -right-1 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    <div className="text-center">
                      <div className="font-semibold text-sm">
                        {social.name}
                      </div>
                      <div className="text-xs opacity-80 mt-1">
                        {social.description}
                      </div>
                    </div>

                    {/* Decorative glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 animate-slide-up">
            <p className="text-lg text-foreground/70 mb-6">
              Prefer a more direct approach?
            </p>
            <Button 
              size="lg"
              className="bg-gradient-hero text-white hover:opacity-90 shadow-colorful hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};