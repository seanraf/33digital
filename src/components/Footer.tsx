
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-white font-bold text-2xl">
              <span className="bg-studio-accent px-2 py-1 mr-1">33</span>
              Digital
            </div>
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
