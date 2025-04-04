
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. We'll be in touch shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <footer className="bg-studio-muted/5 py-20 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Contact Form */}
          <div className="md:border-r md:border-gray-800 md:pr-8">
            <h2 className="text-2xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-gray-300 mb-6">
              If you're a founder building something meaningful, we want to hear from you.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50 transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">What are you building?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50 transition-all resize-none"
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-studio-accent text-white py-3 px-6 rounded-md hover:bg-studio-accent/90 transition-colors flex items-center justify-center group"
                >
                  {isSubmitting ? "Submitting..." : (
                    <>
                      Submit
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* Column 2: About 33 Digital */}
          <div className="md:px-8">
            <h2 className="text-2xl font-bold mb-6">About 33 Digital</h2>
            <p className="text-gray-300 mb-6">
              33 Digital is a top venture studio and product studio based in Austin, Texas. 
              We partner with early-stage founders to build scalable, self-sustaining digital businesses. 
              Whether you are part of the Austin startup community or building globally, 
              we help turn ambitious ideas into products that sell themselves. 
              Combining Silicon Valley ideas with Texas-sized ambition, we are helping 
              to shape the next generation of innovation studios and founder studios.
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
              <div className="flex items-center space-x-2 text-gray-300 mb-2">
                <MapPin className="h-4 w-4 text-studio-accent" />
                <span>Austin, Texas</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-studio-accent" />
                <a href="mailto:hello@33.digital" className="hover:text-studio-accent transition-colors">
                  hello@33.digital
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 3: Our Focus */}
          <div className="md:border-l md:border-gray-800 md:pl-8">
            <h2 className="text-2xl font-bold mb-6">Our Focus</h2>
            <p className="text-gray-300 mb-6">
              At 33 Digital, we specialize in building digital products that scale themselves 
              through product-led growth, AI-powered automation, and community-driven engagement. 
              We work with startups at the earliest stages, bringing our expertise in tech innovation, 
              startup strategy, and venture building to accelerate growth. As part of Austin's fast-growing 
              ecosystem of startup factories and venture studios, we help founders turn provocative ideas 
              into self-sustaining businesses that thrive in any market.
            </p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> Home
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> About
                </Link>
                <Link to="/portfolio" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> Portfolio
                </Link>
                <Link to="/blog" className="text-gray-300 hover:text-studio-accent transition-colors flex items-center">
                  <ArrowRight className="mr-2 h-3 w-3" /> Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} 33 Digital. All rights reserved.
          </p>
          <p className="text-center text-gray-500 text-sm mt-2">
            Venture Studio & Product Builders in Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
