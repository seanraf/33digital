
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-muted/10 py-16 border-t border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">About 33 Digital</h2>
            <p className="text-gray-300 mb-6">
              33 Digital is a top venture studio and product studio based in Austin, Texas. 
              We work with early-stage founders to build scalable, self-sustaining digital businesses. 
              Whether you are part of the startup community in Texas or building globally, 
              we help turn your ideas into products that sell themselves.
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
          
          <div className="md:pl-8">
            <h2 className="text-2xl font-bold mb-6">Our Focus</h2>
            <p className="text-gray-300 mb-6">
              At 33 Digital, we specialize in building digital products that scale themselves. 
              Our expertise spans product-led growth, community-building, and leveraging AI for 
              startup advantage. Based in Austin, Texas, we bring Silicon Valley quality with 
              Texas-sized ambition.
            </p>
            <p className="text-gray-300">
              We're part of the growing tech innovation ecosystem in Austin, 
              helping create the next generation of startup studios and venture builders.
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
