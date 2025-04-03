
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your message has been sent!", {
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <footer id="contact" className="bg-black py-10">
      <div className="section-container">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-10 text-center">
            Let's build something great together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-studio-muted border-studio-muted text-white placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="bg-studio-muted border-studio-muted text-white placeholder-gray-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-1">
                What are you building?
              </label>
              <Textarea
                id="project"
                placeholder="Tell us about your project"
                className="bg-studio-muted border-studio-muted text-white placeholder-gray-500 min-h-[100px]"
                required
              />
            </div>
            
            <div>
              <label htmlFor="help" className="block text-sm font-medium text-gray-300 mb-1">
                How can we help?
              </label>
              <Textarea
                id="help"
                placeholder="Let us know how we can support you"
                className="bg-studio-muted border-studio-muted text-white placeholder-gray-500 min-h-[100px]"
                required
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                className="bg-studio-accent hover:bg-studio-accent-hover text-white px-8 py-6"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>

        <div className="separator"></div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/edccc396-c913-4335-a752-a447c82e36d9.png" 
                alt="33 Digital" 
                className="h-10" 
              />
            </Link>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} 33 Digital LLC. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-studio-accent">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-studio-accent">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-studio-accent">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
