
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

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
    <footer className="bg-studio-muted/10 py-16 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's Build Something Great Together</h2>
            <p className="text-gray-300 mb-6">
              If you are a founder building something meaningful, we want to hear from you.
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
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
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
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
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
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
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
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-6 py-3 w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          
          {/* Column 2: About 33 Digital */}
          <div>
            <h2 className="text-2xl font-bold mb-6">About 33 Digital</h2>
            <p className="text-gray-300 mb-6">
              33 Digital is a top venture studio and product studio based in Austin, Texas. 
              We partner with early-stage founders to build scalable, self-sustaining digital businesses. 
              Whether you are part of the Austin startup community or building globally, 
              we help turn ambitious ideas into products that sell themselves. 
              Combining Silicon Valley ideas with Texas-sized ambition, we are helping 
              to shape the next generation of innovation studios and founder studios.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="grid grid-cols-2 gap-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-studio-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-studio-accent transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="text-gray-300 hover:text-studio-accent transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="text-gray-300 hover:text-studio-accent transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 3: Our Focus */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Focus</h2>
            <p className="text-gray-300">
              At 33 Digital, we specialize in building digital products that scale themselves 
              through product-led growth, AI-powered automation, and community-driven engagement. 
              We work with startups at the earliest stages, bringing our expertise in tech innovation, 
              startup strategy, and venture building to accelerate growth. As part of Austin's fast-growing 
              ecosystem of startup factories and venture studios, we help founders turn provocative ideas 
              into self-sustaining businesses that thrive in any market.
            </p>
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
