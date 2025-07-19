import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, CheckCircle, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleDownloadResume = () => {
    toast({
      title: "Resume downloaded!",
      description: "The resume has been downloaded to your device.",
    });
  };

  return (
    <section className="py-20 bg-gradient-contact relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full animate-pulse-soft"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-white/15 rounded-full animate-bounce-soft"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-lg text-white/90 mt-6 max-w-2xl mx-auto">
            Ready to start a project together or just want to say hello? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-colorful border-0 bg-white/10 backdrop-blur-md animate-slide-up">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 hover:bg-white/25 transition-all duration-300"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 hover:bg-white/25 transition-all duration-300"
                  />
                </div>
              </div>
              
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 hover:bg-white/25 transition-all duration-300"
              />
              
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 hover:bg-white/25 resize-none transition-all duration-300"
              />
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-about-primary hover:bg-white/90 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin w-5 h-5 border-2 border-about-primary border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Resume Download */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="p-8 shadow-soft border-0 bg-white/10 backdrop-blur-md text-white">
              <h3 className="text-2xl font-semibold mb-6">
                Let's Talk About Your Project
              </h3>
              
              <div className="space-y-4 text-white/90">
                <p className="leading-relaxed">
                  I'm always excited to work on new projects and collaborate with 
                  passionate people. Whether you have a specific project in mind or 
                  just want to explore possibilities, I'd love to chat.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-white/70" />
                    <span>Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-white/70" />
                    <span>Quick response time (24-48 hours)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-white/70" />
                    <span>Flexible engagement models</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-white/70" />
                    <span>End-to-end project support</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-soft border-0 bg-white/10 backdrop-blur-md text-white text-center">
              <h3 className="text-xl font-semibold mb-4">
                Want to Know More?
              </h3>
              <p className="text-white/90 mb-6">
                Download my resume to see my full experience, education, and project details.
              </p>
              <Button
                onClick={handleDownloadResume}
                className="bg-white text-about-primary hover:bg-white/90 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};