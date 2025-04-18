
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-studio-muted/10 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">33 Digital</h3>
            <p className="text-gray-300 mb-2">
              A venture and product studio based in Austin, Texas.
            </p>
            <p className="text-gray-300 mb-6">
              We partner with early-stage founders to launch scalable, self-sustaining businesses.
            </p>
            <div className="flex space-x-4">
              <a 
                href="http://www.x.com/seanraf"
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-studio-accent transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <X size={20} />
              </a>
              <a 
                href="http://www.linkedin.com/in/seanraftery"
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-300 hover:text-studio-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link to="/" className="text-gray-300 hover:text-studio-accent transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-studio-accent transition-colors">
                Portfolio
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-studio-accent transition-colors">
                About
              </Link>
              {/* <Link to="/blog" className="text-gray-300 hover:text-studio-accent transition-colors">
                Blog
              </Link> */}
              <a
                href="mailto:hello@33d.co"
                className="text-gray-300 hover:text-studio-accent transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              We're always looking to connect with founders who are building something meaningful.
            </p>
            <a
              href="mailto:hello@33d.co"
              className="btn-primary inline-block py-3 px-8"
            >
              Email Us
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} 33 Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
