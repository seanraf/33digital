
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-muted/10 py-16 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              Ready to build something great together? Let's talk about your vision.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="What are you building?"
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="How can we help?"
                  rows={4}
                  className="w-full bg-studio-muted/20 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-studio-accent/50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary px-6 py-2"
              >
                Submit
              </button>
            </form>
          </div>
          
          <div className="md:pl-8">
            <h2 className="text-2xl font-bold mb-6">33 Digital</h2>
            <p className="text-gray-300 mb-8">
              A venture and product studio based in Austin, Texas. We partner with early-stage 
              founders to launch scalable, self-sustaining businesses.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-studio-accent transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="text-gray-300 hover:text-studio-accent transition-colors">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-300 hover:text-studio-accent transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} 33 Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
