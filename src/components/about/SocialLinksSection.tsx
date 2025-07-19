import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:alex@example.com",
  }
];

export const SocialLinksSection = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-about-primary">
            Let's Connect
          </h2>
          <div className="w-24 h-px bg-about-secondary mx-auto"></div>
        </div>
        
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="w-12 h-12 rounded-sm border border-about-secondary/20 flex items-center justify-center text-about-secondary hover:border-about-primary hover:text-about-primary transition-all duration-200">
                <link.icon className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs font-light text-about-secondary">
                  {link.name}
                </span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-about-secondary mb-6 font-light">
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
          <Button 
            variant="outline"
            size="lg" 
            className="border-about-primary text-about-primary hover:bg-about-primary hover:text-white px-8 py-3 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};