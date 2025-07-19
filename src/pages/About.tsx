import { HeroSection } from "@/components/about/HeroSection";
import { BiographySection } from "@/components/about/BiographySection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { FunFactsSection } from "@/components/about/FunFactsSection";
import { SocialLinksSection } from "@/components/about/SocialLinksSection";
import { ContactSection } from "@/components/about/ContactSection";
import { Navigation } from "@/components/about/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      <Navigation />
      <HeroSection />
      <BiographySection />
      <SkillsSection />
      <FunFactsSection />
      <SocialLinksSection />
      <ContactSection />
    </div>
  );
};

export default About;