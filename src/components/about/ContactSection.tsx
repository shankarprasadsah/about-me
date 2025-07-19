import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
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

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-about-primary">
            Get In Touch
          </h2>
          <div className="w-24 h-px bg-about-secondary mx-auto"></div>
          <p className="text-about-secondary text-lg mt-6 font-light">
            Ready to bring your ideas to life? Let's start a conversation!
          </p>
        </div>
        
        <div className="bg-white rounded-sm p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-about-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 text-about-primary placeholder-about-secondary/50 focus:outline-none focus:border-about-primary transition-colors duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-light text-about-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 text-about-primary placeholder-about-secondary/50 focus:outline-none focus:border-about-primary transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-light text-about-primary mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 text-about-primary placeholder-about-secondary/50 focus:outline-none focus:border-about-primary transition-colors duration-200"
                placeholder="Project Collaboration"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-light text-about-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 text-about-primary placeholder-about-secondary/50 focus:outline-none focus:border-about-primary transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or just say hello!"
                required
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button 
                type="submit"
                variant="outline"
                size="lg" 
                disabled={isSubmitting}
                className="border-about-primary text-about-primary hover:bg-about-primary hover:text-white px-8 py-3 transition-all duration-200 font-light"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin w-5 h-5 border-2 border-about-primary border-t-transparent rounded-full mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 text-about-secondary">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-light">alex@example.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-light">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="font-light">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};